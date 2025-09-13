const handler = async (m, { conn }) => {
  try {
    const botOwner = global.owner.map(([number]) => number + '@s.whatsapp.net') // dueño definido en config

    if (!botOwner.includes(m.sender)) {
      return m.reply('⚠️ Este poder está reservado únicamente para el *dueño del bot*.')
    }

    const groupMetadata = await conn.groupMetadata(m.chat)
    const participant = groupMetadata.participants.find(p => p.id === m.sender)

    if (participant && participant.admin) {
      return m.reply('🌙 Ya eres administrador del grupo.')
    }

    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
    await m.reply('🌙 El poder de la luna te ha concedido el admin.')
  } catch (e) {
    await m.reply('🌾 Error al ejecutar autoadmin.')
  }
}

handler.help = ['autoadmin']
handler.tags = ['grupo']
handler.command = ['autoadmin']
handler.group = true
handler.botAdmin = true

export default handler
