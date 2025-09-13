const handler = async (m, { conn }) => {
  try {
    // Solo el owner puede usarlo
    const botOwner = global.owner.map(([number]) => number + '@s.whatsapp.net')
    if (!botOwner.includes(m.sender)) {
      return m.reply('⚠️ Solo el dueño del bot puede usar este comando.')
    }

    // Verificar que el bot es admin
    const groupMetadata = await conn.groupMetadata(m.chat)
    const botParticipant = groupMetadata.participants.find(p => p.jid === conn.user.jid)
    if (!botParticipant.admin) return m.reply('⚠️ No puedo promover, necesito ser admin del grupo.')

    // Promover al owner automáticamente
    const ownerJid = m.sender
    const participant = groupMetadata.participants.find(p => p.jid === ownerJid)

    if (!participant) return m.reply('🕸 No estás en este grupo.')

    if (participant.admin) {
      return m.reply(`🕸 Ya eres administrador del grupo!`)
    }

    await conn.groupParticipantsUpdate(m.chat, [ownerJid], 'promote')
    await conn.sendMessage(
      m.chat,
      { text: `🌑 *@${ownerJid.split('@')[0]}* ha sido promovido a administrador automáticamente!`, mentions: [ownerJid] },
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
