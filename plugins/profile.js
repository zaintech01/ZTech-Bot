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
   🎀💮ʜᴀᴄᴋᴇʀꜱ ᴀʀᴇ ꜱᴇᴇɴ ᴀꜱ ꜱʜᴀᴅᴏᴡʏ ꜰɪɢᴜʀᴇꜱ ᴡɪᴛʜ ꜱᴜᴘᴇʀʜᴜᴍᴀɴ ᴘᴏᴡᴇʀꜱ ᴛʜᴀᴛ ᴛʜʀᴇᴀᴛᴇɴ ᴄɪᴠɪʟɪᴢᴀᴛɪᴏɴ.💮🎀\n
🎀💮ɴᴀᴍᴇ: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n🎀💮ᴀʙᴏᴜᴛ: ' + about : ''}🎀💮\n
🎀💮ɴᴜᴍʙᴇʀ: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}🎀💮\n
🎀💮ʟɪɴᴋ: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}\n
🎀💮ʀᴇɢɪꜱᴛᴇʀᴇᴅ: ${registered ? '🎀Yes 🎀(' + new Date(regTime) + ')': '🎀No🎀'}${lastclaim > 0 ? '\n🎀💮ʟᴀꜱᴛ ᴄʟᴀɪᴍ: ' + new Date(lastclaim) : ''}🎀💮\n
🎀💮ᴠᴇʀʏ ꜱᴍᴀʀᴛ ᴘᴇᴏᴘʟᴇ ᴀʀᴇ ᴏꜰᴛᴇɴ ᴛʀɪᴄᴋᴇᴅ ʙʏ ʜᴀᴄᴋᴇʀꜱ, ʙʏ ᴘʜɪꜱʜɪɴɢ.💮🎀\n💮🎀ɪ ᴅᴏɴᴛ ᴇxᴄʟᴜᴅᴇ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴀᴛ.💮🎀\n🎀💮ɪᴛ'ꜱ ᴀʙᴏᴜᴛ ʙᴇɪɴɢ ꜱᴍᴀʀᴛᴇʀ ᴛʜᴀɴ ᴀ ʜᴀᴄᴋᴇʀ.💮🎀\n🎀💮ɴᴏᴛ ᴀʙᴏᴜᴛ ʙᴇɪɴɢ ꜱᴍᴀʀᴛ.💮🎀
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

