import {
  Wechaty,
}                 from 'wechaty'

import {
  log,
}               from './config'
import {
  getMemory,
}               from './get-memory'

import {
  Heartbeat,
  DingDong,
  ChatOps,
}               from 'wechaty-plugin-contrib'

import { pluginList }   from './plugins/mod'

import {
  RUI_CHATOPS_ROOM_ID,
}                       from './database'

const heartOptions = {
  emoji: {
    heartbeat: '[爱心]',
    login:     '[太阳]',
    logout:    '[月亮]',
    ready:     '[拳头]',
  },
  intervalSeconds: 60 * 60,        // Default: 1 hour - Send emoji for every 1 hour
  room: '17376996519@chatroom',    // default: filehelper - Contact id who will receive the emoji
}

const dingOptions = {
  contact : true,    // default: true - Response to Direct Message
  mention : false,   // default: true - Response to Mention Self (@/at) Message in Room
  room    : [        // default: true - Response to Rooms Message
    /ChatOps/i,
  ],
}

const chatOpsOptions = {
  contact : true,                  // default: true - Response to Direct Message
  mention : true,                  // default: true - Response to Mention Self (@/at) Message in Room
  room    : RUI_CHATOPS_ROOM_ID,   // required: room id for ChatOps
}

let wechaty: Wechaty

export function getWechaty (name: string): Wechaty {
  log.verbose('getWechaty', 'getWechaty(%s)', name)

  if (wechaty) {
    return wechaty
  }

  const memory = getMemory(name)

  wechaty = new Wechaty({
    memory,
    name,
  })

  wechaty.use(
    Heartbeat(heartOptions),
    DingDong(dingOptions),
    ChatOps(chatOpsOptions),
    ...pluginList,
  )

  return wechaty
}
