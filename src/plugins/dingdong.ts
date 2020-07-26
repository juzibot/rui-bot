import {
  DingDong,
}               from 'wechaty-plugin-contrib'

const dingOptions = {
  contact : true,    // default: true - Response to Direct Message
  mention : false,   // default: true - Response to Mention Self (@/at) Message in Room
  room    : [        // default: true - Response to Rooms Message
    /ChatOps/i,
  ],
}

const DingDongPlugin = DingDong(dingOptions)

export { DingDongPlugin }
