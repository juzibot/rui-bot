import { EventHotHandlerPlugin } from './event-hot-handler'
import { DingDongPlugin } from './dingdong'
import { HeartbeatPlugin } from './heartbeat'
import { ChatOpsPlugin } from './chatops'

const pluginList = [
  EventHotHandlerPlugin,
  DingDongPlugin,
  HeartbeatPlugin,
  ChatOpsPlugin,
]

export { pluginList }
