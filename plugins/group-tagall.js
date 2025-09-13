const handler = async (m, { conn }) => {
  try {
    const groupMetadata = await conn.groupMetadata(m.chat)
    const participantes = groupMetadata.participants.map(u => u.id)
    let mensaje = `🌙 *Invocación de todos los miembros del grupo* 🌙\n\n`
    mensaje += participantes.map((u, i) => `✨ ${i + 1}. @${u.split('@')[0]}`).join('\n')
    mensaje += `\n\n🕸 *Total:* ${participantes.length} miembros.`

    await conn.sendMessage(m.chat, { text: mensaje, mentions: participantes }, { quoted: m })
  } catch (e) {
    await m.reply('🌾 Error al mencionar a todos.')
  }
}

handler.help = ['tagall']
handler.tags = ['grupo']
handler.command = ['tagall', 'todos', 'invocar']
handler.admin = true
handler.botAdmin = true

export default handler
