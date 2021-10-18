module.exports = {
    before(m) {
      if (/\b(baka)\b/i.test(m.text)) m.reply('🎀No You🎀 ')
      return !0
    }
  }
