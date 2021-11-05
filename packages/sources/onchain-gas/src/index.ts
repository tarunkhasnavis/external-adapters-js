import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute, endpointSelector, makeWSHandler } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig, NAME } from './config'

const { server } = expose(NAME, makeExecute(), makeWSHandler(makeConfig()), endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server }
