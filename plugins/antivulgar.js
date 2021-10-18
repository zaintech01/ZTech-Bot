const fs = require('fs');
let handler = m => m
const isNumber = x => typeof x === 'number' && !isNaN(x)
handler.before = function (m, { isAdmin, isBotAdmin, participants }) {
  let userss = participants.map(user => user.jid)
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let sender = global.DATABASE.data.chats[m.sender]
  var replytext = 'ᴼʰ ᴹʸ ᴮᵉˡᵒᵛᵉ ˢᵒⁿ ᴸᵒᵒᵏ ᵂʰᵃᵗ ʸᵒᵘ ᴰⁱᵈ ʸᵒᵘ ᴮʳᵒᵏᵉ ᵀʰᵉ ᴿᵘˡᵉˢ ᴺᵒʷ ᴵ ᴴᵃᵛᵉ ᵀᵒ ᴷⁱᶜᵏ ʸᵒᵘ ˢᵒⁿ ᴾˡᵉᵃˢᵉ ᶠᵒʳᵍⁱᵛᵉ ʸᵒᵘʳ ᶠᵃᵗʰᵉʳ ᶠᵒʳ ᵀʰⁱˢ ᴹⁱˢᵗᵃᵏᵉ \nᴿᵉᵍᵃʳᵈˢ: ʸᵒᵘʳ ᴮᵉˡᵒᵛᵉ ᶠᵃᵗʰᵉʳ'


  if (m.isGroup) who = m.sender

  if (chat.antiVulgar) {
    if(global.opts){
    
      fs.readFile('./vulgar/vulgar.json', 'utf8', (err, data) => {

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {

          if(isAdmin || !isBotAdmin){
          }else{
            const fetchedata = JSON.parse(data);
            const badword = fetchedata.vulgarwords
            const msg = m.text
            for (let i = 0; i < badword.length; i++) {
              if(msg.toLowerCase().includes(badword[i].toLowerCase())){
                console.log(badword[i])
                let message = `ᴼʰ ᴹʸ ᴮᵉˡᵒᵛᵉ ˢᵒⁿ ᴸᵒᵒᵏ ᵂʰᵃᵗ ʸᵒᵘ ᴰⁱᵈ ʸᵒᵘ ᴮʳᵒᵏᵉ ᵀʰᵉ ᴿᵘˡᵉˢ ᴺᵒʷ ᴵ ᴴᵃᵛᵉ ᵀᵒ ᴷⁱᶜᵏ ʸᵒᵘ ˢᵒⁿ ᴾˡᵉᵃˢᵉ ᶠᵒʳᵍⁱᵛᵉ ʸᵒᵘʳ ᶠᵃᵗʰᵉʳ ᶠᵒʳ ᵀʰⁱˢ ᴹⁱˢᵗᵃᵏᵉ \nᴿᵉᵍᵃʳᵈˢ: ʸᵒᵘʳ ᴮᵉˡᵒᵛᵉ ᶠᵃᵗʰᵉʳ`
                m.reply(message)
                setTimeout( function() {
                  conn.groupRemove(m.chat, [m.sender])
                }, 1000);
              }
            }
          }
        }
    
    });
    }
  }
  return true
}
module.exports = handler
