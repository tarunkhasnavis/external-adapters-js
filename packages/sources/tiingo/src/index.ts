import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute, makeWSHandler, endpointSelector } from './adapter'
import * as endpoints from './endpoint'
import { NAME, makeConfig } from './config'
import * as types from './endpoint'

const { server } = expose(NAME, makeExecute(), makeWSHandler(), endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server, types }
