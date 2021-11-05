import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute } from './endpoint'
import { makeEndpointSelector } from './adapter'
import { makeConfig } from './config'
import * as types from './types'

const NAME = 'Token-Allocation'
const { server } = expose(NAME, makeExecute())

export { NAME, types, makeExecute, makeConfig, server, makeEndpointSelector }
