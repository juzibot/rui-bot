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

  const room = message.room()

  if (room) {
    if (await message.mentionSelf()) {
      await jiaruiBot(message)
    }
  } else {
    await jiaruiBot(message)
  }
}
