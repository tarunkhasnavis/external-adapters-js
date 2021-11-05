import { expose } from '@chainlink/ea-bootstrap'
import { endpointSelector, makeExecute } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig } from './config'

const NAME = 'ANYBLOCK'

const { server } = expose(NAME, makeExecute(), undefined, endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server }
