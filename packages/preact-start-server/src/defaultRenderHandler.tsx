import {
  defineHandlerCallback,
  renderRouterToString,
} from '@tanstack/preact-router/ssr/server'
import { StartServer } from './StartServer'

export const defaultRenderHandler = defineHandlerCallback(
  ({ router, responseHeaders }) =>
    renderRouterToString({
      router,
      responseHeaders,
      children: <StartServer router={router} />,
    }),
)
