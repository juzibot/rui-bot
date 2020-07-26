import {
  Wechaty,
  log,
}                 from 'wechaty'

import {
  getMemory,
}               from './get-memory'

import { pluginList }       from '../plugins/mod'
import { vorpalPluginList } from '../vorpals/mod'

import { startFinis } from './start-finis'

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
    ...pluginList,
    ...vorpalPluginList,
  )

  startFinis(wechaty)

  return wechaty
}
