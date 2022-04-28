const puppeteer = require('puppeteer');
import { main } from './script';
import { bot } from './navy-bot';

(async () => {
  let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  let d = new Date();
  let dayName = days[d.getDay()];
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://hp21.ynov.com/TOU', {
    waitUntil: 'networkidle2',
  });
  await (await page.waitForSelector('input[id="username"]')).type('lucas.escaffre@ynov.com');
  await (await page.waitForSelector('input[id="password"]')).type(process.env.PASSWORD);
  await (await page.waitForSelector('input[value="Connexion"]')).click();
  const allDays = (await page.waitForXPath('/html/body/div[3]/div[2]/div[2]/div/table/tbody/tr[2]/td/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[4]'))
  const coursesDay = await allDays.$$eval('div', (ele:  Element[]) => {
    return ele.map((item) => {
      return item.innerHTML;
    });
  })
  console.log(coursesDay);
  const courses = (await page.waitForXPath('/html/body/div[3]/div[2]/div[2]/div/table/tbody/tr[2]/td/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[4]/div[1]/div/table/tbody/tr/td'))
  const subject = await courses.$$eval('div', (ele:  Element[]) => {
    return ele.map((item) => {
      return item.innerHTML;
    });
  })
  console.log(subject[0]);
  console.log(subject[1]);
  console.log(subject[2]);
  await main(subject);
  await bot(subject);
})();

