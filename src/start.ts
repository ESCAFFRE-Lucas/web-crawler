const puppeteer = require('puppeteer');
import { main } from './script';
import { bot } from './navy-bot';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://hp21.ynov.com/TOU', {
    waitUntil: 'networkidle2',
  });
  await (await page.waitForSelector('input[id="username"]')).type('lucas.escaffre@ynov.com');
  await (await page.waitForSelector('input[id="password"]')).type('Lucas20030309');
  await (await page.waitForSelector('input[value="Connexion"]')).click();
  await page.waitForSelector('#id_98_cont0');
  const subject = await page.$$eval('#id_98_cont0 > div:not(:nth-child(3))', (ele:  Element[]) => {
    return ele.map((item) => {
      return item.innerHTML;
    });
  })
  await main(subject);
  await bot(subject);
})();

