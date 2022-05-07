const qrcode = require('qrcode-terminal');
const path = require('path');
const fs = require('fs');
const { Client ,LocalAuth } = require('whatsapp-web.js');
const aspas = '```'
const generator = require('generate-password');
const faker = require('faker-br');
const axios = require('axios')
const client = new Client({ puppeteer: {  headless: true,  args: ['--no-sandbox']},authStrategy: new LocalAuth({ clientId: 'mauri' })});client.initialize();client.on('qr', qr => {qrcode.generate(qr, {small: true});})
client.on('authenticated', () => {console.log('AUTENTICADO!!');});client.on('ready', () => {console.log(`ESSE BOT ESTA CONECTADO TAMBÉM EM localhost:3000`);});client.on('message', async mauri => {console.log(`Mensagem De - ${mauri.body} `);if (mauri.body === 'gerar-numero') {const mycpsps = faker.phone.phoneNumber();console.log(mycpsps);m.reply(`Número: ${mycpsps}`)}if (mauri.body === 'gerar-email') {const mycpspsa = faker.internet.email();console.log(mycpspsa);m.reply(`Email: ${mycpspsa}`)}if (mauri.body === 'gerar-links') {const mycpspsaa = faker.internet.url();console.log(mycpspsaa);m.reply(`Link: ${mycpspsaa}`)}if (mauri.body === 'gerar-senha') {var password = generator.generate({length: 10,numbers: true});console.log(password);m.reply(`Senha: ${password}`)}if (mauri.body === 'gerar-cpf') {let meuCpf = faker.br.cpf();console.log(meuCpf);m.reply(`CPF: ${meuCpf}`)}if (mauri.body === 'gerar-cnpj') {let meuCpf = faker.br.cpf();console.log(meuCpf);m.reply(`CPF: ${meuCpf}`)}})
