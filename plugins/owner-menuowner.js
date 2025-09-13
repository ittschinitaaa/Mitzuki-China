const handler = async (m, { conn }) => {
  try {
    const botOwner = global.owner.map(([number]) => number + '@s.whatsapp.net')
    if (!botOwner.includes(m.sender)) {
      return m.reply('⚠️ Este menú es exclusivo del *dueño del bot*.')
    }

    // Mensaje del menú
    let menu = `
🌙 *=== MENÚ DEL OWNER ===* 🌙

🛠 *Administración del Bot*
> #autoadmin - Darte admin en cualquier grupo
> #leave - Hacer que Luna salga del grupo
> #bcgrupos - Broadcast a todos los grupos
> #bcprivado - Broadcast a todos los chats privados

🚫 *Gestión de Usuarios*
> #banuser <@user> - Banear usuario del bot
> #unbanuser <@user> - Desbanear usuario

⚡ *Otros*
> #setprimary <@bot> - Establecer bot primario del grupo
> #updatebot - Actualizar Luna (si está implementado)
> #stats - Ver estadísticas del bot

🌑 *Total de comandos exclusivos:* 9
✨ *Owner:* @${m.sender.split('@')[0]}
    `

    await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: m })

  } catch (e) {
    await m.reply('🌾 Error al abrir el menú del owner.')
  }
}

handler.help = ['menuowner']
handler.tags = ['owner']
handler.command = ['menuowner', 'ownermenu']
handler.owner = true

export default handler
