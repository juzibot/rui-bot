import * as dm  from './direct-message'
import * as rui from './chatops-rui'

const vorpalPluginList = [
  ...Object.values(rui),
  ...Object.values(dm),
]

export { vorpalPluginList }
