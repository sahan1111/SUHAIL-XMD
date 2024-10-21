const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "1" ;  
global.video= "2" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || " `©Sahan_Rio_Tech` " 


global.devs = "94789281290" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94789281290";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789281290";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_58_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibXVNcXJmbCtOYjIyNVVDR2pSZzluaFgrcHozVnQzMkhBTEc0bzd5OXZCZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRThKUWU4S2hRLTJfdUtzU1ZPTlcyZ1wiLFxuICBcInBob25lSWRcIjogXCI0OTc0ZjE5Yi1hZDhlLTQzODMtODVhNy1mMjg2ZTFiMDUyNzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTQ1LFxuICAgICAgMTcsXG4gICAgICAxOTQsXG4gICAgICAyNDgsXG4gICAgICAzNCxcbiAgICAgIDEzMyxcbiAgICAgIDU4LFxuICAgICAgNDksXG4gICAgICAxNyxcbiAgICAgIDIsXG4gICAgICAxNjAsXG4gICAgICAyMjUsXG4gICAgICAxNDUsXG4gICAgICAyMzksXG4gICAgICAxMSxcbiAgICAgIDE4NCxcbiAgICAgIDkyLFxuICAgICAgMTYyLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDY2LFxuICAgICAgMTA0LFxuICAgICAgNDAsXG4gICAgICA4OCxcbiAgICAgIDEyNixcbiAgICAgIDIyNSxcbiAgICAgIDM4LFxuICAgICAgMjUyLFxuICAgICAgMTg1LFxuICAgICAgMTUsXG4gICAgICAyMjEsXG4gICAgICAxOTcsXG4gICAgICAxMDIsXG4gICAgICA4MSxcbiAgICAgIDY3LFxuICAgICAgMTY4LFxuICAgICAgODEsXG4gICAgICAyNyxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExXcHhJUXZhL1l1QVlZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3U1dSZnVzQnRKY2JXN0t5OGJMTzZXclIyUkw5T1VRaGlpU044cUx4Y1hjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdVYXFNOXNDbFMxdkRKNlFRSmtJTU1TdC95R1BnaVdKZ294Zm5zY2U5WW1abWRZbG40R2p0RzdhUUNQMFk1c0VhOVJjUmJ2djk2SE1MR3JhT1VvYkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFwZlQrQmN1QkdIVENCV3NhRnlDL3dUbVRMOVFIMG5EcUhNMGNzSDJmeU10czdmMzdJeGZkUng3Q2hPdzVWY2xNR2pjQjZGRXRZK3JhSlM4ZUlURmpnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODkyODEyOTA6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdXphblwiLFxuICAgIFwibGlkXCI6IFwiMTAzNzU4MjcyOTIxNzU4OjM4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODkyODEyOTA6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTUwMTEyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBlVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGVULmpzb24iOiAie1wia2V5RGF0YVwiOlwiajBQelc5cVJWRlN6OFJQWkdUQVdndXFJSWRNdFlKRVlMbHFyVWI0eEg2WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODM5ODc3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGVVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTDVnZDkyMHdpSThJbi9IVFRseFRoeStReDlwUUF1d3VOM3BGOHhkNHJqND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODM5ODc3MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQZVYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrSDB2YjJGRHVlazdpdTVmZjlGdW9SNDRrRGlodmZLUCtLUlFYR0FCNnhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4Mzk4NzcwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTUwMTA1Nzk4N1wifSIKfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || " `Sahan` *Rio*" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "©RIO",
  packname: process.env.PACK_NAME || "°Sahan°",
  botname : process.env.BOT_NAME  || "Sahan-XMD",
  ownername:process.env.OWNER_NAME|| "Sahan-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SAHAN"  ).toUpperCase(),



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
