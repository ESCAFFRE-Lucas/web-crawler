const puppeteer = require('puppeteer');
import { main, prisma } from './script';
import { bot } from './navy-bot';

(async () => {
  let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  let d = new Date();
  let dayName = days[d.getDay()];
  let getYdays = await prisma.agenda.findMany({
    select: {matiere: true}
  })
  console.log(Object.values(getYdays[getYdays.length-1]));

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://hp21.ynov.com/TOU', {
    waitUntil: 'networkidle2',
    timeout: 0,
  });
  await (await page.waitForSelector('input[id="username"]')).type('lucas.escaffre@ynov.com');
  await (await page.waitForSelector('input[id="password"]')).type(process.env.PASSWORD);
  await (await page.waitForSelector('input[value="Connexion"]')).click();
  // const allDays = (await page.waitForXPath('/html/body/div[3]/div[2]/div[2]/div/table/tbody/tr[2]/td/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[4]'))
  // const coursesDay = await allDays.$$eval('div', (ele:  Element[]) => {
  //   return ele.map((item) => {
  //     return item.innerHTML;
  //   });
  // })
  // console.log(coursesDay);
  let i;
  switch (dayName) {
    case 'Lundi':
      i = 1;
      break;
    case 'Mardi':
      i = 2;
      break;
    case 'Mercredi':
      i = 3;
      break;
    case 'Jeudi':
      i = 4;
      break;
    case 'Vendredi':
      i = 6;
      break;
  }

  if (Object.values(getYdays[getYdays.length-1]) === ['Ydays']) {
    switch (dayName) {
      case 'Jeudi':
        i = 5;
        break;
      case 'Vendredi':
        i = 6;
        break;
    }
  }
  const courses = (await page.waitForXPath(`/html/body/div[3]/div[2]/div[2]/div/table/tbody/tr[2]/td/div[1]/div[1]/div[2]/div[2]/div/div/div[1]/div[4]/div[${i}]/div/table/tbody/tr/td`))
  const subject = await courses.$$eval('div', (ele:  Element[]) => {
    return ele.map((item) => {
      return item.innerHTML;
    });
  })
  await main(subject);
  await bot(subject);
})();

