import { Browser, Page } from "puppeteer"

export async function goToMainPage(browser: Browser): Promise<Page> {
  return browser.newPage()
}

export async function goToNextPageInMainPage(_mainPage: Page): Promise<Array<any>> {
  return [1, 2, 3]
}
