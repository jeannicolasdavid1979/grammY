import { Bot } from "grammy";
const token = process.env.BOT_TOKEN ?? "";
if (!token) {
  console.log("[grammY] BOT_TOKEN non defini - bot en attente. Definir BOT_TOKEN puis redemarrer.");
  setInterval(() => console.log("[grammY] en attente de BOT_TOKEN..."), 3600_000);
} else {
  const bot = new Bot(token);
  bot.on("message", (ctx) => ctx.reply("Pong! (grammY deploye via Hermes)"));
  bot.api.getMe().then((me) => console.log("grammY demarre:", me.username));
  bot.start().catch((e) => { console.error(e); process.exit(1); });
}
