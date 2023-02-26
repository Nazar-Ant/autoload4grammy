import { bot } from './bot.ts';
import { assertEquals, Chats } from './deps.ts';

const chats = new Chats(bot);

Deno.test('Autoload testing', async (t) => {
  const user = chats.newUser({
    id: 123456789,
    first_name: 'Test',
    last_name: 'User',
  });

  await t.step('/start command', async () => {
    await user.command('start');
    assertEquals(user.last.text, 'The /start command worked!');
  });
});
