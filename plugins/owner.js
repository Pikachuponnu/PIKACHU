const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎PIKACHU BOT😎═════╗*\n           \n*⚜═pikachu═⚜*\n\n*owner Pikachu - http://Wa.me/+919544537858*\n* *\n🔰instagram:- http://Www.instagram.com/pikachu_v.3 *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: PIKACHU*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner Hisham-Muhammed═💥*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎PIKACHU BOT😎═════╗*\n           \n*⚜═pikachu═⚜*\n\n*owner  - http://Wa.me/+919544537858*\n* *\n🔰Instagram: http://Www.instagram.com/pikachu_v.3 *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: PIKACHU*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "Pikachu"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

