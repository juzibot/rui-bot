import {
  Heartbeat,
}               from 'wechaty-plugin-contrib'

const heartOptions = {
  emoji: {
    heartbeat: '[爱心]',
    login:     '[太阳]',
    logout:    '[月亮]',
    ready:     '[拳头]',
  },
  intervalSeconds: 60 * 60,        // Default: 1 hour - Send emoji for every 1 hour
  room: '17376996519@chatroom',    // default: filehelper - Contact id who will receive the emoji
}

const HeartbeatPlugin = Heartbeat(heartOptions)

export { HeartbeatPlugin }
