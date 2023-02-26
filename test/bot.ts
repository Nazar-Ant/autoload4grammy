import { Bot } from './deps.ts';

export const bot = new Bot('SOME_TOKEN');

bot.command('start', (ctx) => ctx.reply('The /start command worked!'));
