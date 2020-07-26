import {
  WechatyVorpal,
  WechatyVorpalConfig,
}                         from 'wechaty-vorpal'
import {
  Version,
  Whoru,
}                         from 'wechaty-vorpal-contrib'

const hackerNews = require('vorpal-hacker-news')

const dmConfig: WechatyVorpalConfig = {
  contact : true,
  room    : false,
  silent  : true,

  use: [
    Whoru(),
    Version(),
    /**
     * https://github.com/vorpaljs/vorpal-hacker-news
     *  hacker-news --length 3
     */
    hackerNews,
  ],
}

const DirectMessageVorpalPlugin = WechatyVorpal(dmConfig)

export {
  DirectMessageVorpalPlugin,
}
