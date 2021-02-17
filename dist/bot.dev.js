"use strict";

//BACKUP BOT
var fs = require('fs');

var Discord = require("discord.js");

var _require = require('./config.json'),
    prefix = _require.prefix,
    token = _require.token;

var _require2 = require('vm'),
    measureMemory = _require2.measureMemory;

var snekfetch = require('snekfetch');

var isReady = true;
var client = new Discord.Client();
client.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands').filter(function (file) {
  return file.endsWith('.js');
});

var rollD4 = function rollD4() {
  return Math.floor(Math.random() * 4) + 1;
},
    rollD6 = function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
},
    rollD8 = function rollD8() {
  return Math.floor(Math.random() * 8) + 1;
},
    rollD10 = function rollD10() {
  return Math.floor(Math.random() * 10) + 1;
},
    rollD12 = function rollD12() {
  return Math.floor(Math.random() * 12) + 1;
},
    rollD20 = function rollD20() {
  return Math.floor(Math.random() * 20) + 1;
},
    rollD100 = function rollD100() {
  return Math.floor(Math.random() * 100) + 1;
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    var command = require("./commands/".concat(file));

    client.commands.set(command.name, command);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

client.on("ready", function () {
  console.log("Bot has started, with ".concat(client.users.cache.size, " users, in ").concat(client.channels.cache.size, " channels of ").concat(client.guilds.cache.size, " guilds."));
  client.user.setActivity("Estou em ".concat(client.guilds.cache.size, " servidores. >help"));
});
client.on("guildCreate", function (guild) {
  console.log("New guild joined: ".concat(guild.name, " (id: ").concat(guild.id, "). This guild has ").concat(guild.memberCount, " members!"));
  client.user.setActivity("Serving ".concat(client.guilds.cache.size, " servers"));
});
client.on("guildDelete", function (guild) {
  console.log("I have been removed from: ".concat(guild.name, " (id: ").concat(guild.id, ")"));
  client.user.setActivity("Serving ".concat(client.guilds.cache.size, " servers"));
}); //dados

client.on('message', function _callee(message) {
  var args, command;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!message.content.startsWith(prefix) || message.author.bot)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          args = message.content.slice(prefix.length).trim().split(/ +/);
          command = args.shift().toLowerCase();

          if (command === 'd4') {
            message.channel.send(rollD4());
          } else if (command === 'd6') {
            message.channel.send(rollD6());
          } else if (command === 'd8') {
            message.channel.send(rollD8());
          } else if (command === 'd10') {
            message.channel.send(rollD10());
          } else if (command === 'd12') {
            message.channel.send(rollD12());
          } else if (command === 'd20') {
            message.channel.send(rollD20());
          } else if (command === 'd100') {
            message.channel.send(rollD100());
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); //admin

client.on('message', function _callee2(message) {
  var args, command, user, member;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!message.content.startsWith(prefix) || message.author.bot)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          args = message.content.slice(prefix.length).trim().split(/ +/);
          command = args.shift().toLowerCase();

          if (command === 'srbrazil') {
            message.guild.setRegion('brazil').then(function (updated) {
              return console.log("Servidor mudado para ".concat(updated.region));
            })["catch"](console.error);
          } else if (command === 'sruseast') {
            message.guild.setRegion('us-east').then(function (updated) {
              return console.log("Servidor mudado para ".concat(updated.region));
            })["catch"](console.error);
          } else if (command === 'sruscentral') {
            message.guild.setRegion('us-central').then(function (updated) {
              return console.log("Servidor mudado para ".concat(updated.region));
            })["catch"](console.error);
          } else if (command === 'sruswest') {
            message.guild.setRegion('us-west').then(function (updated) {
              return console.log("Servidor mudado para ".concat(updated.region));
            })["catch"](console.error);
          } else if (command === 'kick') {
            user = message.mentions.users.first();

            if (user) {
              member = message.guild.member(user);

              if (member) {
                member.kick('Optional reason that will display in the audit logs').then(function () {
                  message.reply("Expulso com sucesso ".concat(user.tag));
                })["catch"](function (err) {
                  message.reply('I was unable to kick the member');
                  console.error(err);
                });
              } else {
                message.reply("Ele não está entre nós.");
              }
            } else {
              message.reply("Quem é o fdp que vai de base???");
            }
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //textos

client.on('message', function _callee3(message) {
  var args, command, m, taggedUser, _taggedUser, _taggedUser2, _taggedUser3, _taggedUser4, _taggedUser5, connection, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(!message.content.startsWith(prefix) || message.author.bot)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return");

        case 2:
          args = message.content.slice(prefix.length).trim().split(/ +/);
          command = args.shift().toLowerCase();

          if (!(command === 'comandosaudio1')) {
            _context3.next = 8;
            break;
          }

          message.channel.send({
            embed: {
              color: 3447003,
              author: "LeoFt9",
              title: "Comandos de Audio 1",
              description: "Todos os comandos de audio devem ser usados dentro de um canal de voz.",
              fields: [{
                name: "Use the force to make chuca Luke, use the force.",
                value: "`bucciarati fon konichiwa verdade caesar zawarudo run wryyy yes no jojo ohno uoo vaiqueima haha yomacaco giorno aldash acabou aipai wololo awaken away bicha boi chaves chewie dejavu toba desliga droga agua ednaldo ednaldo2 emerald errou giornotheme goldexp goodbye haha jojo kasinao kirafirst kirathird macaco move keh soolgado muitoleite surpresa mula oi murloc nanana orgasm roi paidefamilia pqp praça psol quepena rapaz rero retardado road run yamete yamete2 caesar sonofbitch sorrizo tartaruga tuturu zerork1 zerork2 zerork3`"
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Memebot da Violência."
              }
            }
          });
          _context3.next = 121;
          break;

        case 8:
          if (!(command === 'helpadmin')) {
            _context3.next = 12;
            break;
          }

          message.channel.send({
            embed: {
              color: 3447003,
              author: "LeoFt9",
              title: "Comandos de Admin",
              fields: [{
                name: "Botando moral nessa merda",
                value: "`srbrazil sruscentral sruseast sruswest kick`"
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Memebot da Violência."
              }
            }
          });
          _context3.next = 121;
          break;

        case 12:
          if (!(command === 'comandostexto')) {
            _context3.next = 16;
            break;
          }

          message.channel.send({
            embed: {
              color: 3447003,
              author: "LeoFt9",
              title: "Comandos de Texto",
              fields: [{
                name: "Botando moral nessa merda",
                value: "`ping feio modos chuca calaboca lixo suco server boanoite user info prefix status avatar avatardm vlws`"
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Memebot da Violência."
              }
            }
          });
          _context3.next = 121;
          break;

        case 16:
          if (!(command === 'ping')) {
            _context3.next = 23;
            break;
          }

          _context3.next = 19;
          return regeneratorRuntime.awrap(message.channel.send("Ping?"));

        case 19:
          m = _context3.sent;
          m.edit("Pong! Latency is ".concat(m.createdTimestamp - message.createdTimestamp, "ms. API Latency is ").concat(Math.round(client.ws.ping), "ms"));
          _context3.next = 121;
          break;

        case 23:
          if (!(command === 'feio')) {
            _context3.next = 32;
            break;
          }

          taggedUser = message.mentions.users.first();

          if (message.mentions.users.size) {
            _context3.next = 29;
            break;
          }

          return _context3.abrupt("return", message.reply('Diga qual @ é feio.'));

        case 29:
          message.channel.send("\xC9 a hist\xF3ria do ".concat(taggedUser.username, " feio. Era uma vez um ").concat(taggedUser.username, ", ele era t\xE3o feio que todo mundo morreu! Acabou."));

        case 30:
          _context3.next = 121;
          break;

        case 32:
          if (!(command === 'modos')) {
            _context3.next = 41;
            break;
          }

          _taggedUser = message.mentions.users.first();

          if (message.mentions.users.size) {
            _context3.next = 38;
            break;
          }

          return _context3.abrupt("return", message.reply('Diga qual @ deve ter modos.'));

        case 38:
          message.channel.send("Tenha modos ".concat(_taggedUser.username, " por favor, o senhor n\xE3o \xE9 mais uma crian\xE7a!"));

        case 39:
          _context3.next = 121;
          break;

        case 41:
          if (!(command === 'chuca')) {
            _context3.next = 50;
            break;
          }

          _taggedUser2 = message.mentions.users.first();

          if (message.mentions.users.size) {
            _context3.next = 47;
            break;
          }

          return _context3.abrupt("return", message.reply('Diga qual @ deve fazer a chuca.'));

        case 47:
          message.channel.send("Ei, ".concat(_taggedUser2.username, " bora fazer uma chuca junto?"));

        case 48:
          _context3.next = 121;
          break;

        case 50:
          if (!(command === 'calaboca')) {
            _context3.next = 54;
            break;
          }

          message.channel.send("Cala boca Pig do Caralho!");
          _context3.next = 121;
          break;

        case 54:
          if (!(command === 'lixo')) {
            _context3.next = 63;
            break;
          }

          _taggedUser3 = message.mentions.users.first();

          if (message.mentions.users.size) {
            _context3.next = 60;
            break;
          }

          return _context3.abrupt("return", message.reply('Diga qual @ é um lixo.'));

        case 60:
          message.channel.send("Fica de boa ai ".concat(_taggedUser3.username, ", seu lixo."));

        case 61:
          _context3.next = 121;
          break;

        case 63:
          if (!(command === 'suco')) {
            _context3.next = 72;
            break;
          }

          _taggedUser4 = message.mentions.users.first();

          if (message.mentions.users.size) {
            _context3.next = 69;
            break;
          }

          return _context3.abrupt("return", message.reply('Diga qual @ é o suco do lixo.'));

        case 69:
          message.channel.send("Tu \xE9 o suco do lixo ".concat(_taggedUser4.username, "."));

        case 70:
          _context3.next = 121;
          break;

        case 72:
          if (!(command === 'server')) {
            _context3.next = 76;
            break;
          }

          message.channel.send("Server name: ".concat(message.guild.name, "\nTotal members: ").concat(message.guild.memberCount));
          _context3.next = 121;
          break;

        case 76:
          if (!(command === 'boanoite')) {
            _context3.next = 85;
            break;
          }

          _taggedUser5 = message.mentions.users.first();

          if (message.mentions.users.size) {
            _context3.next = 82;
            break;
          }

          return _context3.abrupt("return", message.reply('Diga qual @ é que vai receber o boa noite.'));

        case 82:
          message.channel.send("Boa noite ".concat(_taggedUser5.username, " chei de GAIA."));

        case 83:
          _context3.next = 121;
          break;

        case 85:
          if (!(command === 'user')) {
            _context3.next = 89;
            break;
          }

          message.channel.send("Your username: ".concat(message.author.username, "\nYour ID: ").concat(message.author.id));
          _context3.next = 121;
          break;

        case 89:
          if (!(command === 'comandoskhaleus')) {
            _context3.next = 93;
            break;
          }

          message.channel.send({
            embed: {
              color: 3447003,
              author: "LeoFt9",
              title: "Comandos do Khaleus",
              description: "Frases famosas do maior indio do mundo, Khaleus!",
              fields: [{
                name: "eai men, pedrinha?",
                value: "`khaleus1 khaleus2 aimeukrl calma desculpa kushi kushi2 fdp gasparzinho nperguntei porra errado wtf lag vtnc`"
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Memebot da Violência."
              }
            }
          });
          _context3.next = 121;
          break;

        case 93:
          if (!(command === 'leave')) {
            _context3.next = 100;
            break;
          }

          if (!message.member.voice.channel) {
            _context3.next = 98;
            break;
          }

          _context3.next = 97;
          return regeneratorRuntime.awrap(message.member.voice.channel.leave());

        case 97:
          connection = _context3.sent;

        case 98:
          _context3.next = 121;
          break;

        case 100:
          if (!(command === 'info')) {
            _context3.next = 104;
            break;
          }

          message.channel.send({
            embed: {
              color: 3447003,
              author: "LeoFt9",
              title: "Memebot da Violência",
              url: "https://discordapp.com/oauth2/authorize?=&client_id=737137043515244645&scope=bot&permissions=8",
              description: "Um bot brabissimo com memes excelentes.",
              fields: [{
                name: "Dono do Bot mais brabo do UNIVERSO",
                value: "LeoFt9 vulgo Zé Kinna o melhor dos seres humanos!"
              }, {
                name: "Invite link",
                value: "https://discordapp.com/oauth2/authorize?=&client_id=737137043515244645&scope=bot&permissions=8"
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Memebot da Violência."
              }
            }
          });
          _context3.next = 121;
          break;

        case 104:
          if (!(command === 'prefix')) {
            _context3.next = 108;
            break;
          }

          message.channel.send("Meu prefixo \xE9 >");
          _context3.next = 121;
          break;

        case 108:
          if (!(command === 'vlws')) {
            _context3.next = 112;
            break;
          }

          message.channel.send({
            embed: {
              color: 3447003,
              author: "LeoFt9",
              title: "Memebot da Violência",
              url: "https://discordapp.com/oauth2/authorize?=&client_id=737137043515244645&scope=bot&permissions=8",
              description: "Um bot brabissimo com memes excelentes.",
              fields: [{
                name: "Agradecimento a uns ai",
                value: "Tudo boi da keh"
              }, {
                name: "MestrePedra",
                value: "Pedra que teve a decência de mandar os audios do khaleus e do banho dos campeões."
              }, {
                name: "Bola",
                value: "Me ajudou a corrigir essa merda, ainda n arrumei por simples preguiça!"
              }, {
                name: "Pig",
                value: "Pelo excelente uso do bot para zoar gente que usa caixa de som no pc em pleno 2020."
              }, {
                name: "Dosenhor",
                value: "Por gravar um video inacreditável (>roi) e por usar sua caixa de som em pleno 2020."
              }, {
                name: "Zerork",
                value: "Por ser odiado em 3 servidores e contando... e sem a treta gerada por isso esse bot nunca existiria."
              }, {
                name: "Gato Gui",
                value: "Pelos comandos de otaku fudido."
              }, {
                name: "Boizin",
                value: "Ele só riu mas já valeu a pena"
              }, {
                name: "Keh",
                value: "Por ter feito tantos bois pelo Goldrinn no que resultou em uma guerra civil pelo servidor para saber quem tinha o chifre maior!"
              }, {
                name: "Invite link",
                value: "https://discordapp.com/oauth2/authorize?=&client_id=737137043515244645&scope=bot&permissions=8"
              }],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Memebot da Violência."
              }
            }
          });
          _context3.next = 121;
          break;

        case 112:
          if (!(command === 'status')) {
            _context3.next = 116;
            break;
          }

          return _context3.abrupt("return", message.channel.send("Total de cancereseses usando o bot \xE9: ".concat(client.users.cache.size)));

        case 116:
          if (!(command === 'odiado')) {
            _context3.next = 120;
            break;
          }

          return _context3.abrupt("return", message.channel.send("Total de servidores que o zerork \xE9 odiado: 3 e subindo!"));

        case 120:
          if (command === 'help') {
            message.channel.send({
              embed: {
                color: 3447003,
                author: "LeoFt9",
                title: "Comandos",
                description: "O prefixo é >",
                fields: [{
                  name: "Comandos de Texto",
                  value: "`>comandostexto`"
                }, {
                  name: "Comandos de Audio 1",
                  value: "`>comandosaudio1`"
                }, {
                  name: "Comandos de Audio 2",
                  value: "`>comandosaudio2`"
                }, {
                  name: "Comandos de Audio 3",
                  value: "`>comandosaudio3`"
                }, {
                  name: "Comandos do khaleus",
                  value: "`>comandoskhaleus`"
                }, {
                  name: "Comandos de Video 1",
                  value: "`>comandosvideo1`"
                }, {
                  name: "Comandos de Imagens 1",
                  value: "`>comandosimagem1`"
                }, {
                  name: "Comandos de Dados",
                  value: "`comandosdados`"
                }],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Memebot da Violência."
                }
              }
            });
          } else if (command === 'avatardm') {
            user = message.mentions.users.first();
            message.author.send(user.displayAvatarURL());
          } else if (command === 'avatar') {
            message.reply(message.author.displayAvatarURL());
          } else if (command === 'comandosaudio2') {
            message.channel.send({
              embed: {
                color: 3447003,
                author: "LeoFt9",
                title: "Comandos de Audio 2",
                description: "Todos os comandos de audio devem ser usados dentro de um canal de voz.",
                fields: [{
                  name: "Use the force to make chuca Luke, use the force.",
                  value: "`agaragã aiai airhorn ara ashe ayaya banho1 banho2 banho3 banho4 bemfeito berg brasilia calaboca chola darkness derruba desarmado drama duelo eita entendi explosion hristop fdp2 fodase foderemix fome gostosa hmm klk lagoaqui leao louco lucio matar seubuceta sad chapa marilene mccree parabains dva1 dva2 globo processa prostiranhas putaria gratis marinho risada running rusbe hanzo stand sentaaqui seraqn soled sopa suportando voltei taok oramuda tobecontinued keh2 ashe2 meudeus perplecto genji moira urss vaamerda vai vegeta caixao jacquin aplausos widow scream yare`"
                }],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Memebot da Violência."
                }
              }
            });
          } else if (command === 'comandosaudio3') {
            message.channel.send({
              embed: {
                color: 3447003,
                author: "LeoFt9",
                title: "Comandos de Audio 3",
                description: "Todos os comandos de audio devem ser usados dentro de um canal de voz.",
                fields: [{
                  name: "Use the force to make chuca Luke, use the force.",
                  value: "`adeus inosuke inosuke2 megumin oniichan2 jukes1 jukes2 jukes3 jukes4 jukes5 jukes6 jukes7 jukes8 miau nossa aeboizão aloboizão vlwboizão risadinha`"
                }],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Memebot da Violência."
                }
              }
            });
          } else if (command === 'comandosvideo1') {
            message.channel.send({
              embed: {
                color: 3447003,
                author: "LeoFt9",
                title: "Comandos de Video 1",
                fields: [{
                  name: "Deal with it",
                  value: "`doente rotinco`"
                }],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Memebot da Violência."
                }
              }
            });
          } else if (command === 'comandosimagem1') {
            message.channel.send({
              embed: {
                color: 3447003,
                author: "LeoFt9",
                title: "Comandos de Imagens 1",
                fields: [{
                  name: "Deal with it",
                  value: "`dosenhor pedrinha nazaré senhormilos hipocrisia areia god`"
                }],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Memebot da Violência."
                }
              }
            });
          } else if (command === 'comandosdados') {
            message.channel.send({
              embed: {
                color: 3447003,
                author: "LeoFt9",
                title: "Comandos de Imagens 1",
                fields: [{
                  name: "They see me Rolling",
                  value: "`d4 d6 d8 d10 d12 d20 d100`"
                }],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Memebot da Violência."
                }
              }
            });
          }

        case 121:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //images-gif

client.on('message', function _callee4(message) {
  var args, command;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!(!message.content.startsWith(prefix) || message.author.bot)) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt("return");

        case 2:
          args = message.content.slice(prefix.length).trim().split(/ +/);
          command = args.shift().toLowerCase();

          if (command === 'dosenhor') {
            message.channel.send({
              files: ["./images/dosenhor.png"]
            });
          } else if (command === 'gadogui') {
            message.channel.send({
              files: ["./images/gadogui.png"]
            });
          } else if (command === 'pedrinha') {
            message.channel.send({
              files: ["./images/pedrinha.png"]
            });
          } else if (command === 'nazaré') {
            message.channel.send("https://tenor.com/view/nazaretedesco-nazareconfusa-nazare-ladymath-gif-7528656");
          } else if (command === 'kylie') {
            message.channel.send("https://tenor.com/view/kylie-wap-gif-18078260");
          } else if (command === 'senhormilos') {
            message.channel.send({
              files: ["./images/senhormilos.jpg"]
            });
          } else if (command === 'hipocrisia') {
            message.channel.send({
              files: ["./images/hipocrisia.jpg"]
            });
          } else if (command === 'areia') {
            message.channel.send({
              files: ["./images/areia.png"]
            });
          } else if (command === 'god') {
            message.channel.send({
              files: ["./images/god.png"]
            });
          }

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //videos

client.on('message', function (message) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/);
  var command = args.shift().toLowerCase();

  if (command === 'doente') {
    message.channel.send({
      files: ["./videos/doente.mp4"]
    });
  } else if (command === 'rotinco') {
    message.channel.send({
      files: ["./videos/rotinco.mp4"]
    });
  }
}); //audios

client.on('message', function (message) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/);
  var command = args.shift().toLowerCase();

  if (isReady && command === 'bucciarati') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/bucciarati.mp3', {
        volume: 1.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'fon') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/fon.mp3', {
        volume: 0.3
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'konichiwa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/konichiwa.mp4');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'verdade') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/verdade.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'caesar') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/shiza.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'zawarudo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/zawarudo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'run') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/run.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'wryyy') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/wryyy.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'yes') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/yes.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'no') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/no.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jojo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jojo.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ohno') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ohno.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'haha') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/haha.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'yomacaco') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/yomacaco.mp3', {
        volume: 0.5
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'giorno') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/giorno.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aldash') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aldash.mp3', {
        volume: 5.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'acabou') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/acabou.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'toba') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aimeucu.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aipai') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aipai.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'awaken') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/awaken.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'away') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/away.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'bicha') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/bicha.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'boi') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/boi.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'chaves') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/chaves.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'chewie') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/chewie.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'dejavu') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/dejavu.mp3', {
        volume: 0.8
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'desliga') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/desliga.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'droga') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/droga.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'agua') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/agua.mp3', {
        volume: 1.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ednaldo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ednaldopereira.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ednaldo2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ednaldopereira2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'emerald') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/emerald.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'errou') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ednaldopereira.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'giornotheme') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/giornotheme.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'goldexp') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/goldexp.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'goodbye') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/goodbye.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'haha') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/haha.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jojo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jojo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'kasinao') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/kasinao.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'kirafirst') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/kirafirst.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'kirathird') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/kirathird.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'macaco') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/macaco.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'move') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/move.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'keh') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/reidogado.mp3', {
        volume: 1.5
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'soolgado') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vidadegado.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'muitoleite') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/muitoleite.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'surpresa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/surpresa.mp3', {
        volume: 3.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'mula') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/mula.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'oi') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/oilindo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'murloc') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/Murloc.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'nanana') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/nanana.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'orgasm') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/orgasm.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'roi') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/roids.mp4');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'paidefamilia') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/paidefamilia2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'pqp') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/pqp.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'praça') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/praca.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'psol') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/psol.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'quepena') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/quepena.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'rapaz') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/rapaz.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'rero') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/rero.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'retardado') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/retardado.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'road') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/roada.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'run') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/run.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'khaleus1') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/khaleus1.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'yamete') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/yamete.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'yamete2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/yamete2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'caesar') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/shiza.mp3', {
        volume: 3.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'sonofbitch') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/sonofbitch.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'sorrizo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/sorrizo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'tartaruga') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/tartaruga.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'tuturu') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/tuturu.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'uoo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/uoo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'vaiqueima') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vaiqueima.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'wololo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/wololo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aimeukrl') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aimeukrl.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'khaleus2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/khaleus2.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'calma') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/calmacaralho.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'desculpa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/desculpa.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'kushi') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/kushi.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'kushi2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/kushi2.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'fdp') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/fdp.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'gasparzinho') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/gasparzinho.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'nperguntei') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/nperguntei.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
    message.channel.send({
      files: ["./images/nperguntei.jpg"]
    });
  } else if (isReady && command === 'porra') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/porra.mp3', {
        volume: 4.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'errado') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/errado.mp3', {
        volume: 5.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'wtf') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/wtf.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'lag') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/lag.mp3', {
        volume: 3.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'vtnc') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vtnc.mp3', {
        volume: 3.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'john') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/john.mp3', {
        volume: 3.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'agaragã') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/agaragã.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aiai') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aiai.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'airhorn') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/airhorn.mp3', {
        volume: 3.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes4') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ajuda.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ara') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ara.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ashe') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ashe.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ayaya') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ayaya.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'banho1') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/banho1.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'banho2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/banho2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'banho3') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/banho3.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'banho4') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/banho4.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'bemfeito') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/bemfeito.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'berg') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/berg.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'brasilia') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/brasilia.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'calaboca') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/calaboca.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'chola') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/chola.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'darkness') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/darkness.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'derruba') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/derruba.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'desarmado') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/desarmado.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'drama') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/drama.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'duelo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/duelo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'eita') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/eita.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'entendi') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/entendi.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'explosion') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/explosion.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'hristop') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/fbi.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
    message.channel.send({
      files: ["./images/hristop.png"]
    });
  } else if (isReady && command === 'fdp2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/fdp2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'fodase') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/fodase.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'foderemix') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/foderemix.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'fome') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/fome.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'gostosa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/gostosa.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'hmm') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/hmm.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes1') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes1.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'klk') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/klk.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'lagoaqui') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/lagoaqui.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'leao') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/leao.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'louco') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/louco.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'lucio') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/lucio.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'matar') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/matar.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'seubuceta') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/seubuceta.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'sad') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/sad.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'chapa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/chapa.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'marilene') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/marilene.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'mccree') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/mccree.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'parabains') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/parabains.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'dva1') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/dva1.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'globo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/globo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'processa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/processa.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'prostiranhas') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/prostiranhas.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'putaria') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/putaria.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'gratis') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/gratis.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'marinho') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/marinho.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'risada') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/risada.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'running') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/running.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'rusbe') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/rusbe.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'hanzo') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/hanzo.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'stand') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/stand.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'sentaaqui') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/sentaaqui.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'seraqn') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/seraqn.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'soled') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/soled.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'sopa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/sopa.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'suportando') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/suportando.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'voltei') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/voltei.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'taok') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/taok.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'oramuda') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/oramuda.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes3') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes3.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'tobecontinued') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/tobecontinued.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'keh2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/keh2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'ashe2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/ashe2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'meudeus') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/meudeus.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'perplecto') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/perplecto.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'genji') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/genji.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'dva2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/dva2.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'moira') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/moira.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'comunista') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/urss.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
    message.channel.send({
      files: ["./images/pernalongacomunista.jpg"]
    });
  } else if (isReady && command === 'vaamerda') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vaamerda.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'vai') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vai.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'vegeta') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vegeta.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'caixao') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/caixao.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jacquin') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jacquin.mp3', {
        volume: 1.5
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aplausos') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aplausos.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'widow') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/widow.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'scream') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/scream.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'yare') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/yare.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'zerork1') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/zerork1.mp3', {
        volume: 2.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'zerork2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/zerork2.mp3', {
        volume: 2.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'zerork3') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/zerork3.mp3', {
        volume: 1.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'adeus') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/adeus.mp3', {
        volume: 1.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'inosuke') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/inosuke.mp3', {
        volume: 1.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'inosuke2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/inosuke2.mp3', {
        volume: 1.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'megumin') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/megumin.mp3', {
        volume: 1.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'oniichan2') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/oniichan2.mp3', {
        volume: 1.2
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'corujão') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/airhorn.mp3', {
        volume: 8.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes5') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes5.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes6') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes6.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes7') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes7.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'jukes8') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/jukes8.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'miau') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/miau.mp3', {
        volume: 2.0
      });
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'nossa') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/nossa.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aeboizão') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aeboizão.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'vlwboizão') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/vlwboizão.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'aloboizão') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/aloboizão.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  } else if (isReady && command === 'risadinha') {
    isReady = false;
    var voiceChannel = message.member.voice.channel.join();
    voiceChannel.then(function (connection) {
      var dispatcher = connection.play('./Audio/risadinha.mp3');
    })["catch"](function (err) {
      return console.log(err);
    });
    isReady = true;
  }
});
client.login(process.env.TOKEN); //client.login(token);