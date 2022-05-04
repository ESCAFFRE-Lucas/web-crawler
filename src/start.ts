const puppeteer = require('puppeteer');
import { main } from './script';
import { bot } from './navy-bot';

export const getDays = () => {
  let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  let d = new Date();
  return days[d.getDay()];
}

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://hp21.ynov.com/TOU', {
    waitUntil: 'networkidle2',
  });
  await (await page.waitForSelector('input[id="username"]')).type('dan.fauconnier@ynov.com');
  await (await page.waitForSelector('input[id="password"]')).type(process.env.PASSWORD);
  await (await page.waitForSelector('input[value="Connexion"]')).click();
  const courses = (await page.waitForXPath(`/html/body/div[3]/div[2]/div[2]/div/table/tbody/tr[2]/td/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[4]/div[${new Date().getDay()}]/div/table/tbody/tr/td`))
  const subject = await courses.$$eval('div', (ele:  Element[]) => {
    return ele.map((item) => {
      return item.innerHTML;
    });
  })
  await main(subject);
  await bot(subject);
})();

