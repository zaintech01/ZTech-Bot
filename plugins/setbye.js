let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
      if (isROwner) global.conn.bye = text
      else if (isOwner) conn.bye = text
      global.DATABASE._data.chats[m.chat].sBye = text
      m.reply('Bye set up successfully\n@user (Mention)')
    } else throw 'Where is the text?'
  }
  handler.help = ['setbye <text>']
  handler.tags = ['owner', 'group']
  
  handler.command = /^setbye$/i
  module.exports = handler
  
  