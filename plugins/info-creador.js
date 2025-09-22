import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn }) => {
  //m.react('👑');
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let pp = await conn.profilePictureUrl(who).catch(_ => 'https://qu.ax/PRgfc.jpg');
  let biografia = await conn.fetchStatus(`${suittag}@s.whatsapp.net`).catch(_ => 'Sin Biografía');
  let biografiaBot = await conn.fetchStatus(`${conn.user.jid.split('@')[0]}@s.whatsapp.net`).catch(_ => 'Sin Biografía');
  let bio = biografia.status?.toString() || 'Sin Biografía';
  let biobot = biografiaBot.status?.toString() || 'Sin Biografía';
  let name = await conn.getName(who);

  await sendContactArray(conn, m.chat, [
    [`${suittag}`, `𝕮𝖍𝖎𝖓𝖆 𝕻𝖗𝖔𝖕𝖎𝖊𝖙𝖆𝖗𝖎𝖆 ⏤͟͟͞͞🔥`, botname, `❀ No Hacer Spam`, `⊹˚• Venezuela •˚⊹`, bio],
    [`${conn.user.jid.split('@')[0]}`, `✦ Es Un Bot`, dev, `Sabra Dios 🫏`, channel, biobot]
  ], m);
}

handler.help = ["creador", "owner"];
handler.tags = ["info"];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;

async function sendContactArray(conn, jid, data, quoted, options) {
  if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data];
  let contacts = [];
  for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
    number = number.replace(/[^0-9]/g, '');
    let njid = number + '@s.whatsapp.net';
    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim();
    contacts.push({ vcard, displayName: name });
  }
  return await conn.sendMessage(jid, {
    contacts: {
      displayName: (contacts.length > 1 ? `Contactos` : contacts[0].displayName) || null,
      contacts,
    }
  }, {
    quoted,
    ...options
  });
}

/*import PhoneNumber from 'awesome-phonenumber'

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

export default handler*/
