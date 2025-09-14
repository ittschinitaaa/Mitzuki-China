import PhoneNumber from 'awesome-phonenumber'

const handler = async (m, { conn }) => {
  try {
    // Datos del creador
    const numero = "923256941884" // Tu número
    const nombre = "𝕮𝖍𝖎𝖓𝖆 🔥"
    const about = "CEO y creadora de Luna 🌙"
    const region = "Argentina 🇦🇷"
    const email = "itts.chinitaaa@soporte.com"

    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:${nombre}
FN:${nombre}
ORG:LunaBot
TITLE:Creadora
item1.TEL;waid=${numero}:${PhoneNumber(`+${numero}`).getNumber('international')}
item1.X-ABLabel:Celular
item2.EMAIL;type=INTERNET:${email}
item2.X-ABLabel:Email
item3.ADR:;;${region};;;;
item3.X-ABADR:Region
item3.X-ABLabel:Ubicación
NOTE:${about}
END:VCARD
    `.trim()

    await conn.sendMessage(m.chat, {
      contacts: {
        displayName: nombre,
        contacts: [{ vcard }]
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply("⚠️ Error al enviar el contacto del creador.")
  }
}

handler.help = ['creador']
handler.tags = ['info']
handler.command = ['creador','owner']

export default handler
