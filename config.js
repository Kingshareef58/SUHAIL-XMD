const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_16_16_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNMU5sZ3NJNWpBTFhDc2pDNTNkYWtpYm1mbGJZcUwzSG9YYVA0VnZxaHFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJINHpGOEY1TlRJU3h3ME9oVE5JaG9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJmOGFmYjYzLTUyN2UtNDIzNC04MzhmLWQyMDFiNmI0ODZlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDExNyxcbiAgICAgIDE3OCxcbiAgICAgIDIzLFxuICAgICAgMjEsXG4gICAgICAyMyxcbiAgICAgIDE4LFxuICAgICAgMjQyLFxuICAgICAgMTcwLFxuICAgICAgMjExLFxuICAgICAgNjcsXG4gICAgICAxNDcsXG4gICAgICAxNjcsXG4gICAgICA5NyxcbiAgICAgIDc0LFxuICAgICAgMjI1LFxuICAgICAgMTM0LFxuICAgICAgMTA1LFxuICAgICAgMTYwLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxOTMsXG4gICAgICAxODcsXG4gICAgICA3MixcbiAgICAgIDc3LFxuICAgICAgMTMsXG4gICAgICAxMjcsXG4gICAgICA1OSxcbiAgICAgIDE3NCxcbiAgICAgIDIxOCxcbiAgICAgIDEyNCxcbiAgICAgIDE4NyxcbiAgICAgIDI1NSxcbiAgICAgIDIzMCxcbiAgICAgIDE2MixcbiAgICAgIDE0NSxcbiAgICAgIDI1NSxcbiAgICAgIDY5LFxuICAgICAgNjUsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVBOWUZWRkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5MzU1MTU2MDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImtJbkdcIixcbiAgICBcImxpZFwiOiBcIjgxMjk1NjI3NTIyMTMxOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t2K2xMMEVFTm1nbWJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU1d0NWFqdFY5Rit0M1AyVzVDM2ZQU3ZISjJQR1JseWZYSktPVDVWVytFTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMVUx1VEpiSnp1a2NQU3NNVy85ZkgzeU1RRVZNWW5sRm43SktSYUVEamdDYzNWd0ZhenNzWXdVbU8wRzhlZklnOHhKVkpPZXV4VnBGTmd1bGk0dUxCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJldHJGZzd3QkxPTm9BdkJyZk1jRldLUGd0ZHJseE9mVUxqdjUvRWFieFFseFpjS1FYRTc3eVEvank0YXkxSVIrblVaVHRrOFRhWVl1TERXTzZDU1VDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTM1NTE1NjA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1NjQxODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdFZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU10Vi5qc29uIjogIntcImtleURhdGFcIjpcIkhENTlnaXdReWZUWmdvb3gvdVZOQy9HLzNFMTVwNVQ1NlpMQnAwbisrcTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwMjAxMTk0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTY0MTkyMjAyXCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
