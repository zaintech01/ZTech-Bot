
let handler = m => m

let linkRegexhttp = /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i
let linkRegexhttps = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let sender = global.DATABASE.data.chats[m.sender]
  let isLinkhttp = linkRegexhttp.exec(m.text)
  let isLinkhttps = linkRegexhttps.exec(m.text)

  if (chat.antiLink && isLinkhttp) {
    if (global.opts) {
      if (isAdmin || !isBotAdmin){		  
	  }else{
		m.reply('delete!!\nGroup link detected\nᴼʰ ᴹʸ ᴮᵉˡᵒᵛᵉ ˢᵒⁿ ᴸᵒᵒᵏ ᵂʰᵃᵗ ʸᵒᵘ ᴰⁱᵈ ʸᵒᵘ ᴮʳᵒᵏᵉ ᵀʰᵉ ᴿᵘˡᵉˢ ᴺᵒʷ ᴵ ᴴᵃᵛᵉ ᵀᵒ ᴷⁱᶜᵏ ʸᵒᵘ ˢᵒⁿ ᴾˡᵉᵃˢᵉ ᶠᵒʳᵍⁱᵛᵉ ʸᵒᵘʳ ᶠᵃᵗʰᵉʳ ᶠᵒʳ ᵀʰⁱˢ ᴹⁱˢᵗᵃᵏᵉ\n ᴿᵉᵍᵃʳᵈˢ: ʸᵒᵘʳ ᴮᵉˡᵒᵛᵉ ᶠᵃᵗʰᵉʳ' )
		this.groupRemove(m.chat, [m.sender])
		}return true
	}
  }else if (chat.antiLink && isLinkhttps) {
    if (global.opts) {
      if (isAdmin || !isBotAdmin){		  
	  }else{
		m.reply('delete!!\nlink detected\nᴼʰ ᴹʸ ᴮᵉˡᵒᵛᵉ ˢᵒⁿ ᴸᵒᵒᵏ ᵂʰᵃᵗ ʸᵒᵘ ᴰⁱᵈ ʸᵒᵘ ᴮʳᵒᵏᵉ ᵀʰᵉ ᴿᵘˡᵉˢ ᴺᵒʷ ᴵ ᴴᵃᵛᵉ ᵀᵒ ᴷⁱᶜᵏ ʸᵒᵘ ˢᵒⁿ ᴾˡᵉᵃˢᵉ ᶠᵒʳᵍⁱᵛᵉ ʸᵒᵘʳ ᶠᵃᵗʰᵉʳ ᶠᵒʳ ᵀʰⁱˢ ᴹⁱˢᵗᵃᵏᵉ \nᴿᵉᵍᵃʳᵈˢ: ʸᵒᵘʳ ᴮᵉˡᵒᵛᵉ ᶠᵃᵗʰᵉʳ' )
		this.groupRemove(m.chat, [m.sender])
		}return true
	}
  }
  return true
}

module.exports = handler
