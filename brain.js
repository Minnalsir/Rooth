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
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        if (m.message) {
        mauri.sendReadReceipt(m.chat, m.sender, [m.key.id])}
        switch(command) {

            
case 'ship':
const percentage = Math.floor(Math.random() * 100)
let sentence
if (percentage < 25) {
sentence = `\t\t\t\t\t*ShipCent: ${percentage}%* \n\t\tAinda há tempo para reconsiderar suas escolhas.`
} else if (percentage < 50) {
sentence = `\t\t\t\t\t*ShipCent: ${percentage}%* \n\t\tBom o suficiente, eu acho! 💫`
} else if (percentage < 75) {
sentence = `\t\t\t\t\t*ShipCent: ${percentage}%* \n\t\t\tFique juntos e você encontrará um belo caminho pela frente. ⭐️`
} else if (percentage < 90) {
sentence = `\t\t\t\t\t*ShipCent: ${percentage}%* \n\tIncrível! Vocês dois serão um bom casal. 💖 `
} else {
sentence = `\t\t\t\t\t*ShipCent: ${percentage}%* \n\tDestino obrigou vocês a ficaram juntos. 💙`
}
let caption = `\t❣️ *Calculando....* ❣️ \n`
caption += `\t\t---------------------------------\n`
caption += `@${user1.split('@')[0]}  x  @${user2.split('@')[0]}\n`
caption += `\t\t---------------------------------\n`
caption += `${sentence}`
m.reply(caption)
break
        
 
default:
}} catch (err) {}}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)})
