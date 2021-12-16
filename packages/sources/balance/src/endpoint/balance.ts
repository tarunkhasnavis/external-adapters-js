import { Requester, Validator } from '@chainlink/ea-bootstrap'
import { Config, ExecuteWithConfig, InputParameters } from '@chainlink/types'

// This should be filled in with a lowercase name corresponding to the API endpoint
export const supportedEndpoints = ['balance']

export interface ResponseSchema {
  address: string
  balance: number
}
// May not be necessary for me
const customError = (data: any) => data.Response === 'Error'

// No input parameters for this endpoint
export const inputParameters: InputParameters = {
  // See InputParameters type for more config options
  resultPath: {},
}

export const execute: ExecuteWithConfig<Config> = async (request, _, config) => {
  const validator = new Validator(request, inputParameters)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const url = `thodges-gh/3bd03660676504478de60c3a17800556/raw/0013f560b97eb1b2481fd4d57f02507c96f0d88f/balances.json`

  // const resultPath = validator.validated.data.resultPath

  const params = {}

  const options = { ...config.api, params, url }

  const response = await Requester.request<Array<ResponseSchema>>(options, customError)

  let totalBalance = 0
  response.data.forEach((element) => {
    totalBalance += element.balance
  })
  const result: number = totalBalance

  return Requester.success(jobRunID, Requester.withResult(response, result), config.verbose)
}
