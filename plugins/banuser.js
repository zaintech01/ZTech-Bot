let handler = async (m, { conn, text}) => {
    if (!text) throw 'Who wants to be banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `successful banned`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true

module.exports = handler
