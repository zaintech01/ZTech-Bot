function handler(m) {
  this.reply(m.chat, '🎀💮ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ꜱᴜᴘᴘᴏʀᴛ ᴜꜱ ᴠɪꜱɪᴛ ᴏᴜʀ ꜱɪᴛᴇꜱ :\n💮1)www.cybritex.com\n💮2)www.justhacked.tech\n💮3)venomgrills.com\n💮4)zaintechorg.blogspot.com🎀💮', m)
}
handler.help = ['support']
handler.tags = ['info']

handler.command = /^(Support|support)$/i

module.exports = handler
