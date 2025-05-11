/* 
Creator: Handi
WhatsApp: wa.me/6287717274346
Base By: Lezz DcodeR
Upgraded By: FikaAi Dev Offc
Recode By: Your Name

[ ! ] Jangan Del Credit Ini, Hargai Pembuat Script.
*/
require("./settings")
const fs = require('fs')
const util = require('util')
const os = require('os')
const FileType = require('file-type')
const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')
const sharp = require('sharp')
const crypto = require('crypto')
const speed = require('performance-now')
const { runtime, formatp, tanggal, sleep, fetchJson } = require('./lib/func')
const { exec } = require("child_process")
module.exports = async (riza, m, store, FikaStore, conn, FikaStore) => {
try {
const from = m.key.remoteJid
const { 
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto, 
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
  } = require("@whiskeysockets/baileys")
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '.')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isPc = from.endsWith('@s.whatsapp.net')
const isCh = from.endsWith('@newsletter')
const isGroup = from.endsWith('@g.us')
const botNumber = await riza.decodeJid(riza.user.id)
const sender = m.key.fromMe ? (riza.user.id.split(':')[0]+'@s.whatsapp.net' || riza.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === "6287717"+"274346";
const groupMetadata = isGroup 
  ? await riza.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false

const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const isPremium = premium.includes(m.sender)

//Fake Quoted
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `ꪎ ${global.ownername}`
}}}
const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}
const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}
const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}
const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "FikaStore Bot"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `ꪎ ${global.ownername}`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `ꪎ ${global.ownername}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}



// Random Image
const imageUrls = [
        "https://i.ibb.co/m944LxT/image.jpg",
        "https://i.ibb.co/mHSbM3d/image.jpg",
        "https://files.catbox.moe/g4ae8u.jpg",
        "https://files.catbox.moe/9vp33w.jpg",
        "https://files.catbox.moe/6s1c3e.jpg"
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    
// Reply
const replyz = (teks) => {
    return riza.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 1000000,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                        }
                    }
                }
            }
        }
    }, {})
}

riza.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}

// Tampilan Di Console
const figlet = require('figlet');
if (m.message && m.text.startsWith('.')) {  // Hanya menampilkan pesan yang diawali dengan titik
    

    // Membuat tampilan header dengan font besar menggunakan figlet
    figlet('HANDI', (err, data) => {
        if (err) {
            console.log(chalk.white('Error with figlet...'));
            return;
        }
        console.log(
            chalk.white('\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'+data) + '\n' +  // Header dengan warna oranye cerah
            chalk.bgMagenta.white(`⫹ 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 ⫺ `) + chalk.magentaBright('┃  '+m.text) + '\n' +  // Pesan tebal dan warna cerah
            chalk.bgWhite.magenta(`⫹ 𝐒𝐄𝐍𝐃𝐄𝐑𝐑 ⫺ `) + chalk.magentaBright('┃  '+m.sender) + '\n' +  // Pengirim dengan warna cerah
            chalk.bgMagenta.white(`⫹ 𝐌𝐄𝐒𝐓𝐘𝐏𝐄 ⫺ `) + chalk.magentaBright('┃  '+m.mtype) + '\n' +  // Jenis pesan dengan merah
            chalk.bgWhite.magenta(`⫹ 𝐅𝐑𝐎𝐌 𝐈𝐍 ⫺ `) + (m.isGroup ? chalk.magentaBright('┃  GROUP CHAT') : chalk.magentaBright('┃  PRIVATE CHAT')) + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'  // Status chat dengan latar belakang
        );
    });
}

// Gak Usah Di Apa Apain Jika Tidak Mau Error
let ppuser
try {
ppuser = await riza.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/2lw5hm.jpg'
}
switch (command) {
    case 'about-me':
case 'tentang-fikastore': {
    const teks = `
*Fika Store | Digital Marketplace*

Fika Store adalah layanan digital yang menyediakan berbagai produk dan jasa seperti:
• Nomor Kosong Premium
• VPS & Hosting Panel Pterodactyl
• Jasa Setup Bot WhatsApp & Server Minecraft
• Edit & Tambah Fitur Script Bot
• Sistem Buy Otomatis ( tahap pengembangan )
_Selengkapnya Klik Button Di Bawah._

Kontak & Informasi:
• Website: https://web.privhandi.my.id
• WhatsApp: wa.me/6287717274346`;

    const fullMessage = `${teks}`;
        await riza.sendMessage(m.chat, {
        footer: `© Create By ${global.ownername}`,
        buttons: [
            {
                buttonId: `.allmenu`,
                buttonText: { displayText: 'ᴀʟʟᴍᴇɴᴜ' },
                type: 1
            },
            {
                buttonId: `.store`,
                buttonText: { displayText: 'sᴛᴏʀᴇ ᴍᴇɴᴜ' },
                type: 1
            },
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `${global.namabot}`,
        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileLength: 99999999,
        caption: fullMessage, // Mengirimkan pesan lengkap
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `${global.namabot}`,
                body: `Terverifikasi Oleh WhatsApp`,
                mediaType: 1,
                thumbnailUrl: global.imgthumb, 
                sourceUrl: global.linkSaluran,
                renderLargerThumbnail: true
            }
        }
    });
}
break;
case "tourl": {
    if (!/image/.test(mime)) return m.reply("⚠️ Silakan kirim atau reply foto!");
    const qmsg = (quoted.msg || quoted)
    let media = await riza.downloadAndSaveMediaMessage(qmsg);
    try {
        // Import library
        const { ImageUploadService } = require('node-upload-images');
        const service = new ImageUploadService('pixhost.to');
        // Upload gambar
        let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'fikastore.png');
        let url = directLink.toString();
        // Pesan berhasil
        let teksnya = `✅ *Sukses Convert Image to URL!*`;
        let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
            "messageContextInfo": { 
                "deviceListMetadata": {}, 
                "deviceListMetadataVersion": 2
            }, 
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: { mentionedJid: [m.sender] }, 
                body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }), 
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": JSON.stringify({
                                "display_text": "🔗 Preview Media",
                                "url": url,
                                "merchant_url": url
                            })
                        },
                        {
                            "name": "cta_copy",
                            "buttonParamsJson": JSON.stringify({
                                "display_text": "📋 Copy URL Gambar",
                                "copy_code": url
                            })
                        }
                    ]
                })
            })
        }}}, {userJid: m.sender, quoted: m}); 
        await riza.relayMessage(msgii.key.remoteJid, msgii.message, { 
            messageId: msgii.key.id 
        });
    } catch (error) {
        console.error("Error pada tourl:", error);
        m.reply("❌ Gagal mengunggah gambar. Coba lagi nanti!");
    }
    await fs.unlinkSync(media);
}
break;
case "ssweb": {
    try {
        // Ambil URL dari input pengguna
        let url = text.trim();
        if (!url) return m.reply("⚠️ Harap masukkan URL website yang ingin di-screenshot!\n*Contoh:* .ssweb https://example.com");
        // Pastikan URL memiliki format yang benar
        if (!/^https?:\/\//.test(url)) url = "https://" + url;
        // URL API untuk mengambil screenshot
        let screenshotUrl = `https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(url)}&theme=light&device=desktop`;
        // Kirim gambar ke pengguna
        await riza.sendMessage(m.chat, { 
            image: { url: screenshotUrl },
            caption: `📸 *Screenshot Website*\n🌐 *URL:* ${url}\n🖥️ *Mode:* Desktop\n☀️ *Tema:* Light`
        }, { quoted: m });
    } catch (error) {
        console.error("❌ Error saat mengambil screenshot:", error);
        m.reply("⚠️ Gagal mengambil screenshot. Coba lagi nanti.");
    }
}
break;
    case 'sticker': case 's': {
if (!quoted) return
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await riza.sendImageAsSticker(m?.chat, media, m, {
packname: 'FikaStore | Dev',
author: 'Offc'
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await riza.sendVideoAsSticker(m?.chat, media, m, {
packname: 'FikaStore | Dev',
author: 'Offc'
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break;
case 'emojimix': {

let emojisatu = text.split('+')[0]
let emojidua = text.split('+')[1]
if (!emojisatu && !emojidua) return m.reply(`*Unvalid Format!*
Example : ${prefix+command} 😉+😭`)
axios.get(`https://apirest.sazxofficial.web.id/api/imagecreator/emojimix?emoji1=${emojisatu}&emoji2=${emojidua}`)
.then(({data}) => {
riza.sendImageAsSticker(from, data.result, m, { packname: 'FikaStore | Dev', author: 'Offc' })
})
}
break
case 'removebg': {

 if (!/image/.test(mime)) return m.reply("⚠️ Silakan kirim atau reply foto!");
 const rqmsg = (quoted.msg || quoted)
 let media = await riza.donwloadAndSaveMediaMessage(rqmsg);
 try {
 // Mengonversi gambar ke URL menggunakan kode yang sudah ada
 const { ImageUploadService } = require('node-upload-images');
 const service = new ImageUploadService('pixhost.to');
 // Mengunggah gambar ke Pixhost
 let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'imgtmp.png');
 let urlGambar = directLink.toString();
 // Menggunakan API untuk menghapus background
 let removeBgUrl = `https://api.siputzx.my.id/api/iloveimg/removebg?image=${urlGambar}&scale=2`;
 // Mengirimkan gambar hasil background yang dihapus
 await riza.sendMessage(m.chat, {
 image: { url: removeBgUrl },
 caption: "✅ Background berhasil dihapus!",
 }, { quoted: m });
 } catch (error) {
 console.error("Error pada removebg:", error);
 m.reply("❌ Gagal menghapus background. Coba lagi nanti!");
 }
 await fs.unlinkSync(media); // Menghapus file sementara
}
break;
case 'remini' : {
    riza.enhancer = riza.enhancer || {}

    if (m.sender in riza.enhancer)
        throw "❗Masih ada proses yang belum selesai. Silakan tunggu."

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!mime) throw "❗Kirim/Reply foto.";
    if (!/image\/(jpe?g|png)/.test(mime)) throw `❗ Mimetype ${mime} tidak didukung.`

    riza.enhancer[m.sender] = true
    await riza.sendMessage(m.chat, { react: { text: "🛠️", key: m.key } })

    let img = await q.download?.()
    let enhancedImg = await Upscale(img)

    if (enhancedImg) {
        await riza.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
        riza.sendMessage(m.chat,{image: enhancedImg, caption: "*Success Enhanced ❇️*"},{quoted:m})
    } else {
        await riza.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
        m.reply("*Result:* Failed ");
    }

    delete riza.enhancer[m.sender]
}
break;
        case 'ig':
case 'instagram': {
    if (!text || !text.includes('instagram.com')) {
        return m.reply(`Contoh: ${prefix + command} https://www.instagram.com/reel/xxxx`);
    }

    await riza.sendMessage(m.chat, {
        text: '*Pilih Tipe Download:*',
        footer: global.namabot,
        buttons: [
            {
                buttonId: `.igmedia ${text}`,
                buttonText: { displayText: 'Get Foto/Video' },
                type: 1
            },
            {
                buttonId: `.igaudio ${text}`,
                buttonText: { displayText: 'Get Audio (Reel)' },
                type: 1
            }
        ],
        headerType: 1
    }, { quoted: m });
}
break;
        case 'igaudio': {
    if (!text) return m.reply('Masukkan URL Instagram yang valid!');

    try {
        const res = await fetch(`https://api.vreden.web.id/api/igdownload?url=${text}`);
        const json = await res.json();

        if (!json.status) return m.reply('Gagal mengambil audio dari Instagram.');

        await riza.sendMessage(m.chat, {
            audio: { url: json.result.link },
            mimetype: 'audio/mpeg',
            ptt: false
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mengambil audio.');
    }
}
break;
        case 'igmedia': {
    if (!text) return m.reply('Masukkan URL Instagram yang valid!');

    try {
        const res = await fetch(`https://api.vreden.web.id/api/igdownload?url=${text}`);
        const json = await res.json();

        if (!json.status) return m.reply('Gagal mengambil media Instagram.');

        for (let item of json.result) {
            if (item.type === 'image') {
                await riza.sendMessage(m.chat, {
                    image: { url: item.url },
                    caption: `Instagram Image`
                }, { quoted: m });
            } else if (item.type === 'video') {
                await riza.sendMessage(m.chat, {
                    video: { url: item.url },
                    caption: `Instagram Video`
                }, { quoted: m });
            }
        }
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mengunduh media.');
    }
}
break;
        
        case 'cari-lagu': {
    if (!text) {
        return m.reply(`Lagu apa yang ingin kamu cari?\n\n*Contoh*: .cari-lagu wide awake`);
    }

    try {
        const search = await yts(text);
        const videoUrl = search.all[0]?.url;
        if (!videoUrl) return m.reply("Lagu tidak ditemukan.");

        await FikaStore.sendMessage(m.chat, {
            text: '*Pilih Format Lagu:*',
            footer: 'Fika-Ai Music',
            buttons: [
                {
                    buttonId: `.playmp3 ${videoUrl}`,
                    buttonText: { displayText: 'Play MP3' },
                    type: 1
                },
                {
                    buttonId: `.playmp4 ${videoUrl}`,
                    buttonText: { displayText: 'Play Video' },
                    type: 1
                }
            ],
            headerType: 1
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan, coba lagi.");
    }
}
break;
        case 'playmp3': {
    try {
        const result = await ytdl(text);
        await FikaStore.sendMessage(m.chat, {
            audio: { url: result.data.url },
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply('Gagal memutar lagu.');
    }
}
break;

case 'playmp4': {
    try {
        const result = await ytdl(text);
        await FikaStore.sendMessage(m.chat, {
            video: { url: result.data.url },
            caption: `🎬 Now Playing`
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply('Gagal memutar video.');
    }
}
break;
        
        case 'yts-fika':
case 'ytsearch-fika': {
    if (!text) return m.reply(`Kirim perintah seperti ini:\n\n.yts lathi`);

    try {
        const search = await yts(text);
        let teks = `*Hasil Pencarian YouTube:*\n\n`;
        const buttons = [];

        for (let i = 0; i < Math.min(5, search.all.length); i++) {
            const vid = search.all[i];
            teks += `*${i + 1}. ${vid.title}*\nDurasi: ${vid.timestamp}\nUploader: ${vid.author.name}\n\n`;

            buttons.push({
                buttonId: `.playmp3 ${vid.url}`,
                buttonText: { displayText: `🎵 MP3 ${i + 1}` },
                type: 1
            });
            buttons.push({
                buttonId: `.playmp4 ${vid.url}`,
                buttonText: { displayText: `🎥 MP4 ${i + 1}` },
                type: 1
            });
        }

        await FikaStore.sendMessage(m.chat, {
            text: teks.trim(),
            footer: 'Pilih format yang kamu mau:',
            buttons: buttons,
            headerType: 1
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mencari di YouTube.");
    }
}
break;

        case 'tt': case 'tiktok': {
    if (!text || !text.includes('tiktok')) {
        return m.reply(`Example: ${prefix + command} https://vt.tiktok.com/ZS6qRB5Dm/`);
    }

    await riza.sendMessage(m.chat, {
        text: `*Pilih Format Download Kamu*`,
        footer: global.namabot,
        buttons: [
            {
                buttonId: `.ttmp3 ${text}`,
                buttonText: { displayText: 'Get Audio' },
                type: 1
            },
            {
                buttonId: `.ttmp4 ${text}`,
                buttonText: { displayText: 'Get Video' },
                type: 1
            }
        ],
        headerType: 1
    }, { quoted: m });
}
break;
    case 'ttmp4': {
    if (typeof text !== "string" || !text.trim()) {
        return m.reply(`Example: ${prefix + command} https://vt.tiktok.com/ZS6qRB5Dm/`);
    }
    await riza.sendMessage(m.chat, { react: { text: "🚀", key: m.key, }}) 
    await fetch(`https://api.diioffc.web.id/api/download/tiktok?url=${encodeURIComponent(text)}`)
        .then(res => res.json())
        .then(response => {
            if (!response.status) {
                return m.reply('Gagal mendapatkan data video TikTok.');
            }
            let { play, title } = response.result;
            riza.sendMessage(m.chat, {
                video: { url: play },
                mimetype: 'video/mp4',
                caption: `🎥 *Judul:* ${title}`
            }, { quoted: m });
        })
        .catch(err => {
            console.error(err);
            m.reply('Terjadi Kesalahan dalam mendapatkan video.');
        });
    await riza.sendMessage(m.chat, { react: { text: "☑️", key: m.key, }})
}
break;
case 'ttmp3': {
    if (typeof text !== "string" || !text.trim()) {
        return m.reply(`Example: ${prefix + command} https://vt.tiktok.com/ZS6qRB5Dm/`);
    }
    await riza.sendMessage(m.chat, { react: { text: "🚀", key: m.key, }}) 
    await fetch(`https://api.diioffc.web.id/api/download/tiktok?url=${encodeURIComponent(text)}`)
        .then(res => res.json())
        .then(response => {
            if (!response.status) {
                return m.reply('Gagal mendapatkan data audio TikTok.');
            }
            let { music_info } = response.result;
            riza.sendMessage(m.chat, {
                audio: { url: music_info.play },
                mimetype: "audio/mpeg",
                contextInfo: {
                    externalAdReply: {
                        title: music_info.title,
                        body: "Audio dari TikTok",
                        thumbnailUrl: music_info.cover,
                        mediaType: 1
                    }
                }
            }, { quoted: m });
        })
        .catch(err => {
            console.error(err);
            m.reply('Terjadi Kesalahan dalam mendapatkan audio.');
        });
    await riza.sendMessage(m.chat, { react: { text: "☑️", key: m.key, }})
}
break;
case "reactch": {
if (!isCreator) return m.reply('Khusus Owner')
if (!text) return m.reply(".reactch linkpesan 😂")
if (!args[0] || !args[1]) return m.reply("Wrong Format")
if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await riza.newsletterMetadata("invite", result)
await riza.newsletterReactMessage(res.id, serverId, args[1])
m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;
case "jpm": {
if (!isCreator) return m.reply('Khusus Owner!')
if (!q) return m.reply("teksnya")
let allgrup = await riza.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {

try {
await riza.sendMessage(i, {text: `${teks}`}, {quoted: qloc})
count += 1
} catch {}
await isleep(16000)
}
await riza.sendMessage(jid, {text: `*Jpm Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break;
case 'jpmtag': {
 try {
 if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
 let args = text.split('|');
 if (args.length < 2) return m.reply('Format yang benar: .jpmtag <pesan>|<jeda>');
 let pesan = args[0].trim();
 let delay = parseInt(args[1].trim());
 if (!pesan) return m.reply('Masukkan pesan yang ingin dikirim ke semua grup.');
 if (isNaN(delay) || delay <= 0) return m.reply('Jeda harus berupa angka positif dalam milisecond, misalnya 1000 (1 detik).');
 // Ambil daftar semua grup yang bot ikuti
 let groups = await riza.groupFetchAllParticipating();
 let groupList = Object.keys(groups);
 // Cek apakah bot tergabung dalam grup
 if (groupList.length === 0) return m.reply('⚠️ Bot tidak tergabung dalam grup mana pun!');
 m.reply(`📢 Memulai JPm Tag ke ${groupList.length} grup dengan delay ${delay / 1000} detik per grup...`);
 let total = 0;
 for (let group of groupList) {
 let groupMetadata = groups[group];
 let members = groupMetadata.participants.map(p => p.id);
 let teks = `${pesan}`;
 // Kirim pesan dengan mention semua anggota grup
 await riza.sendMessage(group, {
 text: teks,
 mentions: members,
 
 },{quoted: qloc2});
 total += 1;
 // Menunggu sesuai jeda antar grup
 await new Promise(resolve => setTimeout(resolve, delay));
 }
 m.reply(`✅ Berhasil mengirim pesan ke ${total} grup.`);
 } catch (error) {
 console.error('Error saat jpmtag:', error);
 m.reply('❌ Gagal mengirim pesan ke semua grup.');
 }
}
break;
case 'pushkontak': {
    try {
        if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
        let [pesan, groupId, jeda] = text.split('|');
        if (!pesan || !groupId || !jeda) return m.reply('Format salah! Gunakan: *.pushkontak teks|idgrup|jeda*\n\nContoh: *.pushkontak Halo|120xxxxx@g.us|6000*');
        let groupMetadata = await riza.groupMetadata(groupId);
        if (!groupMetadata) return m.reply('Grup tidak ditemukan atau bot bukan admin di grup tersebut.');
        let members = groupMetadata.participants.map(p => p.id);
        if (members.length === 0) return m.reply('Tidak ada anggota di grup ini.');
        let delayTime = parseInt(jeda); // Konversi ke angka
        m.reply(`📢 Mulai mengirim pesan ke ${members.length} anggota di grup *${groupMetadata.subject}* dengan delay ${delayTime}ms per kontak.`);
        for (let i = 0; i < members.length; i++) {
            await riza.sendMessage(members[i], { text: pesan },{quoted:qloc});
            console.log(`📩 Pesan terkirim ke ${members[i]} - Menunggu ${delayTime}ms sebelum kontak berikutnya.`);
            await new Promise(resolve => setTimeout(resolve, delayTime)); // **Menunggu sesuai jeda**
        }
        m.reply(`✅ Berhasil mengirim pesan ke semua anggota di grup *${groupMetadata.subject}*.`);
    } catch (error) {
        console.error('Error saat push kontak:', error);
        m.reply('❌ Gagal mengirim pesan ke semua kontak.');
    }
}
break;
case 'kalender': {
  const currentDate = new Date();
  // Waktu untuk zona Indonesia (WIB, WITA, WIT)
  const wibTime = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Jakarta'
  }).format(currentDate);
  
  const witaTime = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Makassar'
  }).format(currentDate);
  
  const witTime = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Jayapura'
  }).format(currentDate);
  // Waktu untuk server global (UTC)
  const serverTime = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  }).format(currentDate);
  const message = `
📅 *Kalender*:
🌍 *WIB (Jakarta)*: ${wibTime}
🌍 *WITA (Makassar)*: ${witaTime}
🌍 *WIT (Jayapura)*: ${witTime}
🌍 *Server Global (UTC)*: ${serverTime}
  `;
  
  m.reply(message);
}
break;
        case 'bratvid': {
    if (!text) return m.reply(`Contoh: ${prefix + command} hai`);
    if (text.length > 100) return m.reply(`Karakter terbatas, max 100!`);
    const path = require('path');
    const { execSync } = require('child_process');
    const words = text.split(' ');
    const tempDir = path.join(process.cwd(), 'session');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
    const framePaths = [];
    try {
        for (let i = 0; i < words.length; i++) {
            const currentText = words.slice(0, i + 1).join(' ');
            const res = await axios.get(
                `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
                { responseType: 'arraybuffer' }
            ).catch((e) => e.response);
            if (!res || !res.data) return m.reply('Gagal mengambil frame dari API');
            const framePath = path.join(tempDir, `frame${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
        }
        if (framePaths.length === 0) return m.reply('Tidak ada frame yang dihasilkan.');
        const fileListPath = path.join(tempDir, 'filelist.txt');
        let fileListContent = framePaths.map(frame => `file '${frame}'\nduration 0.7`).join('\n');
        fileListContent += `\nfile '${framePaths[framePaths.length - 1]}'\nduration 2`;
        fs.writeFileSync(fileListPath, fileListContent);
        const outputVideoPath = path.join(tempDir, 'output.mp4');
        const outputStickerPath = path.join(tempDir, 'output.webp');
        execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30,format=yuv420p' -c:v libx264 -preset ultrafast ${outputVideoPath}`,
            { stdio: 'ignore' }
        );
        if (!fs.existsSync(outputVideoPath)) return m.reply('Terjadi kesalahan dalam pembuatan video.');
        execSync(
            `ffmpeg -y -i ${outputVideoPath} -vf 'scale=512:512:flags=lanczos' -c:v libwebp -lossless 1 -preset default -loop 0 -an ${outputStickerPath}`,
            { stdio: 'ignore' }
        );
        if (!fs.existsSync(outputStickerPath)) return m.reply('Terjadi kesalahan dalam pembuatan sticker.');
        await riza.sendMessage(m.chat, { sticker: fs.readFileSync(outputStickerPath) }, { quoted: m });
        framePaths.forEach(frame => fs.existsSync(frame) && fs.unlinkSync(frame));
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
        if (fs.existsSync(outputStickerPath)) fs.unlinkSync(outputStickerPath);
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan dalam proses.');
    }
}
break;
case 'encrypt': {
 
 if (!text) return m.reply(`Contoh: ${prefix + command} const eriza = require('eriza-api')`)
 const crypto = require('crypto')
 const fs = require('fs').promises
 const path = require('path')
 try {
 let meg = await obfus(q) // Menggunakan fungsi obfuscator
 let encryptedCode = meg.result
 let namafile = `Encrypted_${crypto.randomBytes(6).toString('hex')}.js`
 let filePath = path.join(__dirname, namafile)
 // Simpan kode yang telah dienkripsi ke dalam file
 await fs.writeFile(filePath, encryptedCode)
 // Kirim file JS hasil enkripsi
 await riza.sendMessage(m.chat, {
 document: await fs.readFile(filePath),
 fileName: namafile,
 mimetype: 'application/javascript'
 }, { quoted: m })
 // Hapus file setelah dikirim
 await fs.unlink(filePath)
 } catch (err) {
 console.error(err)
 await m.reply('Terjadi kesalahan saat mengenkripsi kode.')
 }
}
break;
case "sendngl": {
 try {
 // Cek apakah pengguna sudah memasukkan format yang benar
 if (!text.includes("|")) return m.reply("⚠️ Format salah! Gunakan format:\n\n.sendngl <link>|<pesan>\n\n*Contoh:*\n.sendngl https://ngl.link/xxxx|Halo, ini pesan anonim!");
 // Pisahkan input menjadi link dan pesan
 let [link, pesan] = text.split("|").map(v => v.trim());
 // Pastikan link adalah NGL yang valid
 if (!/^https:\/\/ngl\.link\//.test(link)) return m.reply("⚠️ Link NGL tidak valid! Pastikan menggunakan link dari *ngl.link*");
 // URL API untuk mengirim pesan ke NGL
 let apiURL = `https://api.siputzx.my.id/api/tools/ngl?link=${encodeURIComponent(link)}&text=${encodeURIComponent(pesan)}`;
 // Fetch API tanpa perlu mengambil respons
 await fetch(apiURL);
 // Beri respons sukses kepada pengguna
 m.reply(`✅ *Pesan berhasil dikirim!*\n\n📩 *Ke:* ${link}\n💬 *Pesan:* ${pesan}`);
 } catch (error) {
 console.error("❌ Error saat mengirim pesan NGL:", error);
 m.reply("⚠️ Gagal mengirim pesan NGL. Coba lagi nanti.");
 }
}
break;
case 'tiktokplay': {
	
 if (typeof text !== "string" || !text.trim()) {
 return m.reply(`Example: ${prefix + command} Mobile Legends`);
 }
 m.reply('_*Sedang mencari video...*_');
 await fetch(`https://api.diioffc.web.id/api/search/tiktok?query=${encodeURIComponent(text)}`)
 .then(res => res.json())
 .then(response => {
 if (!response.status || response.result.length === 0) {
 return m.reply('Tidak ditemukan hasil untuk pencarian ini.');
 }
 let vid = response.result[Math.floor(Math.random() * response.result.length)]; // Pilih video secara acak
 let caption = `
🎬 *${vid.title}*
👤 *Creator*: ${vid.author.name} (@${vid.author.username})
🎥 *Durasi*: ${vid.duration} detik
👍 *Like*: ${vid.stats.like} | 💬 *Komentar*: ${vid.stats.comment}
🔄 *Share*: ${vid.stats.share} | ⬇️ *Download*: ${vid.stats.download}`;
 riza.sendMessage(m.chat, {
 video: { url: vid.media.no_watermark },
 caption,
 footer: "Pilih format download",
 buttons: [
 
 {
 buttonId: `.tiktokplay ${text}`,
 buttonText: { displayText: '⏭️ Next Video' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true
 }, { quoted: m });
 })
 .catch(err => {
 console.error(err);
 m.reply('Terjadi kesalahan dalam pencarian video.');
 });
}
break
case 'txt2qr':{

if (!text) return m.reply("text nya mana?")
let urlQR = `https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`
riza.sendMessage(m.chat, {image: {url: urlQR}, caption: '🗳️ Success Convert To QR'}, {quoted: qlive});
}
break
case "hidetag": case "h": {
if (!isGroup) return m.reply(`Khusus Grup`)
if (!isCreator && !isAdmins) return m.reply(`Khusus Admin`)
if (!m.quoted && !text) return m.reply("mohon sertakan pesan/reply pesan")
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
riza.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: qtext})
}
break
case 'asupan':{

if (!isPc) return m.reply("💭 *Khusus* `Private Chat`")
let urlAsupan = 'https://api.agatz.xyz/api/asupan'
let res = await fetch(urlAsupan)
let response = await res.json()
riza.sendMessage(m.chat, {video: {url: response.data}, caption: '✨ *Asupan Hari Ini*'},{quoted: qdoc})
}
break
case "infogempa": {
 try {
 let response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
 if (!response.ok) throw new Error("Gagal mengambil data gempa.");
 let data = await response.json();
 let gempa = data.Infogempa.gempa;
 let pesan = `🌍 *Informasi Gempa Terkini* 🌍\n\n` +
 `📅 *Tanggal:* ${gempa.Tanggal}\n` +
 `🕒 *Jam:* ${gempa.Jam}\n` +
 `📍 *Lokasi:* ${gempa.Wilayah}\n` +
 `📏 *Magnitudo:* ${gempa.Magnitude}\n` +
 `📊 *Kedalaman:* ${gempa.Kedalaman}\n` +
 `📌 *Koordinat:* ${gempa.Lintang}, ${gempa.Bujur}\n` +
 `⚠️ *Potensi:* ${gempa.Potensi}\n\n` +
 `🖼 *Gambar Peta:*`;
 let imageUrl = "https://data.bmkg.go.id/DataMKG/TEWS/" + gempa.Shakemap;
 await riza.sendMessage(m.chat, { image: { url: imageUrl }, caption: pesan }, { quoted: m });
 } catch (error) {
 console.error("❌ Error saat mengambil data gempa:", error);
 m.reply("⚠️ Gagal mengambil informasi gempa. Coba lagi nanti.");
 }
}
break;
case 'cuaca': {
				
				if (!text) return m.reply(`🌍 *Lokasinya mana, Kak?*\n\nContoh:\n${prefix}${command} Jakarta`);
				try {
					
					let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`);
					let weatherInfo = `🌦️ *Informasi Cuaca di ${data.name}, ${data.sys.country}*\n`;
					weatherInfo += `🌡️ *Suhu:* ${data.main.temp}°C (Terasa seperti ${data.main.feels_like}°C)\n`;
					weatherInfo += `🌬️ *Kecepatan Angin:* ${data.wind.speed} m/s\n`;
					weatherInfo += `💧 *Kelembapan:* ${data.main.humidity}%\n`;
					weatherInfo += `🔄 *Tekanan Udara:* ${data.main.pressure} hPa\n`;
					weatherInfo += `📍 *Koordinat:* ${data.coord.lat}, ${data.coord.lon}\n`;
					weatherInfo += `📝 *Deskripsi:* ${data.weather[0].description}\n`;
		
					await riza.sendMessage(m.chat, { text: weatherInfo }, { quoted: m });
				} catch (err) {
					console.error(err);
					if (err.response && err.response.status === 404) {
m.reply(`❌ *Lokasi tidak ditemukan!* Coba cek lagi nama lokasinya ya, Kak.`);
					} else {
m.reply(`❌ *Terjadi kesalahan saat mengambil data cuaca!* 🏞️\n${err.message || err}`);
}
}
}
break;
case 'openai':{
if (!text) return m.reply('Masukkan Pertanyaan Ai')
let theAi = `https://vapis.my.id/api/openai?q=${encodeURIComponent(text)}`
let fAi = await fetch(theAi)
let anu = await fAi.json()
riza.sendMessage(m.chat, {text: anu.result}, {quoted: qloc});
}
break
case 'cekkhodam' : {
 if (!text) return m.reply('Nama nya mana yang mau di cek khodam nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}
 m.reply(`
╭━━━━°「 *Khodam ${text}* 」°
┃
┊• Nama : ${text}
┊• Khodam : ${pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang'])}
┊• Mendampingi dari : ${pickRandom(['1 tahun lalu','2 tahun lalu','3 tahun lalu','4 tahun lalu','dari lahir'])}
┃• Expired : ${pickRandom(['2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'])}
╰═┅═━––––––๑`)
}
break
case "kudetagc": {
if (!isGroup) return m.reply('Khusus Group Dengan Bot sebagai Adminnya')
if (!isBotAdmins) return m.reply('upss, bot belum jadi admin')
if (!isCreator) return m.reply('Khusus Owner')
const kusleep = async (ms) => {
 return new Promise(resolve => setTimeout(resolve, ms));
}
let groupMetadata = await riza.groupMetadata(m.chat)
let memberFilter = groupMetadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup : *Active*")
for (let i of memberFilter) {
await riza.groupParticipantsUpdate(m.chat, [i], 'remove')
await kusleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break
case 'tojson': {
 if (!text) return m.reply('❌ Masukkan teks yang ingin dikonversi ke JSON.');

 // Memisahkan baris input
 let inputLines = text.split('\n');

 // Mengubah ke format JSON yang valid
 let jsonResult = JSON.stringify(inputLines.join('\n'));

 m.reply(jsonResult);
}
break;
        case "joinch": {
if (!isCreator) return m.reply('Khusus Owner')
if (!text && !m.quoted) return m.reply("sertakan linkchnya")
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await riza.newsletterMetadata("invite", result)
await riza.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break
case 'delcase': {
 if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
 if (!text) return m.reply('*Masukkan nama case yang akan dihapus!*');
 let filecase = './case.js';
 
 async function delCase(filecase, caseNameToRemove) {
 fs.readFile(filecase, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan:', err);
 return m.reply('❌ Gagal membaca file case.js!');
 }
 // Regex untuk menangkap case dari 'case' hingga 'break;?' dan menangani beberapa case dalam satu blok
 const regex = new RegExp(`case\\s+['"]${caseNameToRemove}['"]\\s*:.*?\\{([\\s\\S]*?)\\}\\s*break;?`, 'g');
 // Mengecek apakah case ditemukan
 const match = data.match(regex);
 if (!match) return m.reply(`❌ Case '${caseNameToRemove}' tidak ditemukan!`);
 // Menyimpan isi case yang akan dihapus
 let deletedCase = match[0];
 // Menghapus case dari file
 const modifiedData = data.replace(regex, '').replace(/\n{2,}/g, '\n').trim();
 fs.writeFile(filecase, modifiedData, 'utf8', (err) => {
 if (err) {
 console.error('Terjadi kesalahan saat menulis file:', err);
 return m.reply('❌ Gagal menghapus case!');
 }
 console.log(`Case '${caseNameToRemove}' berhasil dihapus.`);
 m.reply(`✅ Case '${caseNameToRemove}' berhasil dihapus!\n\n🔍 *Isi Case Sebelum Dihapus:*\n\`\`\`${deletedCase}\`\`\``);
 });
 });
 }
 delCase(filecase, q);
}
break;
case 'getcase': {
 
 try {
 if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
 if (!text) return m.reply('❌ Masukkan nama case!\n\nContoh: .getcase menu');
 const caseFilePath = './case.js'; // Sesuaikan dengan lokasi file case.js
 // Baca isi file case.js dan pecah menjadi array berdasarkan baris
 let caseFileContent = fs.readFileSync(caseFilePath, 'utf8');
 let caseLines = caseFileContent.split('\n');
 // Regex untuk mencari case "nama" atau case 'nama'
 let caseRegex = new RegExp(`^\\s*case\\s+['"]${text}['"]\\s*:`);
 let startLine = null;
 let endLine = null;
 let foundCase = null;
 // Loop untuk mencari case yang diminta
 for (let i = 0; i < caseLines.length; i++) {
 if (caseRegex.test(caseLines[i])) {
 startLine = i;
 foundCase = [];
 // Menyimpan isi case hingga menemukan `break;`
 for (let j = i; j < caseLines.length; j++) {
 foundCase.push(caseLines[j]);
 if (/^\s*break\s*/.test(caseLines[j])) {
 endLine = j;
 break;
 }
 }
 break;
 }
 }
 if (!foundCase) return m.reply(`❌ Case *${text}* tidak ditemukan!`);
 // Gabungkan isi case menjadi teks
 let caseContent = foundCase.join('\n');
 // Pesan konfirmasi
 let teksnya = `💌 \`Case ditemukan!\`\n\n*Nama Case :* ${text}\n*Baris :* ${startLine + 1} - ${endLine + 1}\n\n> © ErizaOffc`;
 // Kirim dengan tombol CTA Copy
 let msgii = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: { 
 message: { 
 "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
 "display_text": "Salin Isi Case",
 "copy_code": caseContent
 })
 }
 ]
 })
 })
 } 
 }
 }, { userJid: m.sender, quoted: m });
 await riza.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });
 } catch (error) {
 console.error('Error saat mencari case:', error);
 m.reply('❌ Gagal mencari case.');
 }
}
break
case 'tagsw': {
 if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
 let [id, ...teksArray] = text.split(' ');
 let teks = teksArray.join(' ');
 if (!id || !teks) {
 return m.reply(`Example: ${prefix + command} <group_id> Hello`);
 }
 let mediaContent = null;
 let msgOptions = {};
 const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
 const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
 const jids = [m.sender, id];
 if (quoted) {
 const mime = quoted.mtype || quoted.mediaType;
 if (mime?.includes('image')) {
 mediaContent = await m.quoted.download();
 msgOptions = {
 image: mediaContent,
 caption: teks || m.quoted.text || '',
 };
 } else if (mime?.includes('video')) {
 mediaContent = await m.quoted.download();
 msgOptions = {
 video: mediaContent,
 caption: teks || m.quoted.text || '',
 };
 } else {
 msgOptions = {
 text: teks || m.quoted.text || '',
 };
 }
 } else {
 msgOptions = {
 text: teks,
 };
 }
 await riza.sendMessage("status@broadcast", msgOptions, {
 backgroundColor: pickedColor,
 textArgb: 0xffffffff,
 font: 0,
 statusJidList: await (await riza.groupMetadata(id)).participants.map((a) => a.id),
 additionalNodes: [
 {
 tag: "meta",
 attrs: {},
 content: [
 {
 tag: "mentioned_users",
 attrs: {},
 content: jids.map((jid) => ({
 tag: "to",
 attrs: { jid: id },
 content: undefined,
 })),
 },
 ],
 },
 ],
 });
 m.reply("*[ ✅ ]* Sukses Membuat Status\n_Please Check Bot Status_");
}
break
case "struk": {
if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
 if (!text) return m.reply("❌ *Format salah!*\nGunakan: .struk toko|nama_barang|harga|nomor_tujuan|payment|status");
 
 let [toko, namaBarang, harga, nomorTujuan, payment, status] = text.split("|");
 if (!toko || !namaBarang || !harga || !nomorTujuan || !payment || !status) return m.reply("⚠️ *Format tidak lengkap!*");
 const { createCanvas } = require('canvas');
 
 // Generate ID Transaksi (7 angka random)
 let idTransaksi = `TRX${Math.floor(1000000 + Math.random() * 9000000)}`;
 let tanggalWaktu = new Date().toLocaleString("id-ID");
 // Ukuran Struk
 const canvasWidth = 400, canvasHeight = 400;
 const canvas = createCanvas(canvasWidth, canvasHeight);
 const ctx = canvas.getContext('2d');
 // Gambar background solid putih
 ctx.fillStyle = "#FFFFFF"; // Background putih
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 // Warna teks
 ctx.fillStyle = "#000";
 // Judul
 ctx.font = "bold 22px 'Arial', sans-serif"; // Menggunakan font Arial yang lebih menarik
 ctx.textAlign = "center";
 ctx.fillText(toko.toUpperCase(), canvasWidth / 2, 40);
 // Tanggal & Waktu
 ctx.font = "16px 'Arial', sans-serif"; // Menggunakan font Arial yang lebih menarik
 ctx.fillText(tanggalWaktu, canvasWidth / 2, 70);
 // Detail Transaksi
 ctx.textAlign = "left";
 ctx.font = "14px 'Arial', sans-serif"; // Menggunakan font Arial untuk teks detail
 ctx.fillText(`ID Transaksi: ${idTransaksi}`, 20, 110);
 ctx.fillText(`Barang: ${namaBarang}`, 20, 140);
 ctx.fillText(`Harga: Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}`, 20, 170);
 ctx.fillText(`Nomor Tujuan: ${nomorTujuan}`, 20, 200);
 ctx.fillText(`Payment: ${payment}`, 20, 230);
 ctx.fillText(`Status: ${status}`, 20, 260);
 // Footer
 ctx.font = "bold 16px 'Arial', sans-serif";
 ctx.textAlign = "center";
 ctx.fillText("TERIMA KASIH TELAH BERBELANJA DI", canvasWidth / 2, 320);
 ctx.fillText(toko.toUpperCase(), canvasWidth / 2, 340);
 // Simpan gambar
 const buffer = canvas.toBuffer("image/png");
 const filePath = "./session/struk.png";
 fs.writeFileSync(filePath, buffer);
 // Caption gambar menggunakan data struk
 const caption = `💬 *Struk Transaksi*\n- ID Transaksi: ${idTransaksi}\n- Barang: ${namaBarang}\n- Harga: Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}\n- Nomor Tujuan: ${nomorTujuan}\n- Payment: ${payment}\n- Status: ${status}\n- Tanggal: ${tanggalWaktu}\n\n_© ${toko}_`;
 // Kirim struk ke WhatsApp
 await riza.sendMessage(m.chat, { image: { url: filePath }, caption: caption }, { quoted: m });
 // Hapus file setelah dikirim
 fs.unlinkSync(filePath);
} 
break;
        case 'eval': {
 if (!isCreator) return
 const crypto = require('crypto')
 const fs = require('fs').promises
 const path = require('path')
 try {
 let quotedd = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
 let namafile = `Evaled_${crypto.randomBytes(8).toString('hex')}.json`
 let filePath = path.join(__dirname, namafile)
 // Simpan file JSON
 await fs.writeFile(filePath, quotedd)
 // Kirim hasil JSON sebagai balasan
 await m.reply(quotedd)
 // Kirim file JSON
 await riza.sendMessage(m.chat, {
 document: await fs.readFile(filePath),
 fileName: namafile,
 mimetype: 'application/json'
 }, { quoted: m })
 // Hapus file setelah dikirim
 await fs.unlink(filePath)
 } catch (err) {
 console.error(err)
 await m.reply('Terjadi kesalahan saat memproses eval.')
 }
}
break
case 'promote': {

if (!m.isGroup) return m.reply('Khusus Dalam Grup!')
if (!isAdmins && !isCreator) return m.reply('Khusus Admin Grup!')
if (!isBotAdmins) return m.reply('Bot Harus Menjadi Admin!')
 let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 await riza.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
m.reply('Sukses Promote ☑️')
}
break
case 'demote': {

if (!m.isGroup) return m.reply('Khusus Dalam Grup!')
if (!isAdmins && !isCreator) return m.reply('Khusus Admin Grup!')
if (!isBotAdmins) return m.reply('Bot Harus Menjadi Admin!')
 let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 await riza.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote');
m.reply('Sukses Demote 💡');
}
break
case "jpmslide": {
if (!isCreator) return m.reply('Khusus Owner!')
let jpmssleep = async (ms) => {
 return new Promise(resolve => setTimeout(resolve, ms));
}
let allgrup = await riza.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {

try {
await slideButton(i)
count += 1
} catch {}
await jpmssleep(16000)
}
await riza.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
case 'cekidgc':{
if (!isGroup) return
m.reply(m.chat)
}
break;
case 'cekidch': {
 if (!text) return m.reply("sertakan link saluran")
 if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
 
 let result = text.split('https://whatsapp.com/channel/')[1]
 let res = await riza.newsletterMetadata("invite", result)
 
 let teks = `- *ID : ${res.id}*
- *Nama :* ${res.name}
- *Total Pengikut :* ${res.subscribers}
- *Status :* ${res.state}
- *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
 let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: { 
 "messageContextInfo": { 
 "deviceListMetadata": {}, 
 "deviceListMetadataVersion": 2 
 },
 interactiveMessage: {
 body: {
 text: teks 
 }, 
 footer: {
 text: `© ${global.ownername}`
 },
 nativeFlowMessage: {
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
 }
 ]
 }
 }
 }
 }
 }, { quoted: qtext });
 await riza.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;
case "shortlink":{
if (!text) return m.reply("https://example.com")
if (!text.startsWith('http')) return m.reply('Format salah!\nUrl harus berawalan http:// atau https://')
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break
case 'cadmin': {
 if (!isCreator) return m.reply('Fitur ini hanya untuk Owner.');
 if (!text) return m.reply("Format: *.cadmin username* atau *.cadmin username|nomor*");
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
let { domain, ptla, ptlc } = settings
 let input = text.split("|");
 let username = input[0].toLowerCase();
 let targetNumber = input[1] ? input[1].replace(/\D/g, "") : null; // Hanya angka
 if (!username) return m.reply("Username tidak boleh kosong.");
 
 let email = `${username}@gmail.com`;
 let name = username.charAt(0).toUpperCase() + username.slice(1);
 let password = username + crypto.randomBytes(2).toString('hex');
 try {
 let response = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${ptla}`
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: name,
 last_name: "Admin",
 root_admin: true,
 language: "en",
 password: password.toString()
 })
 });
 let data = await response.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
 let user = data.attributes;
 let teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${domain}

*Rules Admin Panel ⚠️*
- Jangan Maling SC, Ketahuan Maling? Auto Delete Akun & No Reff!!
- Simpan Baik² Data Akun Ini.
- Buat Panel Seperlunya Aja, Jangan Asal Buat!
- Garansi Aktif 10 Hari.
- Claim Garansi Wajib Membawa Bukti SS Chat Saat Pembelian.
`;
 // Menentukan penerima pesan
 let recipient = targetNumber ? `${targetNumber}@s.whatsapp.net` : m.sender;
 await riza.sendMessage(recipient, { text: teks }, { quoted: m });
 m.reply(`✅ Data admin telah dikirim ke ${targetNumber ? "nomor yang dituju" : "private chat Anda"}.`);
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat membuat admin panel.");
 }
}
break
case "listserver": {
 if (!isCreator) return m.reply('Fitur ini hanya untuk User Premium.');
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { domain, ptla, ptlc } = settings
 
 
 
 try {
 let f = await fetch(`${domain}/api/application/servers`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${ptla}`
 }
 });
 let res = await f.json();
 let servers = res.data;
 if (!servers || servers.length === 0) return m.reply("Tidak Ada Server Bot.");
 let page = Number(text) || 1; // Halaman dari input user
 let pageSize = 10; // 10 server per halaman
 let totalPages = Math.ceil(servers.length / pageSize);
 if (page < 1 || page > totalPages) return m.reply(`Halaman tidak valid! (1 - ${totalPages})`);
 let start = (page - 1) * pageSize;
 let end = start + pageSize;
 let pageServers = servers.slice(start, end);
 let messageText = `*乂 List Server Panel Pterodactyl (Halaman ${page}/${totalPages})*

`;
 for (let server of pageServers) {
 let s = server.attributes;
 let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split`-`[0]}/resources`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${ptlc}`
 }
 });
 let data = await f3.json();
 let status = data.attributes ? data.attributes.current_state : s.status;
 messageText += `*ID :* ${s.id}
- *Nama :* ${s.name}
- *Status :* ${status}
- *Ram :* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory + "MB"}
- *CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}
- *Disk :* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk + "MB"}
- *Created :* ${s.created_at.split("T")[0]}

`;
 }
 // Quick Reply Buttons (Hanya tombol navigasi halaman)
 let buttons = [];
 if (page > 1) {
 buttons.push({
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"⬅️ Halaman ${page - 1}","id":".listserver ${page - 1}"}`
 });
 }
 if (page < totalPages) {
 buttons.push({
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"➡️ Halaman ${page + 1}","id":".listserver ${page + 1}"}`
 });
 }
 let msgii = await generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: messageText
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: buttons
 })
 })
 }
 }
 }, { userJid: m.sender, quoted: m });
 await riza.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
 } catch (error) {
 console.error(error);
 m.reply('Terjadi kesalahan saat mengambil data server dari panel.');
 }
}
break
case 'unli': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "0", disk: "0", cpu: "0" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`UNLI | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
        case '10gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "10100", disk: "9450", cpu: "340" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`10GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '9gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "9100", disk: "8450", cpu: "300" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`9GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '8gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "8090", disk: "7550", cpu: "270" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`8GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '7gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "7090", disk: "6950", cpu: "240" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`7GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '6gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "6090", disk: "5550", cpu: "200" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`6GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
  
  case '4gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "4068", disk: "3400", cpu: "155" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`4GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '3gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "3048", disk: "2500", cpu: "120" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`3GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '2gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "2048", disk: "1500", cpu: "90" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`2GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '1gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "1000", disk: "1000", cpu: "40" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`1GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await riza.relayMessage(target, msg.message, { messageId: msg.key.id })
 await riza.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case "delserver": {
if (!isCreator) return m.reply('Khusus Owner!')
if (!text) return m.reply(".delserver idnya")
let settings = JSON.parse(fs.readFileSync('./settingpanel.json'))
let { domain, ptla, ptlc } = settings
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + ptla
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + ptla,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + ptla
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + ptla
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${nameSrv}*`)
}
break
case 'kisahnabi': {
				if (!text) return m.reply(`Ketik nama Nabi
Contoh : ${prefix+command} Muhammad`)
				try {
					let ikisah = await fetch(`https://raw.githubusercontent.com/dcode-al/database/refs/heads/main/Islami/Kisah-nabi/${text}.json`) //perlu ganti
let kisah = await ikisah.json();
					const name = kisah.name
					if (name === "Error") return m.reply("Ketik Nama Yang Valid")
					const ultah = kisah.thn_kelahiran
					const umur = kisah.usia
					const asal = kisah.tmp
					const cerita = kisah.description
					m.reply(`_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Umur : ${umur}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`)
				} catch (error) {
 await m.reply('Fitur Error Mas');
}
}
break
        case "jpmtesti": {
if (!isCreator) return m.reply('Khusus Owner!')
if (!q) return m.reply(".jpmtesti teks dengan mengirim foto")
if (!/image/.test(mime)) return m.reply("mohon kirim teks dengan mengirim foto")
const allgrup = await riza.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const jsmsg = (quoted.msg || quoted)
const rest = await riza.downloadAndSaveMediaMessage(jsmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
try {
await riza.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qdoc})
count += 1
} catch {}
await sleep(9000)
}
await fs.unlinkSync(rest)
await riza.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*
Total grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break
case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply('Reply pesan yang mengandung viewOnce')
let msg = m.quoted.message
 let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
 let buffer = Buffer.from([])
 for await (const chunk of media) {
 buffer = Buffer.concat([buffer, chunk])
 }
 if (/video/.test(type)) {
 return riza.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
 } else if (/image/.test(type)) {
 return riza.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
 } else if (/audio/.test(type)) {
 return riza.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
 } 
}
break
case 'mediafire': {
 if (!text) return m.reply('Gunakan format: .mediafire <link_mediafire>');
 if (!text.includes('mediafire.com')) return m.reply('Link yang diberikan bukan dari MediaFire.');
 try {
 let res = await fetch(`https://vapis.my.id/api/mfdl?url=${encodeURIComponent(text)}`);
 let response = await res.json();
 if (!response?.status || !response?.data?.result) {
 return m.reply(`Gagal mengambil data dari MediaFire.\n\n*Format Error API:*\n${JSON.stringify(response, null, 2)}`);
 }
 let { filename, size, download, mimetype } = response.data.result;
 let caption = `*MediaFire Downloader*\n\n> FileName: \n\`${filename}\`\n> Ukuran: ${size}`;
 let fileRes = await fetch(download);
 if (!fileRes.ok) {
 return m.reply(`Gagal mengunduh file dari MediaFire.\n\n*Error Status:* ${fileRes.status} ${fileRes.statusText}`);
 }
 let fileData = await fileRes.arrayBuffer(); // Menggunakan arrayBuffer() agar bisa dikirim sebagai dokumen
 await riza.sendMessage(m.chat, {
 document: Buffer.from(fileData),
 mimetype: mimetype || 'application/octet-stream',
 fileName: filename,
 caption: caption
 }, { quoted: m });
 } catch (e) {
 console.error(e);
 m.reply(`Terjadi kesalahan saat mengunduh file dari MediaFire.\n\n*Error Message:*\n${e.message}`);
 }
}
break;
case 'pinterest': case 'pin': {
    if (!text) return m.reply('Sertakan Kata Kunci!');
    m.reply('Mencari Gambar..!');
    try {
        let res = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${text}`);
        let response = await res.json();
        if (!response.status || !response.data || response.data.length === 0) {
            return m.reply('Tidak ada hasil ditemukan!');
        }
        let result = response.data[Math.floor(Math.random() * response.data.length)];
        riza.sendMessage(m.chat, {
            image: { url: result.images_url },
            caption: `Judul: ${result.grid_title}\nLink: ${result.pin}`,
            quoted: m 
        });
    } catch (err) {
        m.reply('Terjadi Kesalahan');
    }
}
break;
case 'play': {
    if (!text) return m.reply('❗ Harap berikan kata kunci pencarian.\nContoh: .play mbappe');
    let query = encodeURIComponent(text.trim());
    m.reply('🔎 Sedang mencari media, harap tunggu...');
    try {
        const response = await fetch(`https://vapis.my.id/api/yts?q=${query}`);
        const result = await response.json();
        if (result.status && result.data.length > 0) {
            let video = result.data[Math.floor(Math.random() * result.data.length)]; // Pilih 1 data secara acak
            let caption = `🔍 *YouTube Play*\n\n` +
                `📌 *Judul:* ${video.title}\n` +
                `⏳ *Durasi:* ${video.timestamp}\n` +
                `👤 *Channel:* ${video.author.name}\n` +
                `📆 *Upload:* ${video.ago}\n` +
                `👀 *Views:* ${video.views.toLocaleString()}\n\n` +
                `🔗 *URL:* ${video.url}`;
            await riza.sendMessage(m.chat, { 
                image: { url: video.thumbnail }, 
                caption: caption,
                footer: "Pilih Opsi",
                buttons: [
                    {
                        buttonId: `.ytmp3 ${video.url}`,
                        buttonText: { displayText: '🎵 Audio | Ytmp3' },
                        type: 1
                    },
                    {
                        buttonId: `.ytmp4 ${video.url}`,
                        buttonText: { displayText: '🎥 Video | Ytmp4' },
                        type: 1
                    }
                ],
                headerType: 1,
                viewOnce: true
            }, { quoted: m });
        } else {
            m.reply('❗ Tidak ada hasil ditemukan untuk pencarian tersebut.');
        }
    } catch (error) {
        console.error(error);
        m.reply('❗ Terjadi kesalahan saat mencari video. Silakan coba lagi nanti.');
    }
    }
break;
case 'qc':{

if (!args[0] && !m.quoted) {
return m.reply(`Where is the text?`)
}
let userPfp
if (m.quoted) {
try {
userPfp = await riza.profilePictureUrl(m.quoted.sender, "image")
} catch (e) {
userPfp = imageUrls
}
} else {
try {
userPfp = await riza.profilePictureUrl(m.sender, "image")
} catch (e) {
userPfp = imageUrls
}
}
const waUserName = pushname
const quoteText = m.quoted ? m.quoted.body : args.join(" ")
const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      riza.sendImageAsSticker(m.chat, buffer, m, {
        packname: 'Eriza',
        author: 'Gamtenk',
      })
    } catch (error) {
      console.error(error)
      m.reply('Error')
    }
    }
break;
        case 'brat': {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
 
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 }
}

const buf = await brat(quo);
await riza.sendImageAsSticker(m.chat, buf.image, m, { packname: "FikaStore", author: "Official" })
}
break
       
        
        case "list-website": {
    let teks = `📄 *Daftar Website Resmi Fika Store*\n\nSilakan pilih tombol di bawah untuk membuka:`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { mentionedJid: [m.sender] },
                    body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🌐 Website Fika Store",
                                    url: "https://ndii.fikastore.web.id",
                                    merchant_url: "https://ndii.fikastore.web.id"
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🌐 Web Hosting & Store",
                                    url: "https://dev.privhandi.my.id",
                                    merchant_url: "https://panel.fikastore.my.id"
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Buy Panel Bot WhatsApp💸💸",
                                    url: "https://wa.me/6287717274346",
                                    merchant_url: "https://wa.me/6287717274346"
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });

    await riza.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
    case 'menu': case 'help': {
        const message = `
┌〔 FikaStoreBot 〕
│ Hai Kak ${pushname}!  
│ Aku siap bantu 24/7.
│
│ Fitur utama:  
│ • Tools AI & digital  
│ • Layanan otomatis  
│ • Downloader  
│ • Game ringan  
│ • Banyak lainnya!
│
│ Ketik:  
│ .fitur – lihat menu  
│ .order – beli produk  
│ .store - list produk Fika Store 
│
│ “Hari ini milikmu. Gaskeun!”
└〔 Powered by Ndii `
        
        const fullMessage = `${message}`;
        await riza.sendMessage(m.chat, {
        footer: `© Create By ${global.ownername}`,
        buttons: [
            {
                buttonId: `.allmenu`,
                buttonText: { displayText: 'ᴀʟʟᴍᴇɴᴜ' },
                type: 1
            },
            {
                buttonId: `.menu-handi`,
                buttonText: { displayText: 'sɪᴍᴘʟᴇ ᴍᴇɴᴜ' },
                type: 1
            },
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `${global.namabot}`,
        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileLength: 99999999,
        caption: fullMessage, // Mengirimkan pesan lengkap
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `${global.namabot}`,
                body: `Terverifikasi Oleh WhatsApp`,
                mediaType: 1,
                thumbnailUrl: global.imgthumb, 
                sourceUrl: global.linkSaluran,
                renderLargerThumbnail: true
            }
        }
    });
}
break;
case 'allmenu': {
    const message = `
╭─⧁ 𝗙𝗜𝗞𝗔 𝗠𝗨𝗟𝗧𝗜𝗕𝗢𝗧
│ ✦ 𝘄𝗲𝗹𝗰𝗼𝗺𝗲, ${pushname}
╰────────────⧁

╭─⧁ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
│ ✦ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿     : Handi
│ ✦ 𝗢𝘄𝗻𝗲𝗿        : Handi
│ ✦ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲     : FikaStoreBot Multi Device
│ ✦ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻     : 1.0.0 New Version
╰────────────⧁

╭─⧁ 𝗗𝗔𝗙𝗧𝗔𝗥 𝗙𝗜𝗧𝗨𝗥`;

    let listMenu = JSON.parse(fs.readFileSync('./lib/listmenu.json', 'utf8'));
    let menuText = '';
    listMenu.forEach(menu => {
        menuText += `│ ✦ ${prefix}${menu}\n`;
    });

    menuText += `╰────────────⧁\n\n_➠ Powered by Ndii_`;

    // Menambahkan daftar menu ke dalam pesan
    const fullMessage = `${message}\n\n${menuText}`;

    await riza.sendMessage(m.chat, {
        footer: `© Create By ${global.ownername}`,
        buttons: [
            {
                buttonId: `.owner`,
                buttonText: { displayText: 'ᴏᴡɴᴇʀ ʙᴏᴛ' },
                type: 1
            },
            {
                buttonId: `.list-website`,
                buttonText: { displayText: 'ᴡᴇʙ ғɪᴋᴀ' },
                type: 1
            },
            {
		    buttonId: `.about-me`,
		    buttonText: { displayText: 'ᴛᴇɴᴛᴀɴɢ ғɪᴋᴀ sᴛᴏʀᴇ' },
		    type: 1
	    },
			    
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `${global.namabot}`,
        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileLength: 99999999,
        caption: fullMessage, // Mengirimkan pesan lengkap
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `${global.namabot}`,
                body: `Terverifikasi Oleh WhatsApp`,
                mediaType: 1,
                thumbnailUrl: global.imgthumb, 
                sourceUrl: global.linkSaluran,
                renderLargerThumbnail: true
            }
        }
    });
}
break;case 'store': {
    const teks = `
╭─⧁ 𝗙𝗶𝗸𝗮 𝗦𝘁𝗼𝗿𝗲 𝗣𝗿𝗼𝗱𝘂𝗸 & 𝗝𝗮𝘀𝗮
│ ✦ 𝗝𝗮𝘀𝗮 𝗦𝗲𝘁𝘂𝗽 𝗕𝗼𝘁
│ ✦ 𝗝𝗮𝘀𝗮 𝗦𝗲𝘁𝘂𝗽 𝗦𝗲𝗿𝘃𝗲𝗿 𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁
│ ✦ 𝗝𝗮𝘀𝗮 𝗘𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁
│ ✦ 𝗝𝗮𝘀𝗮 𝗧𝗮𝗺𝗯𝗮𝗵 𝗙𝗶𝘁𝘂𝗿 𝗕𝗼𝘁
│ ✦ 𝗝𝗮𝘀𝗮 𝗥𝗲𝗻𝗮𝗺𝗲 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁
│ ✦ 𝗝𝗮𝘀𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗹 𝗣𝗮𝗻𝗲𝗹 𝗣𝗧𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹
╰────────────⧁

╭─⧁ 𝗣𝗿𝗼𝗱𝘂𝗸 𝗙𝗶𝗸𝗮 𝗦𝘁𝗼𝗿𝗲
│ ✦ 𝗣𝗮𝗻𝗲𝗹 𝗣𝗧𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹
│ ✦ 𝗡𝗼𝗺𝗼𝗿 𝗞𝗼𝘀𝗼𝗻𝗴
│ ✦ 𝗩𝗣𝗦 𝗛𝗼𝘀𝘁𝗶𝗻𝗴
│ ✦ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗣𝗿𝗲𝗺𝗶𝘂𝗺
│ ✦ 𝗝𝗮𝘀𝗮 𝗦𝗲𝘁𝘂𝗽 𝗕𝗼𝘁
│ ✦ 𝗝𝗮𝘀𝗮 𝗧𝗮𝗺𝗯𝗮𝗵 𝗙𝗶𝘁𝘂𝗿 𝗕𝗼𝘁
╰────────────⧁

> Untuk memesan, klik tombol di bawah:
`;
        
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: teks
                    },
                    footer: {
                        text: `© Fika Store`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text": "Buy via Website","copy_code": "https://web.privhandi.my.id"}`
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: `{"display_text":"Buy Panel Pterodactyl","id":".buypanel"}`
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: `{"display_text":"Chat Handi","id":".owner"}`
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: m });

    await riza.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;
        case 'status': {const teks = `
╭─⧁ 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧
│ ✦ 𝙉𝙖𝙢𝙚     : ${global.namabot}
│ ✦ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣  : ${global.botversion}
╰────────────⧁
`;
    
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: teks
                    },
                    footer: {
                        text: `© ${global.ownername}`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: `{"display_text":"Cek Ping","id":".ping"}`
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: `{"display_text":"Owner Bot","id":".owner"}`
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: `{"display_text":"List Website","id":".list-website"}`
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: m });

    await riza.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;

case 'ping': {
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();

    let respon = `
*㆔ Response Speed:* ${latensi.toFixed(4)} _Second_  
ㆳ ${(oldd - neww).toFixed(2)} _Milliseconds_  
ㆳ *Runtime:* ${runtime(process.uptime())}

┌───────────────── •
│ *Info Server ㇀*  
│ *RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
└───────────────── •

ㇴ *NodeJS Memory Usage*  
${Object.keys(used)
    .map((key, _, arr) => `> ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`)
    .join('\n')}

${cpus[0] ? `ㆫ *Total CPU Usage*  
\`${cpus[0].model.trim()} (${cpu.speed} MHz)\`
${Object.keys(cpu.times)
    .map(type => `> *${(type + '*').padEnd(6)} : ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`)
    .join('\n')}

ㇴ *CPU Core(s) Usage (${cpus.length} Core CPU)*  
${cpus
    .map(
        (cpu, i) => `> [ ${i + 1} ] ${cpu.model.trim()} (${cpu.speed} MHz)  
${Object.keys(cpu.times)
    .map(type => `- *${(type + '*').padEnd(6)} : ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`)
    .join('\n')}`
    )
    .join('\n\n')}` : ''}
`;

    m.reply(respon);
}
break;
case 'self': {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam 
    riza.public = false
    m.reply(`*Switch To Mode :* \`Self\``)
}
break

case 'public': {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    riza.public = true
    m.reply(`*Switch To Mode :* \`Public\``)
}
break
case 'owner': {
        try {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${global.ownername}\nTEL;type=CELL;type=VOICE;waid=${global.owner}:+${global.owner}\nEND:VCARD`;

        let quotedMessage = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Kontak Owner Kami`,jpegThumbnail: ""}}}
            
        

        await riza.sendMessage(m.chat, { contacts: { displayName: global.ownername, contacts: [{ vcard }] } }, { quoted: quotedMessage });
    } catch (error) {
        console.error("Error saat mengirim kontak owner:", error);
    }
}
break
case "addprem": {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let ceknya = await riza.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    premium.push(prrkek)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Added ${prrkek} To Database`)
}
break

case "delprem": {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Removed ${ya} From Database`)
}
break
        
        case 'menu-handi': {
  const pushname = m.pushName || "Pengguna";

  const messageIntro = `
╭═══〘 𝗙𝗜𝗞𝗔𝗔𝗜 ┃ 𝗦𝗬𝗦𝗧𝗘𝗠 〙═══╮
┃ ⚙️ 𝗨𝗦𝗘𝗥   : ${pushname.toUpperCase()}
┃ 🤖 𝗕𝗢𝗧     : ${global.namabot}
┃ 👑 𝗢𝗪𝗡𝗘𝗥  : ${global.ownername}
┃ 📦 𝗩𝗘𝗥𝗦𝗜  : ${global.botversion}
╰═════════════════════╯`;
let listMenu = JSON.parse(fs.readFileSync('./lib/listmenu.json', 'utf8'));
let menuText = `
╔⟦ 𝗠𝗔𝗜𝗡 𝗙𝗘𝗔𝗧𝗨𝗥𝗘𝗦 ⟧╗
║• ${prefix}owner
║• ${prefix}allmenu
║• ${prefix}store
║• ${prefix}status
╚═════════════════════╝
`;
  const fullMessage = `${messageIntro}\n${menuText}`;

    await riza.sendMessage(m.chat, {
        footer: `© Create By ${global.ownername}`,
        buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '👑 Owner' },
      type: 1
    },
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: '📜 Semua Menu' },
      type: 1
    }
  ],
   headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `${global.namabot}`,
        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileLength: 99999999,
        caption: fullMessage, // Mengirimkan pesan lengkap
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `${global.namabot}`,
                body: `Terverifikasi Oleh WhatsApp`,
                mediaType: 1,
                thumbnailUrl: global.imgthumb, 
                sourceUrl: global.linkSaluran,
                renderLargerThumbnail: true
            }
        }
    });
}
break;
//End Case
default:
if ((budy.match) && ["tes","bot"].includes(budy)) {
m.reply(`*Bot ${global.namabot}* : \`Active\``)
}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
m.reply(`WaalaikumSalam ${pushname}`)
}

if (budy.startsWith('=>')) {
    if (!isCreator) return

    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        m.reply(String(err));
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}

}
} catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
