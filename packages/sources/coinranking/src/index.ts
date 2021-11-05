import { expose } from '@chainlink/ea-bootstrap'
import { makeConfig, NAME } from './config'
import * as endpoints from './endpoint'
import { endpointSelector, makeExecute } from './adapter'

const { server } = expose(NAME, makeExecute(), undefined, endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server }
