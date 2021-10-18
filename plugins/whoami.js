function handler(m) {
  this.reply(m.chat, '🎀💮𝘬𝘢𝘭𝘪🎀💮', m)
}
handler.help = ['whoami']
handler.tags = ['info']

handler.command = /^(whoami)$/i

module.exports = handler
