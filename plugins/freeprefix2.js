module.exports = {
    before(m) {
      if (/\b(hello)\b/i.test(m.text)) m.reply('🎀 Yes ZTech Bot Is Here🎀 ')
      return !0
    }
  }
  module.exports = {
    before(m) {
      if (/\b(how are you)\b/i.test(m.text)) m.reply('🎀 Am Fine What About you🎀 ')
      return !0
    }
  }
