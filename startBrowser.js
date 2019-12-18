const puppeteer = require('puppeteer');

const proxyServer = 'http://127.0.0.1:1080'
const initViewPoint = { width: 900, height: 800 }

async function main() {
  const browser = await puppeteer.launch({
    // headless: false,
    args: [`--proxy-server=${proxyServer}`]
  });
  const page = await browser.newPage();
  await page.setViewport(initViewPoint)
  // await page.goto('https://www.baidu.com', {waitUntil: 'networkidle2'});
  // await page.goto('http://www.google.com', {waitUntil: 'networkidle2'});
  // await page.screenshot({path: 'st.png'})
  // await page.pdf({path: 'hn.pdf', format: 'A4'});
  await doSomeThing(browser);
  await browser.close();
}


async function doSomeThing(browser) {

}

main()
  .then((res) => {
    console.log('success', res);
  })
  .catch(err => {
    console.log('err', err)
  })