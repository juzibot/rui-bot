import {
  WechatyVorpal,
  WechatyVorpalConfig,
}                         from 'wechaty-vorpal'
import {
  Eval,
  UrlLink,
  Find,
  Version,
  Whoru,
}                         from 'wechaty-vorpal-contrib'

import {
  RUI_CHATOPS_ROOM_ID,
}                         from '../database'

const chatopsConfig: WechatyVorpalConfig = {
  contact : false,
  mention : false,
  room    : RUI_CHATOPS_ROOM_ID,
  silent  : true,

  use: [
    Eval(),
    UrlLink(),
    Find(),
    Whoru(),
    Version(),
  ],
}

const ChatopsVorpalPlugin       = WechatyVorpal(chatopsConfig)

export {
  ChatopsVorpalPlugin,
}
