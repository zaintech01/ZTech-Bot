let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let txt = text ? text : cc.text
    let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 All HackerzAnonBot Broadcast 」')
    for (let id of users) conn.copyNForward(id, content, true)
    conn.reply(m.chat, `_Successfully sent broadcast to ${users.length} that number HackerzAnon Bot_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g,'') + '?text=.menu').join('\n')}`.trim(), m)
  } else conn.reply(m.chat, 'This feature is for bot hosts only',  m)
}
handler.help = ['broadcastHackerzAnonbot','bcbot'].map(v => v + ' <text>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

