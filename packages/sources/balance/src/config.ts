import { Requester } from '@chainlink/ea-bootstrap'
import { Config } from '@chainlink/types'

export const NAME = 'GITHUBUSERCONTENT' // This should be filled in with a name corresponding to the data provider using UPPERCASE and _underscores_.
// export const DEFAULT_ENDPOINT = 'example'
export const DEFAULT_BASE_URL = 'https://gist.githubusercontent.com/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  // config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
