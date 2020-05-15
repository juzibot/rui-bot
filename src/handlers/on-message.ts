import {
  log,
  Message,
  Wechaty,
}             from 'wechaty'

import { jiaruiBot } from '../rui-bot'

export default async function onMessage (
  this    : Wechaty,
  message : Message,
): Promise<void> {
  log.info('on-message', 'onMessage(%s)', message)

  if (message.self()) {
    return
  }

  if (message.type() !== this.Message.Type.Text) {
    return
  }

  const contact = message.from()

  if (contact && checkOfficial(contact.id)) {
    return
  }

  if (isDing(message.text())) {
    return
  }

  const room = message.room()

  if (room) {
    if (await message.mentionSelf() && !atAll(message.text())) {
      await jiaruiBot(message)
    }
  } else {
    await jiaruiBot(message)
  }
}

function atAll (text: string): boolean {
  if (/所有人/.test(text.substr(0, 5))) {
    return true
  }

  if (/All/.test(text.substr(0, 5))) {
    return true
  }

  return false
}

function isDing (text: string): boolean {
  if (/ding/.test(text)) {
    return true
  }

  return false
}

function checkOfficial (id: string):boolean {
  const exceptidList = [
    'newsapp',
    'weixin',
    'qqmail',
    'filehelper',
    'fmessage',
    'tmessage',
    'qmessage',
    'lbsapp',
    'qqsync',
    'floatbottle',
    'shakeapp',
    'medianote',
    'newsapp',
    'weibo',
    'weixinguanhaozhushou',
    'feedsapp',
    'qqsafe',
    'mphelper',
    'cmb4008205555',
    'meituanwx']

  if (/^gh_/.test(id) || exceptidList.indexOf(id) > -1) {
    return true
  }

  return false
}
