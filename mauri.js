const qrcode = require('qrcode-terminal');
const path = require('path');
const fs = require('fs');
const { Client ,LocalAuth } = require('whatsapp-web.js');
const axios = require('axios')
const client = new Client({ puppeteer: {  headless: true,  args: ['--no-sandbox']},authStrategy: new LocalAuth({ clientId: 'mauri' })});client.initialize();client.on('qr', qr => {qrcode.generate(qr, {small: true});})
client.on('authenticated', () => {console.log('AUTENTICADO!!');});client.on('ready', () => {console.log(`ESSE BOT ESTA CONECTADO TAMBÉM EM localhost:3000`);});client.on('message', async mauri => {console.log(`Mensagem De - ${mauri.body} `);

//𝑭𝑨𝑪̧𝑨 𝑨𝑸𝑼𝑰 𝑺𝑬𝑼𝑺 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺//

if (mauri.body === 'menu') {
mauri.reply('Esse bot esta em construção...')
}

})
 
