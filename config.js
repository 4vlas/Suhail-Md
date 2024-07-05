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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348165820748";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165820748";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_58_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaUFhaYmcwMzVaSFAxWWQ3c3Nib2UvcUhlTGxMaUlFazJORXJ4Rm03eFFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1cDRXNGlYblF1TzdGUjZWeDluZWV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkZDcyM2I2LTdmNzYtNDJjMy04YmQ4LTFiMjNlMTVkNjQ4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDIxNCxcbiAgICAgIDEwOCxcbiAgICAgIDk5LFxuICAgICAgMTU1LFxuICAgICAgMCxcbiAgICAgIDI1LFxuICAgICAgNjYsXG4gICAgICA0MCxcbiAgICAgIDE0MSxcbiAgICAgIDgzLFxuICAgICAgNTQsXG4gICAgICAxOSxcbiAgICAgIDIwNCxcbiAgICAgIDIzMSxcbiAgICAgIDc3LFxuICAgICAgMjA4LFxuICAgICAgMjQzLFxuICAgICAgNTksXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDEyOCxcbiAgICAgIDU5LFxuICAgICAgMjA1LFxuICAgICAgMjM1LFxuICAgICAgOSxcbiAgICAgIDI1MyxcbiAgICAgIDEzMSxcbiAgICAgIDE5LFxuICAgICAgMTc4LFxuICAgICAgMTc3LFxuICAgICAgNzYsXG4gICAgICAxOTQsXG4gICAgICAyNDMsXG4gICAgICA3MyxcbiAgICAgIDEwMixcbiAgICAgIDYzLFxuICAgICAgMjI3LFxuICAgICAgMjI1LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjdOMVdRTFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjU4MjA3NDg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMjM3OTE4NTgyODA1MDo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ2c4YzhIRUw3TW9MUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkROSnBUK2JBdGdVM3JrcGttaCsyZEJaMnpheUJDUkh1S2tjQ0N3Um9ka1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK0d2OWVhblRYbHhsN3VnSmlPbXlhZmF1YUV5V25DY2d1RWxWaGZKWE5mM3lHbnNXUDZ2NHB1bjBjeWgzb0pxbjhsRDBVMWdtdXF1UG5OMDBwQ3NmQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVdiQWpaUnJIeFhXSmFWYUV5d0tFMEF2eUMvejg0UzFMSFBqai9Eb3dVYncyUWtzN1NRWG9RV1BtL0V2dkZZZ1V6ODRsUGF2QTNwR2NFWThTTzY1RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NTgyMDc0ODo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTk4NzIyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
