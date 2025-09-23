const handler = async (m, { conn }) => {
  try {
    const groupMetadata = await conn.groupMetadata(m.chat)
    const participantes = groupMetadata.participants.map(u => u.id)
    let mensaje = `﹒⌗﹒𝐌𝔼𝐍ℂ𝐈𝕆𝐍 𝔾𝐄ℕ𝐄ℝ𝐀𝕃 .ৎ˚₊‧ \n${participantes.length} 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐞𝐬 𝐦𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐝𝐨𝐬.\n\n`
    mensaje += participantes.map((u, i) => `- 🌿ᩧ　ׅ　ׄ　⁞⁞ ⏤͟͟͞͞@${u.split('@')[0]}`).join('\n')
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
