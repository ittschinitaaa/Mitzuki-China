const handler = async (m, { conn }) => {
  try {
    const link = await conn.groupInviteCode(m.chat)
    const groupMetadata = await conn.groupMetadata(m.chat)

    let mensaje = `🌙 *Enlace mágico del grupo*\n\n`
    mensaje += `🕸 *Nombre:* ${groupMetadata.subject}\n`
    mensaje += `👥 *Miembros:* ${groupMetadata.participants.length}\n`
    mensaje += `🔗 *Link:* https://chat.whatsapp.com/${link}\n\n`
    mensaje += `✨ Únete y forma parte de esta constelación ✨`

    await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })
  } catch (e) {
    await m.reply('🌾 Error al obtener el link.')
  }
}

handler.help = ['linkgrupo']
handler.tags = ['grupo']
handler.command = ['linkgrupo', 'grouplink']

handler.admin = true
handler.botAdmin = true

export default handler
