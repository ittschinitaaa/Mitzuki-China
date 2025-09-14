import fetch from 'node-fetch'

const handler = async (m, { conn }) => {
  try {
    // 📌 Texto del staff (puedes editarlo)
    let texto = `
🌟 *STAFF OFICIAL DE LUNA* 🌙

👑 *Mía (Chinita)*  
_Creadora & CEO_

🔥 *Alex*  
_Co-Owner_

💎 *Sofi*  
_Soporte & Moderadora_

⚡ *Más miembros próximamente...*
    `.trim()

    // 📌 URL de la imagen (puedes cambiarla)
    let foto = "https://files.catbox.moe/if757e.jpg"

    await conn.sendMessage(m.chat, {
      image: { url: foto },
      caption: texto,
      contextInfo: {
        externalAdReply: {
          title: "🌙 LunaBot",
          body: "Staff Oficial",
          thumbnailUrl: foto,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply("⚠️ Error al mostrar el staff.")
  }
}

handler.help = ['staff']
handler.tags = ['info']
handler.command = ['staff']

export default handler
