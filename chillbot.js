const express = require("express");
const app = express();
const discord = require("discord.js");
const client = new discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});
var bump_timeout = true;
app.listen(3000,()=>{
  console.log("bot is online");
});

app.get("/",(req, res) =>{
  res.send("hello world uwu");
});
client.on("message", message => {
  var msg_value = message.content.toLowerCase();
  var username = message.author.username;
  var id = message.author.id;
  if(msg_value.includes('hello') && msg_value.includes('bot') || msg_value.includes('hi') && msg_value.includes('bot')){
    message.channel.send("hi dad");
  }
  if(message.content === "!d bump" && bump_timeout==true){
    bump_timeout = false;
    message.channel.send("got 100 coins!");
    setTimeout(bump_switchtimeout, 5000);
  }
})

function bump_switchtimeout(){
  bump_timeout = true;
}

client.on("ready", () => {
  console.log("bot is ready");
})


client.login("OTg1MTk2NDIyNzk2Mjc5ODU4.GNso_s.clK6uJLKPFK3AV9FeYNA8HOCB8iR0vEcYIdI-8");
