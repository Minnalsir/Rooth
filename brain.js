require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
let { TelegraPh } = require('./lib/uploader')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp,  formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
module.exports = mauri = async (mauri, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const icmd=body.startsWith(prefix)
        const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
        const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Error!!"
        const botNumber = await mauri.decodeJid(mauri.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const isGroup=  m.chat.endsWith("@g.us");
        const groupMetadata = m.isGroup ? await mauri.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
        if (m.message) {
        mauri.sendReadReceipt(m.chat, m.sender, [m.key.id])}
        switch(command) { 


case 'menu':
var _0x3acdec=_0x3ddc;(function(_0x319d5a,_0x57010a){var _0x35e395=_0x3ddc,_0x5490ee=_0x319d5a();while(!![]){try{var _0xeaab16=-parseInt(_0x35e395(0x1a7))/0x1+parseInt(_0x35e395(0x1ac))/0x2*(-parseInt(_0x35e395(0x1a5))/0x3)+-parseInt(_0x35e395(0x1ab))/0x4+-parseInt(_0x35e395(0x1a6))/0x5*(-parseInt(_0x35e395(0x1a1))/0x6)+parseInt(_0x35e395(0x1a9))/0x7*(-parseInt(_0x35e395(0x1a4))/0x8)+parseInt(_0x35e395(0x1a0))/0x9+parseInt(_0x35e395(0x1ad))/0xa*(parseInt(_0x35e395(0x1a3))/0xb);if(_0xeaab16===_0x57010a)break;else _0x5490ee['push'](_0x5490ee['shift']());}catch(_0x38f30c){_0x5490ee['push'](_0x5490ee['shift']());}}}(_0x2c0a,0x43253),m[_0x3acdec(0x1aa)]('*Ola\x20'+pushname+_0x3acdec(0x1a2)+mess[_0x3acdec(0x1a8)]+'.\x20Sou\x20um\x20bot\x20criado\x20para\x20tornar\x20sua\x20expêriencia\x20com\x20o\x20WhatsApp\x20mais\x20agradavel.*\x0a\x0a'+mess['menubot']));function _0x3ddc(_0x510e31,_0x2ba3c1){var _0x2c0a13=_0x2c0a();return _0x3ddc=function(_0x3ddc39,_0x1fcad9){_0x3ddc39=_0x3ddc39-0x1a0;var _0xa1640e=_0x2c0a13[_0x3ddc39];return _0xa1640e;},_0x3ddc(_0x510e31,_0x2ba3c1);}function _0x2c0a(){var _0x3382d2=['237983YiqNRx','nomebot','7EmLNGZ','reply','624312iwPStn','9118lHuHWm','5660KbBPKm','2909565crDqHe','434280iBmCOG',',\x20Me\x20chamo\x20','5269YsVBxI','519584wRqFKb','51BLzEmf','15TAugdO'];_0x2c0a=function(){return _0x3382d2;};return _0x2c0a();}
break
case 'remover': {
const _0x3f5df4=_0xe99b;(function(_0x2a6ccf,_0x36a659){const _0x4a7fb4=_0xe99b,_0x597557=_0x2a6ccf();while(!![]){try{const _0x486bbe=-parseInt(_0x4a7fb4(0xa5))/0x1*(-parseInt(_0x4a7fb4(0xa9))/0x2)+parseInt(_0x4a7fb4(0xad))/0x3*(-parseInt(_0x4a7fb4(0xac))/0x4)+-parseInt(_0x4a7fb4(0xae))/0x5*(parseInt(_0x4a7fb4(0xaa))/0x6)+parseInt(_0x4a7fb4(0xb2))/0x7+-parseInt(_0x4a7fb4(0xa1))/0x8*(-parseInt(_0x4a7fb4(0xb5))/0x9)+parseInt(_0x4a7fb4(0xb3))/0xa+parseInt(_0x4a7fb4(0xb4))/0xb*(-parseInt(_0x4a7fb4(0xa8))/0xc);if(_0x486bbe===_0x36a659)break;else _0x597557['push'](_0x597557['shift']());}catch(_0x3eeabf){_0x597557['push'](_0x597557['shift']());}}}(_0x171e,0x2f724));if(!m['isGroup'])m['reply'](mess[_0x3f5df4(0xab)]);function _0x171e(){const _0xb8861f=['chat','1nuLHdi','botAdmin','mentionedJid','77640uofhUO','28370kvTDpv','246eVcptm','group','574756ODoOHF','3RlvEKP','27815ggYAKY','remove','quoted','reply','1376676BcefYr','3813300ezgphg','132Oobvot','1251jcpZJO','2968LNLTNQ','admin','replace'];_0x171e=function(){return _0xb8861f;};return _0x171e();}function _0xe99b(_0x422da6,_0x5863f7){const _0x171e18=_0x171e();return _0xe99b=function(_0xe99b1e,_0x122a52){_0xe99b1e=_0xe99b1e-0xa1;let _0x2c929f=_0x171e18[_0xe99b1e];return _0x2c929f;},_0xe99b(_0x422da6,_0x5863f7);}if(!isBotAdmins)m[_0x3f5df4(0xb1)](mess[_0x3f5df4(0xa6)]);if(!isAdmins)m[_0x3f5df4(0xb1)](mess[_0x3f5df4(0xa2)]);let users=m['mentionedJid'][0x0]?m[_0x3f5df4(0xa7)][0x0]:m[_0x3f5df4(0xb0)]?m['quoted']['sender']:text[_0x3f5df4(0xa3)](/[^0-9]/g,'')+'@s.whatsapp.net';await mauri['groupParticipantsUpdate'](m[_0x3f5df4(0xa4)],[users],_0x3f5df4(0xaf));}
break
case 'promover': {
function _0x3b02(){const _0x2f4347=['mentionedJid','869tMQOoj','6xYxjuJ','replace','isGroup','sender','@s.whatsapp.net','4750616jyUIhB','1289645plesqs','9QaWHas','promote','quoted','796RdySVb','39EPpWLj','3434985KLmGdm','admin','13377RyChRU','166596EIutoH','group','groupParticipantsUpdate','2924720EMpudh','botAdmin','reply','14958kjdHEh'];_0x3b02=function(){return _0x2f4347;};return _0x3b02();}const _0x369de4=_0xa6fe;(function(_0x197636,_0x2048c6){const _0x5d70ea=_0xa6fe,_0x2c3a78=_0x197636();while(!![]){try{const _0x3e80dc=parseInt(_0x5d70ea(0x85))/0x1*(parseInt(_0x5d70ea(0x77))/0x2)+parseInt(_0x5d70ea(0x88))/0x3*(-parseInt(_0x5d70ea(0x84))/0x4)+-parseInt(_0x5d70ea(0x86))/0x5*(-parseInt(_0x5d70ea(0x7a))/0x6)+parseInt(_0x5d70ea(0x80))/0x7+-parseInt(_0x5d70ea(0x7f))/0x8+parseInt(_0x5d70ea(0x81))/0x9*(-parseInt(_0x5d70ea(0x8c))/0xa)+-parseInt(_0x5d70ea(0x79))/0xb*(-parseInt(_0x5d70ea(0x89))/0xc);if(_0x3e80dc===_0x2048c6)break;else _0x2c3a78['push'](_0x2c3a78['shift']());}catch(_0x4dde50){_0x2c3a78['push'](_0x2c3a78['shift']());}}}(_0x3b02,0x76a8e));if(!m[_0x369de4(0x7c)])m[_0x369de4(0x76)](mess[_0x369de4(0x8a)]);if(!isBotAdmins)m[_0x369de4(0x76)](mess[_0x369de4(0x75)]);if(!isAdmins)m[_0x369de4(0x76)](mess[_0x369de4(0x87)]);function _0xa6fe(_0x45922e,_0xb054df){const _0x3b029b=_0x3b02();return _0xa6fe=function(_0xa6fed1,_0x2c2b47){_0xa6fed1=_0xa6fed1-0x75;let _0x4593d4=_0x3b029b[_0xa6fed1];return _0x4593d4;},_0xa6fe(_0x45922e,_0xb054df);}let users=m[_0x369de4(0x78)][0x0]?m[_0x369de4(0x78)][0x0]:m[_0x369de4(0x83)]?m[_0x369de4(0x83)][_0x369de4(0x7d)]:text[_0x369de4(0x7b)](/[^0-9]/g,'')+_0x369de4(0x7e);await mauri[_0x369de4(0x8b)](m['chat'],[users],_0x369de4(0x82));}
break
case 'rebaixar': {
const _0x181b8a=_0x82b1;(function(_0x5aaeba,_0x15932b){const _0x37309e=_0x82b1,_0x297684=_0x5aaeba();while(!![]){try{const _0x541fed=parseInt(_0x37309e(0x11b))/0x1*(parseInt(_0x37309e(0x114))/0x2)+parseInt(_0x37309e(0x111))/0x3*(-parseInt(_0x37309e(0x120))/0x4)+parseInt(_0x37309e(0x112))/0x5+-parseInt(_0x37309e(0x113))/0x6+-parseInt(_0x37309e(0x118))/0x7+parseInt(_0x37309e(0x117))/0x8*(-parseInt(_0x37309e(0x10e))/0x9)+parseInt(_0x37309e(0x11a))/0xa;if(_0x541fed===_0x15932b)break;else _0x297684['push'](_0x297684['shift']());}catch(_0x53a84d){_0x297684['push'](_0x297684['shift']());}}}(_0x2789,0xa9e6b));if(!m[_0x181b8a(0x10f)])m[_0x181b8a(0x11c)](mess['group']);if(!isBotAdmins)m['reply'](mess['botAdmin']);function _0x82b1(_0x3308b9,_0x1b445a){const _0x2789bf=_0x2789();return _0x82b1=function(_0x82b1a0,_0x37ba8a){_0x82b1a0=_0x82b1a0-0x10e;let _0x53e5ff=_0x2789bf[_0x82b1a0];return _0x53e5ff;},_0x82b1(_0x3308b9,_0x1b445a);}function _0x2789(){const _0x291a28=['demote','413889FbOxIO','2017125rRmpPx','5570526shYJcB','2ufXxZk','mentionedJid','groupParticipantsUpdate','4904mKhAPj','4042563DpsOsQ','quoted','18239110KsuNQl','1131929QsvERb','reply','admin','sender','replace','8pfUoRs','chat','12942qdWgnM','isGroup'];_0x2789=function(){return _0x291a28;};return _0x2789();}if(!isAdmins)m[_0x181b8a(0x11c)](mess[_0x181b8a(0x11d)]);let users=m[_0x181b8a(0x115)][0x0]?m[_0x181b8a(0x115)][0x0]:m[_0x181b8a(0x119)]?m[_0x181b8a(0x119)][_0x181b8a(0x11e)]:text[_0x181b8a(0x11f)](/[^0-9]/g,'')+'@s.whatsapp.net';await mauri[_0x181b8a(0x116)](m[_0x181b8a(0x121)],[users],_0x181b8a(0x110));}
break
case 'mencionar':
var _0x8e36ce=_0x3714;(function(_0x680d17,_0x16a839){var _0x308fcd=_0x3714,_0x33d39c=_0x680d17();while(!![]){try{var _0x25f7c0=parseInt(_0x308fcd(0x1c3))/0x1*(-parseInt(_0x308fcd(0x1b5))/0x2)+parseInt(_0x308fcd(0x1c0))/0x3*(-parseInt(_0x308fcd(0x1bb))/0x4)+parseInt(_0x308fcd(0x1c5))/0x5*(parseInt(_0x308fcd(0x1bf))/0x6)+-parseInt(_0x308fcd(0x1c4))/0x7+-parseInt(_0x308fcd(0x1cb))/0x8+parseInt(_0x308fcd(0x1bd))/0x9*(parseInt(_0x308fcd(0x1bc))/0xa)+parseInt(_0x308fcd(0x1c9))/0xb;if(_0x25f7c0===_0x16a839)break;else _0x33d39c['push'](_0x33d39c['shift']());}catch(_0x4a63cc){_0x33d39c['push'](_0x33d39c['shift']());}}}(_0x120c,0x7e2c5));function _0x120c(){var _0x3b7a71=['5veMEQN','\x0a*💫\x20Mencionado\x20por\x20-\x20','chat','admin','36846029ysRFgo','split','5662752suvRWZ','reply','1663868ZHjJQC','isGroup','map','*\x0a*🍁\x20Grupo\x20-\x20','sendMessage','group','4eSnWGm','20runXeC','1888758VqTlVY','\x20*@','938886VRkwAg','2766774fgaPWC','botAdmin','*\x0a\x0a','1XsAmXU','6629021JVwmVw'];_0x120c=function(){return _0x3b7a71;};return _0x120c();}if(!m[_0x8e36ce(0x1b6)])m[_0x8e36ce(0x1b4)](mess[_0x8e36ce(0x1ba)]);if(!isBotAdmins)m[_0x8e36ce(0x1b4)](mess[_0x8e36ce(0x1c1)]);if(!isAdmins)m['reply'](mess[_0x8e36ce(0x1c8)]);if(q)var Text='📌\x20*Mensagem\x20-\x20'+q+_0x8e36ce(0x1b8)+groupName+'*';else var Text='*'+groupName+'*';let menText=Text+_0x8e36ce(0x1c6)+pushname+'*\x0a*🕛\x20Hora\x20-\x20'+time+_0x8e36ce(0x1c2);function _0x3714(_0x1714a7,_0x21c356){var _0x120c55=_0x120c();return _0x3714=function(_0x37142e,_0x1938e7){_0x37142e=_0x37142e-0x1b4;var _0x4e0440=_0x120c55[_0x37142e];return _0x4e0440;},_0x3714(_0x1714a7,_0x21c356);}for(let memNum of participants){if(groupAdmins['includes'](memNum['id'])===!![])var emo='👑';else var emo='❄️';menText+=emo+_0x8e36ce(0x1be)+memNum['id'][_0x8e36ce(0x1ca)]('@')[0x0]+'*\x0a';}mauri[_0x8e36ce(0x1b9)](m[_0x8e36ce(0x1c7)],{'text':menText,'mentions':participants[_0x8e36ce(0x1b7)](_0x1ec2d6=>_0x1ec2d6['id'])},{'quoted':m});
break
        
 
default:
}} catch (err) {}}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)})
