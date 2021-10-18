const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag one of them, and enter the number for verification !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Done was successful added User✅*\n\n*Number : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <Number>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
