import { expose } from '@chainlink/ea-bootstrap'
import { execute, makeExecute } from './adapter'
import { makeConfig } from './config'

const NAME = 'JSON_RPC'

const { server } = expose(NAME, makeExecute())

export { NAME, execute, makeConfig, server }
