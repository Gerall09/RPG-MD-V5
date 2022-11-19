import fetch from 'node-fetch'
import { createHash } from 'crypto'
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn, text, usedPrefix, command }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `Nih My Mastah :3`, 
    orderTitle: ``,
    thumbnail: await conn.resize(await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(), 300, 200) //Gambarnye

    }
    }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
	conn.p[id] = [
	await conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:INSTAGRAM: rall_nation09\nitem2.X-ABLabel:Follow Vroh\nitem3.URL:Donate: https://saweria.co/Gerall\nitem3.X-ABLabel:Donate\nitem4.ADR:;;Isekai;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
	]
	await delay(100)
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `Hay kak @${await m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^` 
  let buttonMessage= {
'document':{'url':'https://youtu.be/hklv-Ysqqac'},
'mimetype':global.ddocx,
'fileName':'「 ᴹᴿ᭄ King Of Bear ×፝֟͜× 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/hklv-Ysqqac',
'mediaType':2,
'previewType':'pdf',
'title':`💌 Ultah Owner: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`⚘ by ᴹᴿ᭄ King Of Bear ×፝֟͜×`,
'thumbnail': await(await fetch(thumb)).buffer(),
'sourceUrl':'https://youtu.be/hklv-Ysqqac'}},
'caption':cap,
'footer':`Itu Owner Ku Yah Kak Jangan Sungkem Untuk Chat ;3

${botdate}`,
'buttons':[
{'buttonId':'.tqto','buttonText':{'displayText':'Credits'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler
