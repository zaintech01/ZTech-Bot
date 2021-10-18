function handler(m) {
  this.reply(m.chat, 'WIRESHARK TUTORIAL – GET WIRESHARK CERTIFICATION\nKnow how to download Wireshark\nUnderstand how to setup and use Wireshark\nNavigate the Wireshark interface\nLearn the various filters available in Wireshark\nUse CLI and Tshark\nHow to export data from Wireshark\nhttps://mega.nz/folder/sX4QCACb#20UvcYGPYH8fq0zqDyFxyQ', m)
}
handler.help = ['WireSharkCourse']
handler.tags = ['info']

handler.command = /^(WireSharkCourse|WireSharkCourse)$/i

module.exports = handler
