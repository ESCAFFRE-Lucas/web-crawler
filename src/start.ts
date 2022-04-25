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
  // await page.waitForSelector('div[id="GInterface.Instances[1].Instances[9]_Grille_Elements"]');
  // const trueSubject = await page.$$eval('div[id="GInterface.Instances[1].Instances[9]_Grille_Elements"]', async (ele: Element[]) => {
  //   ele.map(() => {
  //       return page.$$eval('#id_98_cont4 > div:not(:nth-child(3))', (ele:  Element[]) => {
  //         console.log(...ele);
  //         return ele.map((item) => {
  //           console.log(item.innerHTML);
  //           return item.innerHTML;
  //         });
  //       });
  //   })
  // });
  // console.log(trueSubject);
  await page.waitForSelector('#id_143_cont3')
  const subject = await page.$$eval('#id_143_cont3 > div:not(div:nth-child(5) > label)', (ele:  Element[]) => {
    return ele.map((item) => {
      return item.innerHTML;
    });
  })
  await main(subject);
  await bot(subject);
})();

