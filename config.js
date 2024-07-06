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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348030861142";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_42_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjg4QW0zejA5U09QM0VQM0FpNWVkSzdNQnFGdjNRU1BiV0p1aFVNQTNudz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFJPa2I2ZUNUWkNZQmFSS1RyRS02QVwiLFxuICBcInBob25lSWRcIjogXCJkMTcxMTUwNi1lNGZkLTQ1MzgtOGYyNC0wYjc2MzkzNWZmMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgNTcsXG4gICAgICAyMDIsXG4gICAgICAxMjYsXG4gICAgICAxNjQsXG4gICAgICAxMSxcbiAgICAgIDY0LFxuICAgICAgMjQ5LFxuICAgICAgMjM0LFxuICAgICAgMTA0LFxuICAgICAgNjIsXG4gICAgICAyMzYsXG4gICAgICAxMDMsXG4gICAgICAxNTUsXG4gICAgICA1NCxcbiAgICAgIDIxLFxuICAgICAgOTMsXG4gICAgICA1MSxcbiAgICAgIDEwMCxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyNSxcbiAgICAgIDcsXG4gICAgICAxNjcsXG4gICAgICAyMjcsXG4gICAgICAxODMsXG4gICAgICAxOTAsXG4gICAgICAxMzcsXG4gICAgICAxMDgsXG4gICAgICAxMzgsXG4gICAgICAyNDQsXG4gICAgICA3MyxcbiAgICAgIDE1MixcbiAgICAgIDEyLFxuICAgICAgMTE2LFxuICAgICAgNjksXG4gICAgICAxNjIsXG4gICAgICA2NixcbiAgICAgIDE1NCxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liOXF0RUVFTmZMcGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjJxdlB0RnB2Q0EwQjVZbVFnOXgyT2dJeXd6OXdXOGxMWitqWEh0SnAwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzclcyRHJZLyt0TVRUQlNZQnRrT1BPajNzTnYwbnlDRVd5L0NLTWdZV3JBWjVVRWNDOFc4bUFHb2tHb3ZCL2dJZTBTS1VKYUFBZW8vZ1ZmYUpNcUxCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDTEZYR2NyN3ZQdzFFc3FYUHBESVN2TVJOYmEvc055M3dhUmRJOWxHWU5TTUNjR0puMW5wdXpoMlVkanY4UFFOcFQ2dmR5d0xtaDlnN2NucVdRS21Bdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzA4NjExNDI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldIQVRTVVAgTkFJSkFcIixcbiAgICBcImxpZFwiOiBcIjE2NzIyOTMxNjQyODAwMTozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMDg2MTE0MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyODA1NDBcbn0iCn0="  // PUT your SESSION_ID 


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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
