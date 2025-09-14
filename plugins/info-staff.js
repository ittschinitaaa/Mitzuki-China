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
        title: "Canal Oficial de Luna Bot",          // Título que se muestra
        body: "¡Colaboradores Oficiales!",           // Texto pequeño debajo del título
        thumbnailUrl: media,                          // Imagen de miniatura
        sourceUrl: 'https://wa.me/+1234567890',      // Enlace de tu canal/newsletter
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
