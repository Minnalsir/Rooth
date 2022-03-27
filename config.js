const fs = require('fs')
const chalk = require('chalk')

global.owner = ['5513988614673']
global.prefix= ['#']
global.sessionName = 'WhatsApp-Bot'
global.mess = {
    success: 'Feito!!',
	nomebot: 'Rooth',
    admin: '*Ops!! desculpe cara, isso é apenas para administradores*',
    botAdmin: '*Não posso fazer esse comando sem admin...*',
    owner: '*Desculpe!! este comando é para meus queridos desenvolvedores.*',
    group: '*Deixe-me aqui sozinho por favor...*',
    wait: '*Carregando....*',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
