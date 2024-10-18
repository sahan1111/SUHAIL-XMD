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
global.caption = process.env.CAPTION || global.caption || "© Global_Rio_Tech " 


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmZqbkFlWVNlYzBFQnlRL1FmOEV0MXNHYzZsUTVhbjMvU2I5ZVRuTW16UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0ZncVJkVWFUSC16WXM2eldhVUt3UVwiLFxuICBcInBob25lSWRcIjogXCI5YWU3OTMyNC1jZThkLTQ1ZGYtYmYwZi1kYmE1MzJmODIyMmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgNzMsXG4gICAgICA3NyxcbiAgICAgIDksXG4gICAgICA2MCxcbiAgICAgIDEwOSxcbiAgICAgIDIyMixcbiAgICAgIDE2MixcbiAgICAgIDEwNyxcbiAgICAgIDQ1LFxuICAgICAgNzYsXG4gICAgICAxMTYsXG4gICAgICAzMyxcbiAgICAgIDIxNSxcbiAgICAgIDY4LFxuICAgICAgMTMxLFxuICAgICAgNjUsXG4gICAgICAxNCxcbiAgICAgIDE2MixcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICA5MixcbiAgICAgIDE5MSxcbiAgICAgIDE1NSxcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDgwLFxuICAgICAgNCxcbiAgICAgIDI0MixcbiAgICAgIDE0OSxcbiAgICAgIDgyLFxuICAgICAgMzIsXG4gICAgICA1NSxcbiAgICAgIDM3LFxuICAgICAgMTMzLFxuICAgICAgOTQsXG4gICAgICA2MSxcbiAgICAgIDI0NyxcbiAgICAgIDExNSxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUDQzVFRDUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODkyODEyOTA6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdXphblwiLFxuICAgIFwibGlkXCI6IFwiMTAzNzU4MjcyOTIxNzU4OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIV3B4SVExSzNEdUFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid1NXUmZ1c0J0SmNiVzdLeThiTE82V3JSMlJMOU9VUWhpaVNOOHFMeGNYYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBeE5qT1FOSm90SmI1b2ZNbFhPRUZIYjYzSWF3a25oZkVaU2tQc1VBalgyYkMxRSs0WFNyTndGSGN3Qi9WQU1JbGk3em1HY0RmQUlzYk9tNG5BczREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvQ3c2MW5vUGdqNTdTN2dhYzNzTHUvQWNTUmFyQTlZdFVFSU05YU91anY5Ym1QY0I2RHFNK2phSjEwL2NhMHJnaFUxMjRTMHJQQzJMUUdZbkluOGFEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTI4MTI5MDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTU2ODIzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
