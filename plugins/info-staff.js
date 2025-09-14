
import fs from 'fs'
import os from 'os'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix }) => {
  
  // Imagen que saldrá en la tarjeta
  let media = 'https://files.catbox.moe/if757e.jpg' // cambia el link por tu foto
  
  /*Tiempo activo
  let uptime = process.uptime() * 1000
  let tiempo = clockString(uptime)*/
  
  // Texto del menú
  let menu = `
Staff oficial de Luna bot

`

  // Enviar tarjeta con imagen y texto del menú
  await conn.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      externalAdReply: {
        title:`⏤͟͞ू⃪ 𝐋𝕌𝐍𝔸 𝐁𝕆𝐓 𑁯★ᰍ`,
        body: '⏤͟͟͞͞𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐂𝐡𝐢𝐧𝐚 🔥',
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

/*Función para mostrar horas/min/seg
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}*/
