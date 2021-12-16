import { Requester, Validator } from '@chainlink/ea-bootstrap'
import { Config, ExecuteWithConfig, InputParameters } from '@chainlink/types'

// This should be filled in with a lowercase name corresponding to the API endpoint
export const supportedEndpoints = ['minormax']

export interface ResponseSchema {
  address: string
  balance: number
}
// May not be necessary for me
const customError = (data: any) => data.Response === 'Error'

export const inputParameters: InputParameters = {
  // See InputParameters type for more config options
  minormax: ['minormax', 'highorlow'],
  resultPath: {},
}

export const execute: ExecuteWithConfig<Config> = async (request, _, config) => {
  const validator = new Validator(request, inputParameters)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const mom = validator.validated.data.minormax
  const url = `thodges-gh/3bd03660676504478de60c3a17800556/raw/0013f560b97eb1b2481fd4d57f02507c96f0d88f/balances.json`

  // const resultPath = validator.validated.data.resultPath

  const params = {
    minormax: mom,
  }

  const options = { ...config.api, params, url }

  const response = await Requester.request<Array<ResponseSchema>>(options, customError)

  let result: number
  if (mom === 'MIN') {
    let min: number = Number.MAX_SAFE_INTEGER
    response.data.forEach((element) => {
      min = element.balance < min ? element.balance : min
    })
    result = min
  } else if (mom === 'MAX') {
    let max: number = Number.MIN_SAFE_INTEGER
    response.data.forEach((element) => {
      max = element.balance > max ? element.balance : max
    })
    result = max
  } else {
    throw new Error('Invalid parameter value')
  }

  return Requester.success(jobRunID, Requester.withResult(response, result), config.verbose)
}
