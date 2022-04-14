const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://google.com', {
    waitUntil: 'networkidle2',
  });
  await page.click('button[id="L2AGLb"]')
  await page.waitForSelector('input[jsaction="paste:puy29d;"]');
  await page.$eval('input[jsaction="paste:puy29d;"]', el => el.value = 'ynov extranet');
  await page.evaluate(async () => {
    document.querySelector('input[name="btnK"]').click();
  });
  await page.evaluate(async () => {
    document.querySelector('a[href="https://extranet.ynov.com/"]');
  })
})();
