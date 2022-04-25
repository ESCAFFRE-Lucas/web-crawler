const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://hp21.ynov.com/TOU', {
        waitUntil: 'networkidle2',
    });
    await (await page.waitForSelector('input[id="username"]')).type('dan.fauconnier@ynov.com');
    await (await page.waitForSelector('input[id="password"]')).type('Daninou32450!');
    await (await page.waitForSelector('input[value="Connexion"]')).click();
    await (await page.waitForSelector('div[id="GInterface.Instances[0].Instances[1]_Combo1"]')).click();

    // await (await page.waitForXPath('/html/body/div[3]/div[2]/div[1]/div/div[5]/div[2]/label[2]')).click();

    //document.querySelectorAll('')
    await page.waitForTimeout(5000)

    const grade = await page.$$eval('span.AlignementMilieuVertical', (ele: Element[]) => {
        return ele.length
    })
    console.log(grade)
})();

