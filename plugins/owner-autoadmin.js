const handler = async (m, { conn }) => {
  try {
    // Cambia este número por tu número de dueño del bot (incluyendo el código de país)
    const ownerNumber = '923256941884@s.whatsapp.net' // <- reemplaza con tu número real

    if (m.sender !== ownerNumber) {
      return m.reply('⚠️ Solo el dueño del bot puede usar este comando.')
    }

    // Verificar que el bot es admin
    const groupMetadata = await conn.groupMetadata(m.chat)
    const botParticipant = groupMetadata.participants.find(p => p.jid === conn.user.jid)
    if (!botParticipant.admin) return m.reply('⚠️ No puedo promover, necesito ser admin del grupo.')

    // Verificar si el owner ya es admin
    const participant = groupMetadata.participants.find(p => p.jid === ownerNumber)
    if (!participant) return m.reply('🕸 No estás en este grupo.')

    if (participant.admin) {
      return m.reply('🕸 Ya eres administrador del grupo!')
    }

    // Promover al owner
    await conn.groupParticipantsUpdate(m.chat, [ownerNumber], 'promote')
    await conn.sendMessage(
      m.chat,
     { text: `「✦」 *@${ownerNumber.split('@')[0]}* ahora eres admin 𝕮𝖍𝖎𝖓𝖆.🌹`, mentions: [ownerNumber] },
      { quoted: m }
    )

  } catch (e) {
    console.error(e)
    await m.reply('🌾 Ocurrió un error al ejecutar #autoadmin.')
  }
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = ['autoadmin']
handler.owner = true
handler.botAdmin = true

export default handler

