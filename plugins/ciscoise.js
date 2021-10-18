function handler(m) {
  this.reply(m.chat, 'Cisco Identity Services Engine (ISE) 3.0 PATCH\nsize - 11.3 GB\nhttps://mega.nz/folder/wwdV0QZb#YMWn42beniDE2R-QEbXyIg\n#cisco\n#ise', m)
}
handler.help = ['Cisco ISE']
handler.tags = ['info']

handler.command = /^(Cisco ISE|Cisco ISE)$/i

module.exports = handler
