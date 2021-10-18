
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let sender = global.DATABASE.data.chats[m.sender]
  

  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('delete!!\n*Sticker detected*\nᴼʰ ᴹʸ ᴮᵉˡᵒᵛᵉ ˢᵒⁿ ᴸᵒᵒᵏ ᵂʰᵃᵗ ʸᵒᵘ ᴰⁱᵈ ʸᵒᵘ ᴮʳᵒᵏᵉ ᵀʰᵉ ᴿᵘˡᵉˢ ᴺᵒʷ ᴵ ᴴᵃᵛᵉ ᵀᵒ ᴷⁱᶜᵏ ʸᵒᵘ ˢᵒⁿ ᴾˡᵉᵃˢᵉ ᶠᵒʳᵍⁱᵛᵉ ʸᵒᵘʳ ᶠᵃᵗʰᵉʳ ᶠᵒʳ ᵀʰⁱˢ ᴹⁱˢᵗᵃᵏᵉ \nᴿᵉᵍᵃʳᵈˢ: ʸᵒᵘʳ ᴮᵉˡᵒᵛᵉ ᶠᵃᵗʰᵉʳe')
          this.groupRemove(m.chat, [m.sender])
        }return true
      }
    }
  }
  return true
}

module.exports = handler
