const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://google.com', {
    waitUntil: 'networkidle2',
  });
  await page.click('button[id="L2AGLb"]')
  await page.waitForSelector('input[jsaction="paste:puy29d;"]');
  await page.$eval('input[jsaction="paste:puy29d;"]', el => el.value = 'Youtube');
  await page.evaluate(async () => {
    document.querySelector('input[name="btnK"]').click();
  });
  await Promise.all([page.waitForNavigation(), page.click('a["https://www.youtube.com/?hl=FR"]')]);
})();
