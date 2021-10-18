module.exports = {
    before(m) {
       if (/\b(bot)\b/i.test(m.text)) m.reply('🎀Did you mean: /help 🎀')
       return !0
  }
}
 
