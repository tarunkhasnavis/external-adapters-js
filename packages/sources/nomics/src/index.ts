import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute, endpointSelector } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig, NAME } from './config'
import * as types from './endpoint'

const { server } = expose(NAME, makeExecute(), undefined, endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server, types }
