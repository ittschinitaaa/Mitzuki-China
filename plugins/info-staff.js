import fs from 'fs'

let handler = async (m, { conn }) => {
  
  // Imagen que saldrá en la tarjeta
  let media = 'https://files.catbox.moe/if757e.jpg' // cambia por la tuya

  // Texto que aparecerá en la tarjeta
  let menu = `
Staff oficial de Luna Bot
`

  // Enviar mensaje simulando que viene de un canal
  await conn.sendMessage(m.chat, {
    text: menu,
    contextInfo: {
      forwardingScore: 999,  // indica que es reenviado
      isForwarded: true,     // marca como reenviado
      externalAdReply: {
        title: "⏤͟͞ू⃪𝐂𝕆𝐋𝔸𝐁𝕆𝐑𝔸𝐃𝕆𝐑𝔼𝐒 𑁯👑ᰍ",          // Título que se muestra
        body: "⏤͟͟͞͞𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐂𝐡𝐢𝐧𝐚 🔥",           // Texto pequeño debajo del título
        thumbnailUrl: media,                          // Imagen de miniatura
        sourceUrl: '120363402839382986@newsletter',      // Enlace de tu canal/newsletter
        mediaType: 2,                                 // Botón "Ver canal"
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.command = ['staff', 'colaboradores']
handler.owner = true
export default handler

/*Función para mostrar horas/min/seg
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}*/
