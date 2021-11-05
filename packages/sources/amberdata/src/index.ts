import { expose } from '@chainlink/ea-bootstrap'
import { endpointSelector, makeExecute, makeWSHandler } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig, NAME } from './config'

const { server } = expose(NAME, makeExecute(), makeWSHandler(), endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server }
