module.exports = {
    before(m) {
      if (/\b(gay)\b/i.test(m.text)) m.reply('No You Are Gay🐦🐦')
      return !0
    }
  }
