const Discord = require("discord.js");
var resposta = require('./resposta.json');
const client = new Discord.Client();
var jsonData = require('./raidspn.json');
const prefix = "+";


var qsonData = require('./quest.json');
var questMap = qsonData.map(x => x)
var tamanhoFicheiroQuest = Object.keys(questMap).length;
//console.log(tamanhoFicheiro)












client.on("message", async (msg) => {
  let mewtwo = "";
  let cor = "0x00AE86";
  let mais = "";
  let autor = ""
  let quantidade = 0;
  let obs = "";
  var regra = "Mod"
  let pkmraid = "Desconhecido";
  let adicional = "";


  let team_mystic = msg.guild.roles.find("name", "TREINADOR");
  let team_valor = msg.guild.roles.find("name", "TREINADOR");
  let team_instinct = msg.guild.roles.find("name", "TREINADOR");

  //imagens equipas
  let team_imagem = "";
  const valor = client.emojis.find("name", "valor");
  const mystic = client.emojis.find("name", "valor");
  const instinct = client.emojis.find("name", "valor");


  //---------------------------------------------------	
  //informação 	
  //---------------------------------------------------	


  if (resposta[msg.content]) {
    msg.channel.send({
      embed: {
        color: 16580627,

        description: "**Resposta a : **" + msg.content + "\n\n\n" + resposta[msg.content],
        timestamp: new Date(),
        footer: {
          icon_url: "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png",
          text: "Desenvolvido por Damasc010 - Pinhal Novo, pubicado "
        }

      }
    });




  }
  //---------------------------------------------------		
  //fim informacao
  //---------------------------------------------------		


  function horaCanal(offset) {
    var d = new Date();

    var sunriseMills = d.getTime() + (d.getTimezoneOffset() * 60000);;

    return textTime = new Date(sunriseMills + (3600000 * offset))
      .toLocaleTimeString({ hour: 'numeric', minute: 'numeric' });
  }


  function myFunc(arg) {


    msg.guild.channels.find("name", arg).sendMessage({
      embed: {
        color: 16580627,
        title: "Olá Treinadores\nEste canal é temporário e será apagado às " + horaCanal('+2.5'),
        description: "Para mais informação consultar " + msg.guild.channels.find("name", "tutorial-raids"),


        timestamp: new Date(),
        footer: {
          icon_url: "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png",
          text: "Desenvolvido por Damasc010 - Pinhal Novo, pubicado "
        }

      }
    });


  }




  function apagacanal(arg) {
    // setTimeout(function () {
    msg.guild.channels.find("name", arg).delete();

    //     }, 20000);

  }




  if (msg.channel.name.startsWith('_raid')) {






    //apaga mensagem - retira da raid
    if (msg.content.startsWith('👎')) {
      autor = msg.author;


      // msg.reply(msg.channel.name);//nome do canal onde esta


      let xpto = msg.channel.fetchMessages()
        .then(messages => messages.array().forEach(
          message => message.author.equals(autor) && message.delete()



        ));


      setTimeout(function () {

        // msg.channel.send(bicho);
        msg.channel.send("->" + autor + " ,saiu da RAID.");
      }, 1500);


    }
    //fim ----



    //+++++

    function delmsgdocanal(nomecanal) {

      let xpto = msg.guild.channels.find("name", nomecanal).fetchMessages()
        .then(messages => messages.array().forEach(
          message => message.delete()



        ));
    }



    //++++







    //-------------------------------------------
    if (msg.content.startsWith('👍') || msg.content.startsWith(':+1:') || msg.content.startsWith('->') || msg.content.startsWith('%') || msg.content.startsWith('!exraid')) {


      //paga todas as mensagens do canal
      delmsgdocanal("raids-pinhal-novo");



      //-----
      //le os canais que das raids _raids
      let raidcanal = "";
      const listedChannels = [];
      msg.guild.channels.forEach(channel => {

        if (channel.name.startsWith('_raid')) {
          listedChannels.push(channel.name);




          //  msg.reply("aqui 2"+channel.name);


          raidcanal = msg.guild.channels.find("name", channel.name);




          //-----

          //pelo teste  let raidcanal = msg.channel.name;



          var array = [];

          adicional = "";
          mewtwo = "";
          pkmraid = "";



          //--------------------------------
          //le todas as mensagens do canal
          //------------------------
          msg.guild.channels.find("name", channel.name).fetchMessages({ limit: 100 }).then(msg => {
            msg.forEach(msg => {

              //  msg.reply("aqui 3"+channel.name);

              //msg inicia com %
              if (msg.content.startsWith('%')) {
                pkmraid = msg.content.substring(1);
                array.push(msg.content);
                //  msg.channel.send(pkmraid);
              }

              if (msg.content.startsWith('!exraid')) {
                mewtwo = msg.content.substring(1);
                array.push(msg.content);
              }




              //msg inicia com    
              if (msg.content.startsWith('👍')) {





                if (msg.member.roles.has(team_valor.id)) {
                  team_imagem = valor.toString();
                  // msg.reply(team_imagem);
                  quantidade++;
                  array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                  adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                }

                if (msg.member.roles.has(team_mystic.id)) {
                  team_imagem = mystic.toString();
                  // msg.reply(team_imagem);
                  quantidade++;
                  array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                  adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                }

                if (msg.member.roles.has(team_instinct.id)) {
                  team_imagem = instinct.toString();
                  // msg.reply(team_imagem);
                  quantidade++;
                  array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                  adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                }

                // 
              }


            })
          })

          //---- fim ler mensagens 






          //   msg.channel.send(msg.author.toString() + ", inserido na RAID!");

          //------------------------     
          setTimeout(function () {

            pkmraid = "";
            mewtwo = "";
            // msg.channel.send("array 0"+array);                 
            var result = [];


            array.forEach(function (item) {
              if (result.indexOf(item) < 0) {

                if (item.startsWith('%')) {
                  pkmraid = item.substring(1);
                }
                if (item.startsWith('!')) {
                  mewtwo = item.substring(1);
                }

                if (item.startsWith('!') || item.startsWith('%')) {

                } else {
                  result.push(item);
                }
              }
            });

            //msg.channel.send("result 1"+result);              

            result = result.filter(item => item !== autor);
            var qtatr = result.filter(item => item !== autor).length


            //msg.channel.send("result 2"+result);            

            //--------------------------------------               



            criaRaid(channel.name, pkmraid, result, qtatr, mewtwo);


          }, 1500);

        }
      });
    }

  }





  //  if (msg.content.startsWith('%c')) {
  //  let canal = msg.content.substring(3);

  //   setTimeout(myFunc, 5500, canal);

  //   msg.guild.createChannel(canal, "text");
  //  msg.guild.createRole({name:canal}) ;


  //   }





  //lista todos os elementos que tem a regra
  function criaRaid(canalRaid, bicho, adicional, participantesRaid, sponser) {

    try {





      let bosscp = "";
      var status = "Desconhecido";
      var cpiv = "Desconhecido"

      var ovo = "";
      var braid = ovo;
      //var bicho="";

      cor = "0x00AE86";

      //nivel da raid
      var tiporaid = canalRaid.substring(5, 6);


      var titulo = "RAID " + canalRaid.substr(5);

      var thoras = titulo.split("-");
      var horas = thoras[thoras.length - 1];

      y = thoras;
      var local = "";

      for (var i = 0; i < y.length - 1; i++) {
        local = local + " " + y[i]

      }

      //----- novo 


      var raids = jsonData.map(x => x)
      var tamanhoFicheiro = Object.keys(raids).length;



      switch (tiporaid) {

        case "3":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
          braid = ovo;
          break;
        case "4":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";
          braid = ovo;
          break;
        case "5":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";
          braid = ovo;
          break;
      }



      for (var x = 0; x < tamanhoFicheiro; x++) {

        if (tiporaid == raids[x].nivel && bicho == raids[x].boss) {

          braid = raids[x].imagem;

          cpiv = raids[x].cpiv + " " + raids[x].bosted;
          bosscp = raids[x].bosscp + " " + raids[x].bosstipo;
          status = raids[x].fraco + "\n" + raids[x].counter;
        }
      }



      //--- fim novo          






      if (sponser == "exraid") {
        cor = "0XFEAFEA";
        ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000023-29ab72ab0f/450/Mewtwo.png"
        horas = horas + "\nGinásio em pontuação para o Mewtwo";
      }
      //----  FIM TIPO RAID ---


      disparaRaid(local, horas, canalRaid, adicional, participantesRaid, ovo, braid, cpiv, status, adicional, bosscp);
      //  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage(msg.guild.channels.find("name", msg.channel.name)+"\n"+membersWithRole.join("\n"));

    } catch (err) {
      console.log(err);


    }



  }






  function disparaRaid(local, horas, canal, treinadores, total, ovo, bicho, cpiv, status, adicional, cpboss) {

    //msg.reply("disparaRaid");
    const embed = new Discord.RichEmbed()
      .setTitle(horas)
      .setAuthor(local.toUpperCase(), ovo)

      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor(cor)
      .setDescription("Use o canal " + msg.guild.channels.find("name", canal))
      .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
      // .setImage("http://i.imgur.com/yVpymuV.png")

      .setThumbnail(bicho)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      .addField("BOSS CP " + cpboss, cpiv)

      /*
       * lista dos jogadores que vão RAID.
       */
      .addField("Treinadores : " + total, treinadores, true)
      /*
       * Blank field, useful to create some space.
       */


      .addBlankField(true)
      .addField("\n\n\n\n\n\Fraco contra:", status, true);

    msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({ embed });


  }








  //----criar canal ---

  if (msg.channel.name == 'professor-boss') {

    if (msg.content.startsWith("!5") || msg.content.startsWith("!4") || msg.content.startsWith("!3")) {



      var text = msg.content.substring(1);

      //LE A MENSAGEM EXCLUINDO O !
      var text = text.replace(/[`~@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
      text = text.replace(/\s\s+/g, ' ');;



      var canal = '_raid' + text

      canal = canal.split('!').join('').toLowerCase();
      var nomecanal = canal.split(' ').join('-').toLowerCase();
      // msg.reply(nomecanal); 
      nomecanal = nomecanal.replace(/--/gi, '-');

      //msg.reply(nomecanal); 
      if (msg.guild.channels.find("name", nomecanal)) {
      } else {

        msg.guild.createChannel(nomecanal, "text");


      }
      //
      setTimeout(apagacanal, 4580000, nomecanal);
      setTimeout(myFunc, 1500, nomecanal);

    }   // fim do inicio carater




    //---inicio regras
    var regra = "";
    var role = "";
    if (msg.content.startsWith('+')) {
      msg.guild.channels.find("name", "professor-boss").sendMessage("Olá, " + msg.author + "\nAdicionado ás notificações da Quest de " + msg.content.substring(1) + ", no canal " + msg.guild.channels.find("name", "alertas"));


      regra = msg.content.substring(1).toUpperCase();
      role = msg.guild.roles.find(role => role.name === regra);
      msg.member.addRole(role);

    }

    if (msg.content.startsWith('-')) {
      regra = msg.content.substring(1).toUpperCase();
      role = msg.guild.roles.find(role => role.name === regra);
      msg.member.removeRole(role);
      msg.guild.channels.find("name", "professor-boss").sendMessage("Olá, " + msg.author + "\nRemovido das notificações da Quest de " + msg.content.substring(1) + ", no canal " + msg.guild.channels.find("name", "alertas"));

    }


    // FIM ADICIONAR REGRAS TREINADORES

    //----





    if (msg.content.startsWith('!')) {



      var dmsg = msg.content.substring(1);


      let cod = dmsg.split(" ")[0];

      let pokestop = dmsg.split(" ").slice(1).join(" ");
      let quest = "";
      let missao = "";
      let questimagem = "";
      //ler ficheiro   

      ;
      for (var x = 0; x < tamanhoFicheiroQuest; x++) {

        if (cod == questMap[x].cod) {
          quest = questMap[x].quest;
          missao = questMap[x].missao;
          questimagem = questMap[x].questimagem;

        }
      }






      let autor = msg.author;


      // let roleName = msg.content.split(" ").slice(1).join(" ");
      let roleName = quest;
      //Filtering the guild members only keeping those with the role
      //Then mapping the filtered array to their usernames
      let membersWithRole = msg.guild.members.filter(member => {

        return member.roles.find("name", roleName);
      }).map(member => {
        //  msg.guild.channels.find("name", "quest-info").sendMessage(member.user+"\n")
        // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())



        // member.user.send("lkjlkjk");



        msg.guild.channels.find("name", "alertas").sendMessage(horaCanal('+0')+" "+member.user + " Quest **" + quest + "** - Pokestop : **" + pokestop + "**");





      })



      const questemb = new Discord.RichEmbed()
        .setTitle(quest)
        .setAuthor(pokestop, "https://exraidspinhalnovo.webnode.pt/_files/200000044-1157e1263e/450/pstop.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription(missao)
        .setFooter("Pubicado ", "")


        .setThumbnail(questimagem)

        .setTimestamp();

      msg.guild.channels.find("name", "quest").sendMessage({ questemb });






    }//fim regras










  }//fim if

  //fim criar canal----











  //---teste ----
  if (msg.channel.name.startsWith('adm-pg-')) {
    if (msg.content.startsWith('!')) {

      var texto = msg.content.substring(1)
      const embed = new Discord.RichEmbed()
        .setTitle("INFORMAÇÃO")
        .setAuthor("Olá treinadores.", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription(texto)
        .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")


        .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png")

        .setTimestamp();



      msg.guild.channels.find("name", "informacao").sendMessage({ embed });
      msg.guild.channels.find("name", "chat").sendMessage({ embed });


    }
  }



  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
