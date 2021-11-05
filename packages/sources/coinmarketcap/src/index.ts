import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute, endpointSelector } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig, NAME } from './config'

const server = expose(NAME, makeExecute(), undefined, endpointSelector).server

export { NAME, endpoints, makeConfig, makeExecute, server }
