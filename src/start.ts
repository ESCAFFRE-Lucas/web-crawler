const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://hp21.ynov.com/TOU', {
    waitUntil: 'networkidle2',
  });
  await (await page.waitForSelector('input[id="username"]')).type('lucas.escaffre@ynov.com');
  await (await page.waitForSelector('input[id="password"]')).type('Lucas20030309');
  await page.evaluate(async () => {
    document.querySelector('input[value="Connexion"]').click();
  });
})();

