const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require("node-cron");



client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('dnd'); // online, idle, invisible, dnd
    console.log('Bot status: ', client.user.presence.status);
    // Bot sending a Message to a text channel called test
    const testChannel = client.channels.find(x => x.name === 'test')
    console.log(testChannel)
    client.channels.find(c => c.name === 'test').send('Hello Server!');
});


// FUNCIONES ------------------------------------------------------------------------------------------------------------------------------




function getToday() {
  let today = new Date();
  let months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
  return `${today.getDate()} ${months[today.getMonth()]}`;
}
// TEST ------------------------------------------------------------------
function getday(){

  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Azi e maintenance la ora 02:00."; //Sunday
      break;
    case 1:
      day = "Azi nu e maintenance."; //Monday
      break;
    case 2:
      day = "Azi e maintenance la ora 03:30."; //Tuesday
      break;
    case 3:
      day = "Azi nu e maintenance."; //Wednesday
      break;
    case 4:
      day = "Azi e maintenance la ora 03:30."; //Thursday
      break;
    case 5:
      day = "Azi nu e maintenance."; //Friday
      break;
    case  6:
      day = "Azi e maintenance la ora 02:00."; //Saturday
  }
  return day;
}
//------------------------------------------------------------------------



function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}

//Mantenanta Marti
cron.schedule("1 1 1 * * 2", function() {
   console.log("maintenance");
   client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 3:30.');
 });
//Mantentanta Miercuri
cron.schedule("1 1 1 * * 4", function() {
   console.log("maintenance");
   client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 3:30.');
 });

 //Mantentanta Sambata
 cron.schedule("1 30 22 * * 5", function() {
    console.log("maintenance");
    client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 2:00.');
  });

  //Mantentanta Duminica
  cron.schedule("1 1 23 * * 6", function() {
     console.log("maintenance");
     client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 2:00.');
   });



const momentoact = new Date();

  const responses = ['Sa ai o zi minunata!!','Multa bafta ;).', 'Uitate in oglinda inainte sa iesi afara!!', 'Nu uita sa pui haine pe tine.', 'Uneori ai succes…iar alteori înveți.'];
  const respond = () => responses[Math.floor(Math.random() * responses.length)]
  if (true) respond()







// Bot listenning messages
client.on('message', msg => {
    //console.log(msg.content)
        if (msg.content === '/help') {
          var embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .addField("WLO commmands","```\n/mant``` ```\n/eva``` ```\n/potiuni``` ```\n/fred``` ```\n/victoria``` ```\n/critquest``` ```\n/stele``` ```\n/newacc``` ```\n/market``` ```\n/pet``` ```\n/error```",true)
            .addField("SERVER commmands","```\n/date``` ```\nneata``` ```\n/forum``` ```\n/invite``` ```\n/ask```",true)
            msg.channel.sendEmbed(embed);
        }

        if (msg.content === '/newacc') {
          msg.reply('https://nwloforums.com/thread/53/create-account-new-wonderland-online')
        }

        if (msg.content === '/mant') {
            msg.reply(getday())
        }

        if (msg.content === 'ping') {
                msg.reply('pong');
        }

        if (msg.content === '/date') {
          msg.reply(getToday());
        }

        if (msg.content === 'David e prost') {
            msg.delete();
        }

        if (msg.content === 'neata') {
            msg.channel.send(`Buna dimineata si tie ${msg.author} !!! Azi e ` + getToday()+ '. ' + respond()) ;
        }

        // QUESTS / LINKS-------------------------------------------------------------------

        if (msg.content === '/eva') {
            msg.channel.send('http://nwloforums.com/thread/78/eva-guide-death-quest');
        }

        if (msg.content === '/potiuni') {
            msg.channel.send('http://nwloforums.com/thread/77/holy-exp-potions-quests');
        }

        if (msg.content === '/fred') {
            msg.channel.send('http://nwloforums.com/thread/81/fredericos-guide');
        }

        if (msg.content === '/victoria') {
            msg.channel.send('http://nwloforums.com/thread/83/victoria-quest');
        }

        if (msg.content === '/critquest') {
            msg.channel.send('https://nwloforums.com/board/4/guides');
        }

        if (msg.content === '/stele') {
            msg.channel.send('https://wonderlandonline.fandom.com/wiki/Quests_by_Area');
        }

        if (msg.content === '/money') {
            msg.channel.send('http://nwloforums.com/thread/75/money-gold-guide');
        }

        if (msg.content === '/forum') {
            msg.channel.send('http://nwloforums.com');
        }

        if (msg.content === '/market') {
            msg.channel.send('https://docs.google.com/spreadsheets/d/1jywFUpxxp2nsoYpKMm0mP9W2AS3TLinYzlqPqsPMJq4/edit#gid=468913009');
        }

        if (msg.content === '/error') {
            msg.channel.send('http://nwloforums.com/thread/96/single-error');
        }

        if (msg.content === '/invite') {
            msg.channel.send('https://discord.gg/hPyVFmy');
        }

        if (msg.content === '/pet') {
            msg.channel.send('http://wlopserver.com/thread/35/pet-level-guide');
        }

        if (msg.content.startsWith('/ask')) {
          let facts = ["yeahh!!", "nahh", "idk"];
          let fact = Math.floor(Math.random() * facts.length);
          msg.channel.send(facts[fact]);
        }

        // Deleting 100 messages
        if (msg.content.startsWith('!clear')) {
            async function clear() {
                try {
                    // await msg.delete();
                    const fetched = await msg.channel.fetchMessages({limit: 10});
                    msg.channel.bulkDelete(fetched);;
                    console.log('Messages deleted');
                }
                catch (e) {
                    console.log(e);
                }
            }
            clear();
        }
});



const token = 'NjcyOTc5NjA1ODk1OTA1MzEy.Xj9kdw.O85842f8iKF5CXcnQLnGdNoGsCE';
client.login(token);
