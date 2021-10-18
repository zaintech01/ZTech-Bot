let handler = async (m, { conn, args, usedPrefix }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users).catch(console.log)
}
handler.help = ['demote','member','↓'].map(v => v + ' @user')
handler.tags = ['admins']
handler.command = /^(demote|member|↓)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

