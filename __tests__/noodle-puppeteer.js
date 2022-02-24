const puppeteer = require ('puppeteer')
const regeneratorRuntime = require("regenerator-runtime");

const APP = 'http://localhost:3000'

describe ('Front end features', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        page = await browser.newPage();
      });

      afterAll(() => {
        browser.close();
      });

      describe('initial display', () => {
          it ('has the git good logo', async() => {
            await page.goto(APP);
            await page.waitForSelector('#mainTitle')
            const title = await page.$eval('#mainTitle', (el) => el.innerHTML)
            expect(title).toBe('🤖GitGood');
          })
      })
})
