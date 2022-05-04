const puppeteer = require('puppeteer');
import dotenv from 'dotenv';
dotenv.config();

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://hp21.ynov.com/TOU', {
        waitUntil: 'networkidle2',
    });
    await (await page.waitForSelector('input[id="username"]')).type('dan.fauconnier@ynov.com');
    await (await page.waitForSelector('input[id="password"]')).type(process.env.PASSWORD);
    await (await page.waitForSelector('input[value="Connexion"]')).click();
    await (await page.waitForSelector('div[id="GInterface.Instances[0].Instances[1]_Combo1"]')).click();

    await page.waitForTimeout(5000)

    const grade = await page.$$eval('span.AlignementMilieuVertical', (ele: Element[]) => {
        return ele.length
    })
    console.log(grade)
})();

