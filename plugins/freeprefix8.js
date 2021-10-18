module.exports = {
    before(m) {
      if (/\b(bruh)\b/i.test(m.text)) m.reply('🎀Soory Am Bot Its Auto Reply Type\n/help To Use Me🎀 ')
      return !0
    }
  }
