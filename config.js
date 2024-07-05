const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349135104096";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349135104096";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_06_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVoYVRacG9aazFlRmtIVUM3S2trYS9hQ2JETVpKSVp0eStqTWF1V2xxbFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZW9uT1kyTEdRMUdNSjZuMjJfdW9OZ1wiLFxuICBcInBob25lSWRcIjogXCJiNGZlMWQyNS1kNmNhLTQ2YzgtODMwZC0xMjgwNjFmMWY3OGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTUzLFxuICAgICAgMTUwLFxuICAgICAgODcsXG4gICAgICA2MyxcbiAgICAgIDIwNCxcbiAgICAgIDEyOSxcbiAgICAgIDIwMixcbiAgICAgIDIwOCxcbiAgICAgIDMzLFxuICAgICAgMjE3LFxuICAgICAgNzYsXG4gICAgICAyMTMsXG4gICAgICAyMzksXG4gICAgICA0NyxcbiAgICAgIDE5MyxcbiAgICAgIDEyMixcbiAgICAgIDAsXG4gICAgICA5MyxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMzEsXG4gICAgICAyMjIsXG4gICAgICAxNDcsXG4gICAgICAyMjksXG4gICAgICA4MCxcbiAgICAgIDY2LFxuICAgICAgMjIzLFxuICAgICAgMTQ0LFxuICAgICAgMTIzLFxuICAgICAgNzYsXG4gICAgICA5NCxcbiAgICAgIDg3LFxuICAgICAgMjAzLFxuICAgICAgMjMwLFxuICAgICAgMjIwLFxuICAgICAgMzYsXG4gICAgICAxMjMsXG4gICAgICAyMTAsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmNjhhc0ZFTFhBb2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibzFHTEI0UWhJYzJlUzBDa1hKVnhCaVkyUVNEQ3RzV2NpaEhuc3dhYnZFYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPd05IWEdlYVJnMXNRYSs5Z1MrVzNSako5WFJQL0pYWjF2MUVxOE53NXJVTzZZY0R4YUdWRU4veldwd3J5L1lzUUgxSWdnNXlQREpFb2dPd2dEakJoUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrK2k1YmtEdkNkWGdmcC8yNU1XMXFDRWxyU0FsNGJ1MkY1dFlBa1dLR0gwTFhnZU5IR0hTNEh5dXE2TTVacS80TVk2akFUVWdCOHI3T2RzbHAzQkJEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzUxMDQwOTY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDYwOTM4MjgzODMwNjoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEcmF4bGVyXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM1MTA0MDk2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMTM1NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMGdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwZy5qc29uIjogIntcImtleURhdGFcIjpcIkcvL1htcHJ2VzY4UW5LSzBSTTFHT3Jadm5FdWhhRzZxelhkMFZUU0d2RmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzNDIyMTg3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE0Njc5NzYyMTkwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDBoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTnlHQnRTb2V5L0ppZ2NmK0VudDlPZUJESFpiaWVqeWJNWWJvR25iSFEzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDM0MjIxODc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTczNjMyODg0OTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZZ2Z2UHgwMU0zVG95dDJMdi9Wd205Sjg5a0hMY2JwVzlhcENTcVJKTW1ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzQyMjE4NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk5NTY4MTUwOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "false"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
