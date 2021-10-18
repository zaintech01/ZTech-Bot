
let handler = async (m, { conn, participants }) => {
  let users = participants.map(user => user.jid)
  conn.reply(m.chat, '╔══✪〘 Mention All 〙✪══\n' + users.map(v => '╠➥@' + v.replace(/@.+/, '')).join`\n` + "\n╚═〘 ᴄʏʙᴇʀɪᴛᴇx ꜱᴇᴄᴜʀɪᴛʏ 〙", m, {
    contextInfo: { 
      mentionedJid: users 
    }
  })
}
handler.help = ['tagall']
handler.tags = ['admins']
handler.command = /^(tagall)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

