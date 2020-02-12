//import { Client, RichEmbed } from 'discord.js';
//const client = new Client();
//import { CronJob as cron } from 'cron';
//import cron from 'node-cron';
const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.RichEmbed()
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
    let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    let suffix = [`st`, `nd`, `rd`];
    return `${today.getDate()}${suffix[today.getDate()] || `th`} of ${months[today.getMonth()]}`;
}


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
cron.schedule("1 1 2 * * 2", function() {
   console.log("maintenance");
   client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 3:30 @here.');
 });
//Mantentanta Miercuri
cron.schedule("1 1 2 * * 4", function() {
   console.log("maintenance");
   client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 3:30 @here.');
 });

 //Mantentanta Sambata
 cron.schedule("1 30 0 * * 6", function() {
    console.log("maintenance");
    client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 2:00 @here.');
  });

  //Mantentanta Duminica
  cron.schedule("1 1 1 * * 0", function() {
     console.log("maintenance");
     client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 2:00 @here.');
   });



const momentoact = new Date();





// Bot listenning messages
client.on('message', msg => {
    //console.log(msg.content)
        if (msg.content.includes === '/ask') {
          let facts = ["da", "nu", "idk"];
          let fact = Math.floor(Math.random() * facts.length);
          msg.channel.send(facts[fact]);
        }

        if (msg.content === 'ping') {
                msg.reply('pong');
        }

        if (msg.content === 'date') {
          msg.reply(getToday());
        }

        if (msg.content === 'David e prost') {
            msg.delete();
        }

        if (msg.content === 'neata') {
            msg.channel.send(`Buna dimineata si tie ${msg.author} !!! Azi e ` + getToday() + '.');
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
            msg.channel.send(' bad link ');
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

        if (msg.content === '!author') {
            const embed = new RichEmbed()
                // .setTitle('A pretty message')
                .setColor(0xFF0000)
                // .setDescription('Hello', msg.author);
                .addField('Author', 'Andrei', true)
                .addField('Version', '1.0', true)
                .addField('Contact', 'andr3y_30@yahoo.com', false)
                //.setAuthor('Andrei', '');
            msg.channel.send(embed);
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

//    if (msg.author.id == '256827042278932480' && msg.contant.includes ==='kick') {
//        member.ban().then((Patrick)),
//        member.ban.id(256827042278932480)
//    }

const token = 'NjcyOTc5NjA1ODk1OTA1MzEy.Xj9kdw.O85842f8iKF5CXcnQLnGdNoGsCE';
client.login(token);
