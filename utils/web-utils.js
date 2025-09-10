export class WebUtils {

    /**
     * @description - Scroll to the bottom of the page
     * @param {*} page - Playwright page object
     */
    static async scrollToBottom(page) {
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    }

    /**
     * @description - perform keyboard action
     * @param {string} key - Keyboard key to press
     */
    static async performKeyPress(page, key) {
        await page.keyboard.press(key);
    }
}