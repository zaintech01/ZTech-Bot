function handler(m) {
this.sendContact(m.chat, '+923178022596', 'ZTech', m)

}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
