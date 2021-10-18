let handler = async (m, { command }) => {
    let msgs
    let type;
    if(command == "listres"){
        msgs = global.DATABASE._data.resources
        type = "RESOURCES LIST"
    }else if(command == "listcourses"){
        msgs = global.DATABASE._data.courses
        type = "COURSES LIST"
    }
    i = 1
    m.reply(`
*${type}*
${Object.keys(msgs).map(v => + i++ + ':- ' + v).join('\n\n')}
`.trim())
}
handler.help = ['res','courses'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(res|courses)$/


module.exports = handler