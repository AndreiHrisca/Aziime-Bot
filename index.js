
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

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
   client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 3:30 @here.');
 });
//Mantentanta Miercuri
cron.schedule("1 1 1 * * 4", function() {
   console.log("maintenance");
   client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 3:30 @here.');
 });

 //Mantentanta Sambata
 cron.schedule("1 30 21 * * 5", function() {
    console.log("maintenance");
    client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 2:00 @here.');
  });

  //Mantentanta Duminica
  cron.schedule("1 1 22 * * 6", function() {
     console.log("maintenance");
     client.channels.find(c => c.name === 'announcement').send('Mentenanta la ora 2:00 @here.');
   });



const momentoact = new Date();

  const responses = ['Sa ai o zi minunata!!','Multa bafta ;).', 'Uitate in oglinda inainte sa iesi afara!!', 'Nu uita sa pui haine pe tine.', 'Uneori ai succes…iar alteori înveți.'];
  const respond = () => responses[Math.floor(Math.random() * responses.length)]
  if (true) respond()










 //--------------------------------------------------------------------------------------------------------------------------------------------- Get any image function


    //-----------------------------------------------------------------------------------------------------------------------------------------------------




// Bot listenning messages
client.on('message', msg => {
    //console.log(msg.content)




        if (msg.content === '/help') {
          var embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .addField("WLO commmands","```\n/mant``` ```\n/eva``` ```\n/potiuni``` ```\n/fred``` ```\n/victoria``` ```\n/critquest``` ```\n/stele``` ```\n/market``` ```\n/pet``` ```\n/error```",true)
            .addField("SERVER commmands","```\n/date``` ```\nneata``` ```\n/forum``` ```\n/invite``` ```\n/ask```",true)
            msg.channel.sendEmbed(embed);
        }



        var parts = message.content.split(" ");
        if (parts[0] === "!image") { // Check if first part of message is image command

                // call the image function
                image(message, parts); // Pass requester message to image function

            }






        if (msg.content === '/mant') {
            msg.reply('Mentenanta marti si joi la ora 3:30. '+ 'Mentenanta sambata si duminica la ora 2:00.' )
        }

        if (msg.content === 'ping') {
                msg.reply('pongggg');
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

function image(message, parts) {
      var search = parts.slice(1).join(" ");

      var options = {
      url: "http://results.dogpile.com/serp?qc=images&q=" + search,
      method: "GET",
      headers: {
          "Accept": "text/html",
          "User-Agent": "Chrome"
      }
    };
  request(options, function(error, response, responseBody) {
      if (error) {
          // handle error
          return;
      }

      /* Extract image URLs from responseBody using cheerio */

      $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)

      // In this search engine they use ".image a.link" as their css selector for image links
      var links = $(".image a.link");

      // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
      // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
      var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
      console.log(urls);
      if (!urls.length) {
          // Handle no results
          return;
      }

      // Send result
      message.channel.send( urls[0] );
  });



}
//    if (msg.author.id == '256827042278932480' && msg.contant.includes ==='kick') {
//        member.ban().then((Patrick)),
//        member.ban.id(256827042278932480)
//    }

const token = 'NjcyOTc5NjA1ODk1OTA1MzEy.Xj9kdw.O85842f8iKF5CXcnQLnGdNoGsCE';
client.login(token);
