import {
  log,
}                     from './config'
import { getWechaty } from './get-wechaty'
import { startFinis } from './start-finis'
import { startWeb }   from './start-web'

import * as dotenv    from 'dotenv'

dotenv.config()

async function main () {
  log.verbose('main', 'main()')

  const name = process.env.WECHATY_NAME || 'heroku-wechaty'

  const bot = getWechaty(name)

  await Promise.all([
    bot.start(),
    startFinis(bot),
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
