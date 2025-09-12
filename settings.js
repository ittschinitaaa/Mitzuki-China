import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["923256941884"]

global.botname = '🕸 SakuraBot-MD'
global.namebot = '🥗 Sakura Bot'
global.bot = 'SakuraBot'
global.packname = '🐼 𝗦𝗮𝗸𝘂𝗿𝗮𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🌿 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩-𝙈𝘿'
global.author = '🥗 DevAlexJs'
global.dev = '© Pᴏᴡᴇʀᴇᴅ Bʏ DᴇᴠAʟᴇxJs.'

global.banner = 'https://stellarwa.xyz/files/1757377941018.jpeg'
global.icon = 'https://stellarwa.xyz/files/1757378468505.jpeg'
global.currency = 'CryptoCoins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

global.my = {
  ch: '120363420979328566@newsletter',
  name: '⏤͟͞ू⃪𝐁𝕃𝐔𝔼 𝐋𝕆𝐂𝕂 𝐂𝕃𝐔𝔹 𑁯🩵ᰍ',

  ch2: '120363402839382986@newsletter', 
  name2: '⏤͟͞ू⃪ℂ𝐇𝕀𝐍𝔸 𝐎𝔽𝐈ℂ𝐈𝔸𝐋 .୧𝅄🔥 ִ  .',

  ch3: '120363203805910750@newsletter', 
  name3: '⚶ ⊹ Max Evolution𝄢 ⊹',
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
