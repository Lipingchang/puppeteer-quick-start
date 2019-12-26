import { launch, LaunchOptions, Browser } from 'puppeteer';
import path from 'path';
import os from 'os';

const proxyServer = "http://127.0.0.1:1087";
const initViewPoint = { width: 900, height: 800 };
const chromePath =
  os.platform() === "darwin"
    ? path.join(
        path.dirname(__dirname),
        "puppeteer.local-chromium",
        "Chromium.app",
        "Contents",
        "MacOS",
        "Chromium"
      )
    : path.join(path.dirname(__dirname), "puppeteer.local-chromium", "chrome.exe");

const launchOptions: LaunchOptions = {
  headless: false,
  args: [`--proxy-server=${proxyServer}`],
  executablePath: chromePath,
}

// const initViewPoint: Viewport = { width: 900, height: 800 }

export async function doSomeThing (browser: Browser): Promise<void> {
  const page = await browser.newPage()
  await page.goto('http://www.baidu.com', { waitUntil: 'networkidle2' })
  await page.screenshot({ path: 'hh.png' })
}

async function main (): Promise<void> {
  console.log(launch)
  const browser = await launch(launchOptions)
  // const page = await browser.newPage();
  // await page.setViewport(initViewPoint)
  // await page.goto('https://www.baidu.com', {waitUntil: 'networkidle2'});
  // await page.goto('http://www.google.com', {waitUntil: 'networkidle2'});
  // await page.screenshot({path: 'st.png'})
  // await page.pdf({path: 'hn.pdf', format: 'A4'});
  await doSomeThing(browser)
  await browser.close()
}

main()
  .then((res) => {
    console.log('success', res)
  })
  .catch(err => {
    console.log('err', err)
  })
