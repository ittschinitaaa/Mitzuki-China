import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["923256941884"]

global.botname = '𝕮𝖍𝖎𝖓𝖆 - 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.namebot = '𝕮𝖍𝖎𝖓𝖆 - 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.bot = '⏤͟͟͞͞𝐋ᥙᥒᥲ 𝐁ot ★'
global.packname = '𝕮𝖍𝖎𝖓𝖆 - 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.wm = '𝕮𝖍𝖎𝖓𝖆 - 𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.author = '𝕮𝖍𝖎𝖓𝖆 🔥💋'
global.dev = '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜɪɴᴀ 🔥'

global.banner = 'https://files.catbox.moe/bw463n.jpg'
global.icon = 'https://files.catbox.moe/57djkj.jpg'
global.currency = 'StarCoins'
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
  name2: 'ᥴһіᥒᥲ mі𝗍zᥙkі • ᥆𝖿іᥴіᥲᥣ ᥴһᥲᥒᥒᥱᥣ',

  ch3: '120363419164978167@newsletter', 
  name3: 'ᥴһіᥒᥲ mі𝗍zᥙkі • ᥆𝖿іᥴіᥲᥣ 𝗍ᥱs𝗍',
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
