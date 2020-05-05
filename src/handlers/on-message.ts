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

  const room = message.room()

  if (room) {
    if (await message.mentionSelf() && !atAll(message.text())) {
      if (isDing(message.text())) {
        return
      }
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
