module.exports = {
    before(m) {
       if (/\b(bot)\b/i.test(m.text)) m.reply('ðDid you mean: /help ð')
       return !0
  }
}
 
