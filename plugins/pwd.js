function handler(m) {
  this.reply(m.chat, '🎀💮/𝘩𝘰𝘮𝘦/𝘬𝘢𝘭𝘪/𝘊𝘺𝘣𝘳𝘪𝘵𝘦𝘹𝘉𝘰𝘵🎀💮', m)
}
handler.help = ['pwd']
handler.tags = ['info']

handler.command = /^(pwd)$/i

module.exports = handler
