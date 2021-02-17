const Discord = require("discord.js");
const {token, channelid} = require("./config.json")
const cron = require ('cron');
const client = new Discord.Client();



client.on('ready', () =>{

  console.log("Bot logado");

});


const scheduledMessage = new cron.CronJob('00 30 15 * * *', () => {
  
const images = ['https://i.imgur.com/QuaD2Fj.jpg','https://i.imgur.com/3fKuw0G.jpg','https://i.imgur.com/S2nqH7o.jpg','https://i.imgur.com/THypWln.jpg','https://i.imgur.com/MmoTxDM.jpg','https://i.imgur.com/O2wUHuB.jpg','https://i.imgur.com/GJweoqV.jpg','https://i.imgur.com/F5T0WnL.jpg','https://i.imgur.com/beJS7T4.jpg','https://i.imgur.com/hltA99U.jpg','https://i.imgur.com/Xrpwi4X.jpg','https://i.imgur.com/4OEVno1.jpg','https://i.imgur.com/RQqR3wb.jpg','https://i.imgur.com/KFZrkNS.jpg','https://i.imgur.com/8ilKt5N.jpg','https://i.imgur.com/1fhnNwu.jpg','https://i.imgur.com/LIdBfyC.jpg','https://i.imgur.com/zBvcZHp.jpg','https://i.imgur.com/5GlPTO3.jpg','https://i.imgur.com/F72CZYc.jpg','https://i.imgur.com/r38aDJl.jpg','https://i.imgur.com/ejs3e7y.jpg','https://i.imgur.com/5khyS72.jpg','https://i.imgur.com/RxaTMXg.jpg','https://i.imgur.com/zOTLT1e.jpg','https://i.imgur.com/nNTnWLO.jpg','https://i.imgur.com/UK8xmzV.jpg',]
const image =  images[Math.floor(Math.random() * images.length)];

  const channel = client.channels.cache.get(channelid);
  channel.send('Fala mulecada gamer aqui quem fala vocês é o CB @everyone');
  channel.send(image);
});
  
const scheduledMessage2 = new cron.CronJob('00 30 09 * * *', () => {
  
const images = ['https://i.imgur.com/QuaD2Fj.jpg','https://i.imgur.com/3fKuw0G.jpg','https://i.imgur.com/S2nqH7o.jpg','https://i.imgur.com/THypWln.jpg','https://i.imgur.com/MmoTxDM.jpg','https://i.imgur.com/O2wUHuB.jpg','https://i.imgur.com/GJweoqV.jpg','https://i.imgur.com/F5T0WnL.jpg','https://i.imgur.com/beJS7T4.jpg','https://i.imgur.com/hltA99U.jpg','https://i.imgur.com/Xrpwi4X.jpg','https://i.imgur.com/4OEVno1.jpg','https://i.imgur.com/RQqR3wb.jpg','https://i.imgur.com/KFZrkNS.jpg','https://i.imgur.com/8ilKt5N.jpg','https://i.imgur.com/1fhnNwu.jpg','https://i.imgur.com/LIdBfyC.jpg','https://i.imgur.com/zBvcZHp.jpg','https://i.imgur.com/5GlPTO3.jpg','https://i.imgur.com/F72CZYc.jpg','https://i.imgur.com/r38aDJl.jpg','https://i.imgur.com/ejs3e7y.jpg','https://i.imgur.com/5khyS72.jpg','https://i.imgur.com/RxaTMXg.jpg','https://i.imgur.com/zOTLT1e.jpg','https://i.imgur.com/nNTnWLO.jpg','https://i.imgur.com/UK8xmzV.jpg',]
const image =  images[Math.floor(Math.random() * images.length)];

  const channel = client.channels.cache.get(channelid);
  channel.send('Fala mulecada gamer aqui quem fala vocês é o CB @everyone');
  channel.send(image);
});


const scheduledMessage3 = new cron.CronJob('00 30 22 * * *', () => {

const images = ['https://i.imgur.com/QuaD2Fj.jpg','https://i.imgur.com/3fKuw0G.jpg','https://i.imgur.com/S2nqH7o.jpg','https://i.imgur.com/THypWln.jpg','https://i.imgur.com/MmoTxDM.jpg','https://i.imgur.com/O2wUHuB.jpg','https://i.imgur.com/GJweoqV.jpg','https://i.imgur.com/F5T0WnL.jpg','https://i.imgur.com/beJS7T4.jpg','https://i.imgur.com/hltA99U.jpg','https://i.imgur.com/Xrpwi4X.jpg','https://i.imgur.com/4OEVno1.jpg','https://i.imgur.com/RQqR3wb.jpg','https://i.imgur.com/KFZrkNS.jpg','https://i.imgur.com/8ilKt5N.jpg','https://i.imgur.com/1fhnNwu.jpg','https://i.imgur.com/LIdBfyC.jpg','https://i.imgur.com/zBvcZHp.jpg','https://i.imgur.com/5GlPTO3.jpg','https://i.imgur.com/F72CZYc.jpg','https://i.imgur.com/r38aDJl.jpg','https://i.imgur.com/ejs3e7y.jpg','https://i.imgur.com/5khyS72.jpg','https://i.imgur.com/RxaTMXg.jpg','https://i.imgur.com/zOTLT1e.jpg','https://i.imgur.com/nNTnWLO.jpg','https://i.imgur.com/UK8xmzV.jpg',]
const image =  images[Math.floor(Math.random() * images.length)];

  const channel = client.channels.cache.get(channelid);
  channel.send('Fala mulecada gamer aqui quem fala vocês é o CB @everyone');
    channel.send(image);
});

const scheduledMessage4 = new cron.CronJob('00 30 03 * * *', () => {
  
const images = ['https://i.imgur.com/QuaD2Fj.jpg','https://i.imgur.com/3fKuw0G.jpg','https://i.imgur.com/S2nqH7o.jpg','https://i.imgur.com/THypWln.jpg','https://i.imgur.com/MmoTxDM.jpg','https://i.imgur.com/O2wUHuB.jpg','https://i.imgur.com/GJweoqV.jpg','https://i.imgur.com/F5T0WnL.jpg','https://i.imgur.com/beJS7T4.jpg','https://i.imgur.com/hltA99U.jpg','https://i.imgur.com/Xrpwi4X.jpg','https://i.imgur.com/4OEVno1.jpg','https://i.imgur.com/RQqR3wb.jpg','https://i.imgur.com/KFZrkNS.jpg','https://i.imgur.com/8ilKt5N.jpg','https://i.imgur.com/1fhnNwu.jpg','https://i.imgur.com/LIdBfyC.jpg','https://i.imgur.com/zBvcZHp.jpg','https://i.imgur.com/5GlPTO3.jpg','https://i.imgur.com/F72CZYc.jpg','https://i.imgur.com/r38aDJl.jpg','https://i.imgur.com/ejs3e7y.jpg','https://i.imgur.com/5khyS72.jpg','https://i.imgur.com/RxaTMXg.jpg','https://i.imgur.com/zOTLT1e.jpg','https://i.imgur.com/nNTnWLO.jpg','https://i.imgur.com/UK8xmzV.jpg',]
const image =  images[Math.floor(Math.random() * images.length)];

  const channel = client.channels.cache.get(channelid);
  channel.send('Fala mulecada gamer aqui quem fala vocês é o CB @everyone');
  channel.send(image);
});

const scheduledMessage5 = new cron.CronJob('00 38 23 * * *', () => {
  
const images = ['https://i.imgur.com/QuaD2Fj.jpg','https://i.imgur.com/3fKuw0G.jpg','https://i.imgur.com/S2nqH7o.jpg','https://i.imgur.com/THypWln.jpg','https://i.imgur.com/MmoTxDM.jpg','https://i.imgur.com/O2wUHuB.jpg','https://i.imgur.com/GJweoqV.jpg','https://i.imgur.com/F5T0WnL.jpg','https://i.imgur.com/beJS7T4.jpg','https://i.imgur.com/hltA99U.jpg','https://i.imgur.com/Xrpwi4X.jpg','https://i.imgur.com/4OEVno1.jpg','https://i.imgur.com/RQqR3wb.jpg','https://i.imgur.com/KFZrkNS.jpg','https://i.imgur.com/8ilKt5N.jpg','https://i.imgur.com/1fhnNwu.jpg','https://i.imgur.com/LIdBfyC.jpg','https://i.imgur.com/zBvcZHp.jpg','https://i.imgur.com/5GlPTO3.jpg','https://i.imgur.com/F72CZYc.jpg','https://i.imgur.com/r38aDJl.jpg','https://i.imgur.com/ejs3e7y.jpg','https://i.imgur.com/5khyS72.jpg','https://i.imgur.com/RxaTMXg.jpg','https://i.imgur.com/zOTLT1e.jpg','https://i.imgur.com/nNTnWLO.jpg','https://i.imgur.com/UK8xmzV.jpg',]
const image =  images[Math.floor(Math.random() * images.length)];

  const channel = client.channels.cache.get(channelid);
  channel.send('Fala mulecada gamer aqui quem fala vocês é o CB @everyone');
  channel.send(image);
});

  scheduledMessage.start()
  scheduledMessage2.start()
  scheduledMessage3.start()
  scheduledMessage4.start()
  scheduledMessage5.start()

client.login(process.env.TOKEN);
//client.login(token);