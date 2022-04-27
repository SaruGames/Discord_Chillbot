const Discord = require('discord.js');
const client = Discord.Client();

client.on('ready', () =>{
  console.log("Im online again!")
})
client.on('message', msg=>{
  if(msg.content === "!test"){
    msg.reply('1234 test 1234 working beep boop')
   }
  )
client.login(process.env.BOT_TOKEN;
