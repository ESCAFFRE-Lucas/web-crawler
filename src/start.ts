const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://hp21.ynov.com/TOU', {
    waitUntil: 'networkidle2',
  });
  await (await page.waitForSelector('input[id="username"]')).type('lucas.escaffre@ynov.com');
  await (await page.waitForSelector('input[id="password"]')).type('Lucas20030309');
  await (await page.waitForSelector('input[value="Connexion"]')).click();
  await page.waitForSelector('#id_98_cont0 > div:nth-child(1)');
  const subject = await page.$eval('#id_98_cont0 > div:nth-child(1)', (ele:  Element) => {
    return ele.innerHTML;
  })
  console.log(subject);
})();

