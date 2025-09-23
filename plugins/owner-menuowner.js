
import fs from 'fs'
import os from 'os'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix }) => {
  
  // Imagen que saldrá en la tarjeta
  let media = 'https://files.catbox.moe/bw463n.jpg' // cambia el link por tu foto
  
  // Tiempo activo
  let uptime = process.uptime() * 1000
  let tiempo = clockString(uptime)
  
  // Texto del menú
  let menu = `
¡𝗛𝗼𝗹𝗮! 𝗦𝗼𝘆 𝕮𝖍𝖎𝖓𝖆 - 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳

╭━━I N F O-B O-T━━
┃Creador: ⏤͟͟͞͞𝐂𝐡𝐢𝐧𝐚 🔥
┃Tiempo activo: *${tiempo}*
┃Baileys: Multi device
┃Usuario: *${m.pushName}*
╰━━━━━━━━━━━━━
⏤͟͟͞͞𝐂𝕆𝐌𝔸𝐍𝔻𝐎𝕊 𝐏𝔸𝐑𝔸 𝐎𝕎𝐍𝔼𝐑

✶̸᳟ׄׄ🔥ׅׅׅ⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ #autoadmin
> ✧ La bot le dará admin al creador. 
✶̸᳟ׄׄ🔥ׅׅׅ⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ #update
> ✧ Actualiza la bot a la última versión. 
✶̸᳟ׄׄ🔥ׅׅׅ⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍  #restart
> ✧ Reinicia la Bot. 
✶̸᳟ׄׄ🔥ׅׅׅ⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ #bcprivado
> ✧ La bot dará un aviso en chats privados. 
✶̸᳟ׄׄ🔥ׅׅׅ⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ #bcgrupos
> ✧ La bot dará un aviso en Grupos.
✶̸᳟ׄׄ🔥ׅׅׅ⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ #kickall
> ✧ La creadora vaciara un grupo.
`

  // Enviar tarjeta con imagen y texto del menú
  await conn.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        title:`𝕮𝖍𝖎𝖓𝖆 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳`,
        body: '⏤͟͟͞͞𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐂𝐡𝐢𝐧𝐚 💋',
        thumbnailUrl: media,
        sourceUrl: 'https://github.com/ittschinitaaa', // pon tu enlace
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.command = ['menuowner',`helpowner`,`menu2`]
handler.owner = true
export default handler

// Función para mostrar horas/min/seg
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
