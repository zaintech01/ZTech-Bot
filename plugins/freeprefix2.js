module.exports = {
    before(m) {
      if (/\b(hello)\b/i.test(m.text)) m.reply('π Yes ZTech Bot Is Hereπ ')
      return !0
    }
  }
  module.exports = {
    before(m) {
      if (/\b(how are you)\b/i.test(m.text)) m.reply('π Am Fine What About youπ ')
      return !0
    }
  }
