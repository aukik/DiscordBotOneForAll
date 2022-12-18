const Discord = require('discord.js')
require('dotenv').config()


const express=require("express")
const server = express()



//****************Discord.js version 13*************




let messageBlockList = new Array()
let user_id = new Array()
let thesis_id = new Array()
thesis_id.push("326605746878021634","323187566796996618","281111823351283712","651474938049462312","614387798773989378","234964035538255873")


const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES","GUILD_VOICE_STATES"]  })
// const Database = require("@replit/database")
// const db = new Database()

let deadline_id = new Array()
deadline_id.push(
"326605746878021634",
"765451359716638730",
"323187566796996618",
"637672889444990986",
"292240870948732928",
"481772318717378560",
"634644738665873408",
"237246423844913152",
"614387798773989378",
"744488297300099075",
"243005736513306624",
"765287494492487700",
"410009764094017536",
"281111823351283712",
"659765448388116569",
"234964035538255873",
"519176393909731343",
"517354843179057162"
)

const loop = (times, execute) => {
  for (let i = 0; i < times; i++) execute()
}
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time))
}

const deleteBulkMessage = async (messages, extra) => {
  extra = extra - 100

  const messageBulk = await messages.fetch({ limit: 99 })
  messageBulk.forEach(async (_keys, value) => {
    await messages.delete(value)
  })

  if (extra > 100) {
    deleteBulkMessage(messages, extra)
  } else if (extra < 0) {
    messageBulk = await messages.fetch({ limit: extra })

    messageBulk.forEach(async (_keys, value) => {
      await messages.delete(value)
    })
  }
}
//bot activity
client.on('ready', () => {
  console.log('Connected as ' + client.user.tag)
  client.user.setActivity("😴")
})

//detection of message``
client.on('messageCreate', message => main_func(message))
main_func = async message => {
  try {
    // // console.log(message)
    /****************************************
     *
     *      DISCORD POK-er (Pure Cancer)
     *
     ***************************************/

    // channel = message.member.voice.channelID

    // loop (3, () => {
    //   await message.member.edit({ channel: '782108054664904704' })
    //   await sleep(50)
    //   await message.member.edit({ channel: '782105730941190195' })
    //   await sleep(50)
    //   await message.member.edit({ channel: '782107673276579890' })
    //   await sleep(50)
    // })
    // await message.member.edit({ channel })

    /*****************************************************************************/
    if (message.content=== 'ping'){
      message.channel.send('pong')
    }
    let messageBulk
    // console.log(message)
    //send deadlines through dm
    if (message.channel.id == '1047464385435672586' && message.author.id === '326605746878021634') {
      try{
      console.log("thesis message")
      thesis_id.map(async id => {

        const user = await client.users.fetch(id, false)
        user.send(`𝕹𝖊𝖜 𝕿𝖍𝖊𝖘𝖎𝖘 𝖀𝖕𝖉𝖆𝖙𝖊𝖘: \n${message.content}`)
        // user.send(message.content)

      })
      }catch(err){
          console.log(err)
        }
    }

    if ((message.channelId === '937355896726626384' ||
    message.channelId === '937355829705842708' ||
    message.channelId === '876905050889412628' ||
    message.channelId === '901266512537608202' ||
    message.channelId === '899407327713722458' ||
    message.channelId === '876904963287166997' ||
    message.channelId === '899407266502045737' ||
    message.channelId === '876905348462673940' ||
    message.channelId === '899407162537824257' ||
    message.channelId === '899407439206711306' ||
    message.channelId === '876904938373001256' ||
    message.channelId === '879426685806739506' ||
    message.channelId === '876904992743759892' ||
    message.channelId === '876905015732756550' )
    && message.content!==''
    ) {
      // console.log("in at deadline")
      try{
      deadline_id.map(async id => {

          const user = await client.users.fetch(id, false)
        user.send(`☠️ 𝕹𝖊𝖜 𝕯𝖊𝖆𝖉𝖑𝖎𝖓𝖊 𝖔𝖋 ${message.channel.name} ☠️ \n 𝓤𝓹𝓭𝓪𝓽𝓮𝓭 𝓫𝔂: ${message.author.username} \n        ᲼᲼           `)
        user.send(message.content)

        // user.send(message.attachments.values().next().value.url)
        // message.attachments.forEach(attachment => {
	      // const ImageLink = attachment.attachment;
        // try{
        //     user.send(`${ImageLink.toString()}`)
        // }catch(err){
        // //     console.log(err)
        // }

// });
      })
      }catch(err){
          // console.log(err)
        }

    }
    //black hole message sending

    if (message.channel.id == '884286687079956501') {
      user_id.map(async id => {
        const user = await client.users.fetch(id, false)
        user.send(message.content)
        user.send(message.attachments.values().next().value.url)
      })
    }

    const content = message.content.split(' ')
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '<@!326605746878021634>' && message.author.id !== '763132005847662592' ) {
        // console.log("gg")
        message.channel.send('Wait for the senpai to come  :3')

        id = '326605746878021634'

        client.users.fetch(id, false).then(user => {
          user.send('✅✅✅✅! ')
          user.send(message.author.username + ' mentioned you in ' + message.channel.name)

          user.send(message.content)
          // user.send(message.attachments.values().next().value.url)
        })
      }
    }

    //react to tts
    if (message.tts) {
      message.channel.send('staphh 😤😤😡')
    }
    //blocking messages of blocklisted person

    if (messageBlockList.includes(message.author.id) || messageBlockList.includes(message.author.id)) {
      // console.log(messageBlockList)
      await message.channel.messages.delete(message)
    }
    //mentioning me

    //delete message
    if (content[0] === '?dm') {
      await message.channel.messages.delete(message)

      if (+content[1] > 100) {
        deleteBulkMessage(message.channel.messages, +content[1])
      } else {
        // console.log(message.author.username)

        // console.log(typeof +content[1])

        messageBulk = await message.channel.messages.fetch({ limit: +content[1] })
        messageBulk.forEach(async (_keys, value) => {
          await message.channel.messages.delete(value)
        })
      }
    } else if (
      //remove  bot command

      (message.channel.id != '711953215368855653' &&
      message.channel.id != '762430808375296070' &&
      message.channel.id != '938068173826162749' &&
      message.channel.id != '750602655692357648' &&
      message.channel.id != '933753119769247744' &&
      message.channel.id != '884968282560536626'&&
      message.channel.id != '943908525363572736')&&
      ('' + content[0] === '!p' ||
        '' + content[0] + '' === '!P' ||
        '' + content[0] + '' === '!leave' ||
        '' + content[0] + '' === '!LEAVE' ||
        '' + content[0] + '' === '!skip' ||
        '' + content[0] + '' === '!SKIP' ||
        '' + content[0] + '' === '.p' ||
        '' + content[0] + '' === '.P' ||
        '' + content[0] + '' === '$botify' ||
        '' + content[0] + '' === ';;loop' ||
        '' + content[0] + '' === ';;' ||
        '' + content[0] + '' === ';;p' ||
        '' + content[0] + '' === '>p' ||
        '' + content[0] + '' === '>disconnect' ||
        '' + content[0] + '' === '>P' ||
        '' + content[0] + '' === '>join' ||
        '' + content[0] + '' === '.skip' ||
        '' + content[0] + '' === '.suffer' ||
        '' + content[0] + '' === '.dc' ||
        '' + content[0] + '' === '?bm' ||
        '' + content[0] + '' === '?um' ||
        '' + content[0] + '' === '+bh' ||
        '' + content[0] + '' === '?-bh' ||
        '' + content[0] + '' === '?+d' ||
        '' + content[0] + '' === '?-d' ||
        '' + content[0] + '' === '?dm' ||
        '' + content[0] + '' === '?db' ||
        '' + content[0] + '' === '?cdb' ||
       '' + content[0] + '' === '?rot' ||
       '' + content[0] + '' === '?text' ||
        message.author.id === '235088799074484224' ||
        message.author.id === '547905866255433758') // bot ids
    ) {

      await message.channel.messages.delete(message)
    } else if (
      //insert banned member
      content[0] === '?bm' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {
      // console.log("ban member")
      messageBlockList = [...messageBlockList, content[1]]

    }else if (
      //dm through bot
      content[0] === '?text' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {
      if(content[1][0]==='('){

        const text_id=content[1].slice(1,-2).split(",")
        for(let i=0;i<text_id.length;i++){
          console.log(text_id[i])
          user=client.users.cache.find(user => user.id === text_id[i])

          user.send(content[2])
        }

      }else{
        let temp=content[2]
      console.log("gg")
    for (let i=3;i<content.length;i++){
        temp=temp.concat(" "+content[i])
    }
    user=client.users.cache.find(user => user.id === content[1])
    user.send(temp)
      }


    }
    else if (
       //rotation of user through channels
      content[0] === '?rot' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618' || message.author.id==='765451359716638730')
    ) {


      console.log("gg")
      rot_user=client.users.cache.find(user => user.id === content[1])


    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const member = await message.guild.members.fetch(rot_user.id)
    const interval = 800
    for (let i = 0; i < 10; i++) {
      await member.voice.setChannel(content[2])
      await sleep(interval)
      await member.voice.setChannel(content[3])
      await sleep(interval)
    }

    }
     else if (
      //dm interaction
      content[0] === 'hello'
    ) {
      message.author.send('yosh')
    } else if (
      //unban member
      content[0] === '?um' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {
      delete messageBlockList[messageBlockList.indexOf(content[1])]
    } else if (
      //black hole add member
      content[0] === '?+bh' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {
      user_id = [...user_id, content[1]]
      // console.log(user_id)
    }
//     } else if (
//       //database show
//       content[0] === '?db' &&
//       (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
//     ) {
//     try{
//     db.list().then( async keys => {
// //     if(keys.length<=100){
// //     for (let i = 0; i < keys.length; i++) {

// //     await db.get(keys[i]).then(async value => {await message.channel.send(`${value}>${keys[i]}`)});
// // }

// // }else{
// //   for (let i = 0; i < keys.length; i++) {

// //     await db.get(keys[i]).then(async value => {await message.channel.send(`${value}>${keys[i]}`)});
// // }

// for (let i = 0; i < keys.length; i++) {

//     await db.get(keys[i]).then(async value => {await message.channel.send(`${value}>${keys[i]}`)});
// }

//     })
//     }catch(err){
//       // console.log(err)
//     }




//     }
    // }else if (
    //   //mute member
    //   content[0] === '?mute' &&
    //   (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    // ) {
    //   let channel = await message.guild.channels.cache.get(content[1])
    //   console.log(await channel.guild.voiceStates)
    //   console.log(Object.getOwnPropertyNames(channel.guild.voiceStates.guild.members))
    //   // rot_user=client.users.cache.find(user => user.id === content[1])
    //   const member = await message.guild.members.fetch(rot_user.id)

    //   await member.voice.setMute(true)

    // }
    else if (
      //unban member
      content[0] === '?-bh' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {
      delete user_id[user_id.indexOf(content[1])]
    }
    // else if (
    //   //clean database
    //   content[0] === '?cdb' &&
    //   (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    // ) {

    // db.empty()

    // }

     else if (
      //deadline add member
      content[0] === '?+d' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {

      deadline_id = [...deadline_id, content[1]]
      // console.log(deadline_id)
    } else if (
      //deadline remove
      content[0] === '?-d' &&
      (message.author.id === '326605746878021634' || message.author.id === '323187566796996618')
    ) {
      delete deadline_id[deadline_id.indexOf(content[1])]
    }


    //music bot
  } catch (err) {
    // console.log(err)
  }
}
client.on('voiceStateUpdate', async (oldState, newState) => {

if ((oldState.channelId === null && newState.channelId != null) || (oldState.channelId != null && newState.channelId === null))  {
function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()-360*60*1000);

    var offset = -360 / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}
let state
if(oldState.channelId === null && newState.channelId != null){
  state="in"
}else{
  state="out"
}

var date = convertUTCDateToLocalDate(new Date());

const User = client.users.cache.get(newState.id)
// db.set(date.toString().slice(0,24), `${User.tag} ---${state}--- ${newState.guild.name} -----`).then(() => {})
client.channels.cache.get('949374303823089734').send(`${User.tag} ---${state}--- ${newState.guild.name} -----${date.toString().slice(0,24)}`)

}
  })
// GuildMember.voice.setChannel(channel)

server.all("/",(req,res)=>{
  res.send("Bot is running!")
})

server.listen(7000,()=>{
  console.log("Ready Server")
})



client.login(process.env.TOKEN)
