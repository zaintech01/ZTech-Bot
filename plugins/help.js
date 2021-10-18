const { MessageType } = require("@adiwajshing/baileys")


let handler = async (m, { command, text , participants}) => {

   
      const row1 = [   
        {title: 'Owner', description: "🎗 COMMAND - owner\n🎀 USE - /owner\n💮 DESCRIPTION - Use to see who is the owner of this bot!", rowId:"rowid1"},
        {title: 'support', description: "🎗 COMMAND - support\n🎀 USE - /support\n💮 DESCRIPTION - Use to see how can you support bot owner!.", rowId:"rowid2"},
        {title: 'menu', description: "🎗 COMMAND - menu\n🎀 USE - /menu\n💮 DESCRIPTION - Use to see old menu of bot!.", rowId:"rowid3"},
        {title: 'profile', description: "🎗 COMMAND - profile\n🎀 USE - /profile\n💮 DESCRIPTION - Use to see your profile information!", rowId:"rowid4"},
        {title: 'donations', description: "🎗 COMMAND - donations\n🎀 USE - /donations\n💮 DESCRIPTION - Use to how can you donate us!", rowId:"rowid5"},
        {title: 'info', description: "🎗 COMMAND - info\n🎀 USE - /info\n💮 DESCRIPTION - Use to see bot information!", rowId:"rowid6"},
        {title: 'rules', description: "🎗 COMMAND - rules\n🎀 USE - /rules\n💮 DESCRIPTION - Use to see rules to use bot!", rowId:"rowid7"},
        {title: 'play', description: "🎗 COMMAND - play\n🎀 USE - /play why not meri jan\n💮 DESCRIPTION - Use to play songs!", rowId:"rowid24"},
        {title: 'speed', description: "🎗 COMMAND - speed\n🎀 USE - /speed\n💮 DESCRIPTION - Use to see bot responding speed!", rowId:"rowid8"},]
       const row2 = [  
        {title: 'add', description:  "🎗 COMMAND - add\n🎀 USE - /add +923178022596\n💮 DESCRIPTION - Use to add a member in group!", rowId:"rowid9"},
        {title: 'kick', description: "🎗 COMMAND - kick\n🎀 USE - /kick @+923178022596\n💮 DESCRIPTION - Use to kick any member from group!", rowId:"rowid10"},
        {title: 'promote', description: "🎗 COMMAND - promote\n🎀 USE - /promote @+923178022596\n💮 DESCRIPTION - Use to make any member admin of your group !", rowId:"rowid11"},
        {title: 'demote', description: "🎗 COMMAND - demote\n🎀 USE - /demote @+923178022596\n💮 DESCRIPTION - Use to dismiss any member from group adminship!", rowId:"rowid12"},
        {title: 'enable antilink', description: "🎗 COMMAND -  antilink\n🎀 USE - /enable antilink\n💮 DESCRIPTION - Use to enable antilink so if any member send link in group bot automatically remove them!", rowId:"rowid13"},
        {title: 'enable antivulgar', description: "🎗 COMMAND -  antivulgar\n🎀 USE - /enable antivulgar\n💮 DESCRIPTION - Use to enable antivulgar function so bot kick those members which use abusive words in group!", rowId:"rowid14"},
        {title: 'enable antisticker', description: "🎗 COMMAND - enable antisticker\n🎀 USE - /enable antisticker\n💮 DESCRIPTION - Use to enable antisticker function so bot automatically kick those members who sends sticker!", rowId:"rowid15"},
        {title: 'group open', description: "🎗 COMMAND - group open\n🎀 USE - /group open\n💮 DESCRIPTION - Use to open the group so everyone can message!", rowId:"rowid16"},
        {title: 'group close', description: "🎗 COMMAND - group close\n🎀 USE - /group close\n💮 DESCRIPTION - Use to close group so only admins can message!", rowId:"rowid17"},
        {title: 'list online', description: "🎗 COMMAND - list online\n🎀 USE - /listonline\n💮 DESCRIPTION - Use to see who is online in group!", rowId:"rowid18"},
        {title: 'hidetag', description: "🎗 COMMAND - hidetag\n🎀 USE - /hidetag Hello\n💮 DESCRIPTION - Use to tag all group members and to make an anouncement in group!", rowId:"rowid19"},
        {title: 'kickall', description: "🎗 COMMAND - kickall\n🎀 USE - /kickall\n💮 DESCRIPTION - Use to kick all members from group!", rowId:"rowid20"},
        {title: 'set welcome', description: "🎗 COMMAND - set welcome\n🎀 USE - /setwelcome Thanks For Joining\n💮 DESCRIPTION - Use to welcome new members in your group!", rowId:"rowid21"},
        {title: 'set by', description: "🎗 COMMAND - set by\n🎀 USE - /setbye We Wont Miss You\n💮 DESCRIPTION - Use to by group members when he left group!", rowId:"rowid22"},
        {title: 'enable welcome', description: "🎗 COMMAND - enable welcome\n🎀 USE - /enable welcome\n💮 DESCRIPTION - Use to welcome new members in group!", rowId:"rowid23"},
        {title: 'enable antidelete', description: "🎗 COMMAND - enable antidelete\n🎀 USE - /enable antidelete\n💮 DESCRIPTION - Use to enable antidelete function so if any member delete a message bot will restore it and send again!", rowId:"rowid25"}
        
        
          
       ]
         const row3 = [  
        {title: 'LinuxCMD', description:  "🎗 COMMAND - Linux Commands\n🎀 USE - /LinuxCMD\n💮 DESCRIPTION - Use to get linux terminal commands!", rowId:"rowid26"},
        {title: 'bittentechcourses1', description:  "🎗 COMMAND - bittentechcourses1\n🎀 USE - /bittentechcourses1\n💮 DESCRIPTION - Use to get bitten techcourses!", rowId:"rowid27"},
        {title: 'hackingcourses1', description:  "🎗 COMMAND - hackingcourses1\n🎀 USE - /hackingcourses1\n💮 DESCRIPTION - Use to get hackingcourses!", rowId:"rowid28"},
        {title: 'WireSharkCourse', description:  "🎗 COMMAND - WireSharkCourse\n🎀 USE - /WireSharkCourse\n💮 DESCRIPTION - Use to get wire shark course!", rowId:"rowid32"},
        {title: 'HackingCourses2', description:  "🎗 COMMAND - HackingCourses2\n🎀 USE - /HackingCourses2\n💮 DESCRIPTION - Use to get hackingcourses!", rowId:"rowid33"}
        
        
        ]
        const row4 = [{title: 'whoami', description:  "🎗 COMMAND - A Linux Terminal Command\n🎀 USE - /whoami\n💮 DESCRIPTION - Use to see who am i!", rowId:"rowid29"},
         {title: 'pwd', description:  "🎗 COMMAND - A Linux Terminal Command\n🎀 USE - /pwd\n💮 DESCRIPTION - Use to see present working dierectory!", rowId:"rowid30"},
         {title: 'ls', description:  "🎗 COMMAND - A Linux Terminal Command\n🎀 USE - /ls\n💮 DESCRIPTION - Use to list files and directories!", rowId:"rowid31"}
         
        ]
       
       const sections = [{title: "𝘾𝙮𝙗𝙧𝙞𝙩𝙚𝙭 𝘽𝙤𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨", rows: row1},{title: "𝘾𝙮𝙗𝙧𝙞𝙩𝙚𝙭 𝙂𝙧𝙤𝙪𝙥 𝙁𝙚𝙖𝙩𝙪𝙧𝙚𝙨", rows: row2},{title:"ᴄʏʙʀɪᴛᴇx ʜᴀᴄᴋɪɴɢ ꜱɪᴅᴇ", rows: row3},{title:"𝘊𝘺𝘣𝘳𝘪𝘵𝘦𝘹 𝘍𝘶𝘯 𝘚𝘪𝘥𝘦", rows: row4}]
       
       const button = {
        buttonText: 'My Features !',
        description: '🎀 ᴏʜᴀʏᴏ 🎀\nI am 3®0®™, a bot built to make your WhatsApp experience, enjoyable.\n⟾ 📪Commands list📪\n━━━━❰ 𝙈𝙖𝙞𝙣 ❱━━━━\n➪ 𝙃𝙖𝙘𝙠𝙞𝙣𝙜 𝘾𝙤𝙪𝙧𝙨𝙚𝙨\n➪ 𝙁𝙪𝙣 𝙎𝙞𝙙𝙚\n➪𝙂𝙧𝙤𝙪𝙥 𝙁𝙚𝙖𝙩𝙪𝙧𝙚𝙨\n━━━❰𝘾𝙮𝙗𝙧𝙞𝙩𝙚𝙭 𝘽𝙤𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨❱━━━\n➪owner\n➪menu\n➪info\n➪support\n➪tt\n➪profile\n➪donations\n➪rules\n➪speed\n➪play\n➪mp4\n━━━━❰𝘾𝙮𝙗𝙧𝙞𝙩𝙚𝙭 𝙂𝙧𝙤𝙪𝙥 𝙁𝙚𝙖𝙩𝙪𝙧𝙚𝙨❱━━━━\n➪add\n➪kick\n➪promote\n➪group close\n➪group open\n➪promote\n➪demote\n➪enable antilink\n➪enable antivulgar\n➪enable antisticker\n➪setwelcome\n➪setbye\n➪listonline\n➪here\n➪kickall\n➪enable antidelete\n➪tagall\n➪hidetag\n━━❰ᴄʏʙʀɪᴛᴇx ʜᴀᴄᴋɪɴɢ ꜱɪᴅᴇ❱━━━\n➪LinuxCMD\n➪bittentechcourses1\n➪hackingcourses1\n➪wiresharkcourse\n➪HackingCourses2\n━━━❰𝘊𝘺𝘣𝘳𝘪𝘵𝘦𝘹 𝘍𝘶𝘯 𝘚𝘪𝘥𝘦❱━━\n➪whoami\n➪pwd\n➪ls\n📇 Notes: 📇\n➪ Use / <command name> from the help  list to see its description and usage\n➪ Eg: /profile\n© 3®0®™\n',
        sections: sections,
        listType: 1
       }
       
       const sendMsg = await conn.sendMessage(m.chat, button, MessageType.listMessage)
       
    console.log(m.text)
    console.log(sendMsg)
  }
  handler.help = ['help']
  handler.tags = ['info']
  handler.command = /^help$/i
  
  module.exports = handler
  
