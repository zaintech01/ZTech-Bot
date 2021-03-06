const { MessageType } = require("@adiwajshing/baileys")


let handler = async (m, { command, text , participants}) => {

   
      const row1 = [   
        {title: 'Owner', description: "š COMMAND - owner\nš USE - /owner\nš® DESCRIPTION - Use to see who is the owner of this bot!", rowId:"rowid1"},
        {title: 'support', description: "š COMMAND - support\nš USE - /support\nš® DESCRIPTION - Use to see how can you support bot owner!.", rowId:"rowid2"},
        {title: 'menu', description: "š COMMAND - menu\nš USE - /menu\nš® DESCRIPTION - Use to see old menu of bot!.", rowId:"rowid3"},
        {title: 'profile', description: "š COMMAND - profile\nš USE - /profile\nš® DESCRIPTION - Use to see your profile information!", rowId:"rowid4"},
        {title: 'donations', description: "š COMMAND - donations\nš USE - /donations\nš® DESCRIPTION - Use to how can you donate us!", rowId:"rowid5"},
        {title: 'info', description: "š COMMAND - info\nš USE - /info\nš® DESCRIPTION - Use to see bot information!", rowId:"rowid6"},
        {title: 'rules', description: "š COMMAND - rules\nš USE - /rules\nš® DESCRIPTION - Use to see rules to use bot!", rowId:"rowid7"},
        {title: 'play', description: "š COMMAND - play\nš USE - /play why not meri jan\nš® DESCRIPTION - Use to play songs!", rowId:"rowid24"},
        {title: 'speed', description: "š COMMAND - speed\nš USE - /speed\nš® DESCRIPTION - Use to see bot responding speed!", rowId:"rowid8"},]
       const row2 = [  
        {title: 'add', description:  "š COMMAND - add\nš USE - /add +923178022596\nš® DESCRIPTION - Use to add a member in group!", rowId:"rowid9"},
        {title: 'kick', description: "š COMMAND - kick\nš USE - /kick @+923178022596\nš® DESCRIPTION - Use to kick any member from group!", rowId:"rowid10"},
        {title: 'promote', description: "š COMMAND - promote\nš USE - /promote @+923178022596\nš® DESCRIPTION - Use to make any member admin of your group !", rowId:"rowid11"},
        {title: 'demote', description: "š COMMAND - demote\nš USE - /demote @+923178022596\nš® DESCRIPTION - Use to dismiss any member from group adminship!", rowId:"rowid12"},
        {title: 'enable antilink', description: "š COMMAND -  antilink\nš USE - /enable antilink\nš® DESCRIPTION - Use to enable antilink so if any member send link in group bot automatically remove them!", rowId:"rowid13"},
        {title: 'enable antivulgar', description: "š COMMAND -  antivulgar\nš USE - /enable antivulgar\nš® DESCRIPTION - Use to enable antivulgar function so bot kick those members which use abusive words in group!", rowId:"rowid14"},
        {title: 'enable antisticker', description: "š COMMAND - enable antisticker\nš USE - /enable antisticker\nš® DESCRIPTION - Use to enable antisticker function so bot automatically kick those members who sends sticker!", rowId:"rowid15"},
        {title: 'group open', description: "š COMMAND - group open\nš USE - /group open\nš® DESCRIPTION - Use to open the group so everyone can message!", rowId:"rowid16"},
        {title: 'group close', description: "š COMMAND - group close\nš USE - /group close\nš® DESCRIPTION - Use to close group so only admins can message!", rowId:"rowid17"},
        {title: 'list online', description: "š COMMAND - list online\nš USE - /listonline\nš® DESCRIPTION - Use to see who is online in group!", rowId:"rowid18"},
        {title: 'hidetag', description: "š COMMAND - hidetag\nš USE - /hidetag Hello\nš® DESCRIPTION - Use to tag all group members and to make an anouncement in group!", rowId:"rowid19"},
        {title: 'kickall', description: "š COMMAND - kickall\nš USE - /kickall\nš® DESCRIPTION - Use to kick all members from group!", rowId:"rowid20"},
        {title: 'set welcome', description: "š COMMAND - set welcome\nš USE - /setwelcome Thanks For Joining\nš® DESCRIPTION - Use to welcome new members in your group!", rowId:"rowid21"},
        {title: 'set by', description: "š COMMAND - set by\nš USE - /setbye We Wont Miss You\nš® DESCRIPTION - Use to by group members when he left group!", rowId:"rowid22"},
        {title: 'enable welcome', description: "š COMMAND - enable welcome\nš USE - /enable welcome\nš® DESCRIPTION - Use to welcome new members in group!", rowId:"rowid23"},
        {title: 'enable antidelete', description: "š COMMAND - enable antidelete\nš USE - /enable antidelete\nš® DESCRIPTION - Use to enable antidelete function so if any member delete a message bot will restore it and send again!", rowId:"rowid25"}
        
        
          
       ]
         const row3 = [  
        {title: 'LinuxCMD', description:  "š COMMAND - Linux Commands\nš USE - /LinuxCMD\nš® DESCRIPTION - Use to get linux terminal commands!", rowId:"rowid26"},
        {title: 'bittentechcourses1', description:  "š COMMAND - bittentechcourses1\nš USE - /bittentechcourses1\nš® DESCRIPTION - Use to get bitten techcourses!", rowId:"rowid27"},
        {title: 'hackingcourses1', description:  "š COMMAND - hackingcourses1\nš USE - /hackingcourses1\nš® DESCRIPTION - Use to get hackingcourses!", rowId:"rowid28"},
        {title: 'WireSharkCourse', description:  "š COMMAND - WireSharkCourse\nš USE - /WireSharkCourse\nš® DESCRIPTION - Use to get wire shark course!", rowId:"rowid32"},
        {title: 'HackingCourses2', description:  "š COMMAND - HackingCourses2\nš USE - /HackingCourses2\nš® DESCRIPTION - Use to get hackingcourses!", rowId:"rowid33"}
        
        
        ]
        const row4 = [{title: 'whoami', description:  "š COMMAND - A Linux Terminal Command\nš USE - /whoami\nš® DESCRIPTION - Use to see who am i!", rowId:"rowid29"},
         {title: 'pwd', description:  "š COMMAND - A Linux Terminal Command\nš USE - /pwd\nš® DESCRIPTION - Use to see present working dierectory!", rowId:"rowid30"},
         {title: 'ls', description:  "š COMMAND - A Linux Terminal Command\nš USE - /ls\nš® DESCRIPTION - Use to list files and directories!", rowId:"rowid31"}
         
        ]
       
       const sections = [{title: "š¾š®šš§šš©šš­ š½š¤š© š¾š¤š¢š¢šš£ššØ", rows: row1},{title: "š¾š®šš§šš©šš­ šš§š¤šŖš„ šššš©šŖš§ššØ", rows: row2},{title:"į“ŹŹŹÉŖį“į“x Źį“į“į“ÉŖÉ“É¢ ź±ÉŖį“į“", rows: row3},{title:"ššŗš£š³šŖšµš¦š¹ šš¶šÆ ššŖš„š¦", rows: row4}]
       
       const button = {
        buttonText: 'My Features !',
        description: 'š į“Źį“Źį“ š\nI am 3Ā®0Ā®ā¢, a bot built to make your WhatsApp experience, enjoyable.\nā¾ šŖCommands listšŖ\nāāāāā° šššš£ ā±āāāā\nāŖ šššš šš£š š¾š¤šŖš§šØššØ\nāŖ ššŖš£ šššš\nāŖšš§š¤šŖš„ šššš©šŖš§ššØ\nāāāā°š¾š®šš§šš©šš­ š½š¤š© š¾š¤š¢š¢šš£ššØā±āāā\nāŖowner\nāŖmenu\nāŖinfo\nāŖsupport\nāŖtt\nāŖprofile\nāŖdonations\nāŖrules\nāŖspeed\nāŖplay\nāŖmp4\nāāāāā°š¾š®šš§šš©šš­ šš§š¤šŖš„ šššš©šŖš§ššØā±āāāā\nāŖadd\nāŖkick\nāŖpromote\nāŖgroup close\nāŖgroup open\nāŖpromote\nāŖdemote\nāŖenable antilink\nāŖenable antivulgar\nāŖenable antisticker\nāŖsetwelcome\nāŖsetbye\nāŖlistonline\nāŖhere\nāŖkickall\nāŖenable antidelete\nāŖtagall\nāŖhidetag\nāāā°į“ŹŹŹÉŖį“į“x Źį“į“į“ÉŖÉ“É¢ ź±ÉŖį“į“ā±āāā\nāŖLinuxCMD\nāŖbittentechcourses1\nāŖhackingcourses1\nāŖwiresharkcourse\nāŖHackingCourses2\nāāāā°ššŗš£š³šŖšµš¦š¹ šš¶šÆ ššŖš„š¦ā±āā\nāŖwhoami\nāŖpwd\nāŖls\nš Notes: š\nāŖ Use / <command name> from the help  list to see its description and usage\nāŖ Eg: /profile\nĀ© 3Ā®0Ā®ā¢\n',
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
  
