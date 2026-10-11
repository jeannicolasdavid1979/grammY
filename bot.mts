import { Bot } from "grammy";
const bot = new Bot(process.env.BOT_TOKEN ?? "");
bot.on("message", (ctx) => ctx.reply("Pong! (grammY deployé via Hermes)"));
bot.api.getMe().then((me) => console.log("grammY démarré:", me.username));
bot.start().catch((e) => { console.error(e); process.exit(1); });
