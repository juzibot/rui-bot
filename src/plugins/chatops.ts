import {
  ChatOps,
}               from 'wechaty-plugin-contrib'

import {
  RUI_CHATOPS_ROOM_ID,
}                       from '../database'

const chatOpsOptions = {
  contact : true,                  // default: true - Response to Direct Message
  mention : true,                  // default: true - Response to Mention Self (@/at) Message in Room
  room    : RUI_CHATOPS_ROOM_ID,   // required: room id for ChatOps
}

const ChatOpsPlugin = ChatOps(chatOpsOptions)

export { ChatOpsPlugin }
