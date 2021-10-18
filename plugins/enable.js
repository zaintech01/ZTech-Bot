let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
    let isEnable = /true|enable|(turn)?on/i.test(command)
    let chat = global.DATABASE._data.chats[m.chat]
    let user = global.DATABASE._data.users[m.sender]
    let type = (args[0] || '').toLowerCase()
    let isAll = false
    let isUser = false
    switch (type) {
      case 'welcome':
        chat.welcome = isEnable
        break
      case 'antidelete':
        chat.delete = !isEnable
        break
      case 'public':
        isAll = true
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
        global.opts['self'] = !isEnable
        break
      case 'antigrouplink':
        chat.antiGroupLink = isEnable
        break
      case 'antilink':
        chat.antiLink = isEnable
        break
      case 'antisticker':
        chat.antiSticker = isEnable
        break 
      case 'antivulgar':
        chat.antiVulgar = isEnable
        break
      default:
        return m.reply(`
  List option: welcome | antidelete | public | antigrouplink | antilink | antisticker | antivulgar
  
  Example:
  ${usedPrefix}enable welcome
  ${usedPrefix}disable welcome
  `.trim())
    }
    m.reply(`
  *${type}* succeeded and *${isEnable ? 'enabled' : 'closed'}* ${isAll ? 'for this bot' : isUser ? '' : 'for this chat'}
  `.trim())
  }
  handler.help = ['en', 'dis'].map(v => v + 'able <option>')
  handler.tags = ['group', 'owner']
  handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i
  
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  
  handler.admin = true
  handler.botAdmin = true
  
  handler.fail = null
  module.exports = handler
  