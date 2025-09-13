const handler = async (m, { conn, text }) => {
  const botOwner = global.owner.map(([number]) => number + '@s.whatsapp.net')
  if (!botOwner.includes(m.sender)) return m.reply('⚠️ Solo el dueño del bot puede usar este comando.')
  if (!text) return m.reply('🕸 Escribe el mensaje que quieres enviar a todos los chats privados.')

  let chats = Object.entries(conn.chats).filter(([id]) => !id.endsWith('@g.us'))
  for (let [id] of chats) {
    await conn.sendMessage(id, { text: `🌙 *Mensaje del Owner:*\n\n${text}` })
  }

  await m.reply(`🌙 Mensaje enviado a *${chats.length}* chats privados.`)
}

handler.help = ['bcprivado']
handler.tags = ['owner']
handler.command = ['bcprivado', 'broadcastprivado']
handler.owner = true

export default handler
