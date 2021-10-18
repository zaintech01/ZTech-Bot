let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!text) throw `Where is the Text`
    let msgs;
    if(command = "addres"){
        msgs = global.DATABASE.data.resources
    }else if(command == "addcourses"){
        msgs = global.DATABASE.data.courses
    }
    if (text in msgs) throw `'${text}' registered in the message list`
    msgs[text] = M.fromObject
    m.reply(`Successfully added message in message list as'${text}'
    
    Access with ${usedPrefix}list${which} ${text}`)
}
handler.help = ['res', 'courses'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(res|courses)$/
handler.owner = true

module.exports = handler