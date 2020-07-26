import './config'

import {
  log,
}                     from 'wechaty'

import { getWechaty } from './wechaty/mod'
import { startWeb }   from './web/mod'

async function main () {
  log.verbose('main', 'main()')

  const name = process.env.WECHATY_NAME || 'heroku-wechaty'

  const bot = getWechaty(name)

  await Promise.all([
    bot.start(),
    startWeb(bot),
  ])

  /**
   * Do not return until the bot turned off
   */
  await bot.state.ready('off')

  return 0
}

main()
  .then(process.exit)
  .catch((e) => {
    log.error('Main', 'main() rejection: %s', e)
    process.exit(1)
  })
