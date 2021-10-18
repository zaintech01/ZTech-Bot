// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Please enter a report'
    if (text.length > 300) throw 'Sorry Text Is Too Long, Maximum 300 Text!'
    const laporan = `*「 REPORT 」*\Number : wa.me/${m.sender.split`@`[0]}\nMessage : ${text}`
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️Problems have been reported to the Bot Owner, false reports will not be responded to!')
}
handler.help = ['bug', 'report'].map(v => v + ' <report>')
handler.tags = ['group']
handler.command = /^(bug|report)$/i

module.exports = handler
