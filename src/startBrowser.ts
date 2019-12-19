import * as puppeteer from 'puppeteer'

const proxyServer = 'http://127.0.0.1:1080'

const launchOptions: puppeteer.LaunchOptions = {
  headless: false,
  args: [`--proxy-server=${proxyServer}`]
}

// const initViewPoint: Viewport = { width: 900, height: 800 }

export async function doSomeThing (browser: puppeteer.Browser): Promise<void> {
  const page = await browser.newPage()
  await page.goto('http://www.baidu.com', { waitUntil: 'networkidle2' })
  await page.screenshot({ path: 'hh.png' })
}

async function main (): Promise<void> {
  const browser = await puppeteer.launch(launchOptions)
  // const page = await browser.newPage();
  // await page.setViewport(initViewPoint)
  // await page.goto('https://www.baidu.com', {waitUntil: 'networkidle2'});
  // await page.goto('http://www.google.com', {waitUntil: 'networkidle2'});
  // await page.screenshot({path: 'st.png'})
  // await page.pdf({path: 'hn.pdf', format: 'A4'});
  // await doSomeThing(browser)
  await browser.close()
}

main()
  .then((res) => {
    console.log('success', res)
  })
  .catch(err => {
    console.log('err', err)
  })
