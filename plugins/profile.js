let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, lastclaim, registered, regTime, age } = global.DATABASE.data.users[who]
    let username = conn.getName(who)
    let str = `
   ðð®Êá´á´á´á´Êê± á´Êá´ ê±á´á´É´ á´ê± ê±Êá´á´á´á´¡Ê ê°ÉªÉ¢á´Êá´ê± á´¡Éªá´Ê ê±á´á´á´ÊÊá´á´á´É´ á´á´á´¡á´Êê± á´Êá´á´ á´ÊÊá´á´á´á´É´ á´Éªá´ ÉªÊÉªá´¢á´á´Éªá´É´.ð®ð\n
ðð®É´á´á´á´: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nðð®á´Êá´á´á´: ' + about : ''}ðð®\n
ðð®É´á´á´Êá´Ê: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}ðð®\n
ðð®ÊÉªÉ´á´: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}\n
ðð®Êá´É¢Éªê±á´á´Êá´á´: ${registered ? 'ðYes ð(' + new Date(regTime) + ')': 'ðNoð'}${lastclaim > 0 ? '\nðð®Êá´ê±á´ á´Êá´Éªá´: ' + new Date(lastclaim) : ''}ðð®\n
ðð®á´ á´ÊÊ ê±á´á´Êá´ á´á´á´á´Êá´ á´Êá´ á´ê°á´á´É´ á´ÊÉªá´á´á´á´ ÊÊ Êá´á´á´á´Êê±, ÊÊ á´ÊÉªê±ÊÉªÉ´É¢.ð®ð\nð®ðÉª á´á´É´á´ á´xá´Êá´á´á´ á´Êê±á´Êê° ê°Êá´á´ á´Êá´á´.ð®ð\nðð®Éªá´'ê± á´Êá´á´á´ Êá´ÉªÉ´É¢ ê±á´á´Êá´á´Ê á´Êá´É´ á´ Êá´á´á´á´Ê.ð®ð\nðð®É´á´á´ á´Êá´á´á´ Êá´ÉªÉ´É¢ ê±á´á´Êá´.ð®ð
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

