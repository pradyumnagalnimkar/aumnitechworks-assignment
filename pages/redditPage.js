import { test} from "@playwright/test";
import { WebUtils } from "../utils/web-utils.js";

class RedditPage {
    constructor(page){
        this.page = page;
        this.searchPostTextbox = this.page.locator("reddit-search-large input[autocomplete='off']");
        this.posts = this.page.locator("#main-content a[data-testid='post-title']")
    }

    /**
     * @description - Navigate to the Reddit homepage
     */
    async openApp(){
        await test.step(`Open Reddit`, async () => {
            await this.page.goto("https://www.reddit.com/");
        });
    }

    /**
     * @description - Search for a subreddit
     * @param {string} subreddit - Subreddit to search for
     */
    async search(subreddit){
        await test.step(`Search for ${subreddit}`, async () => {
            await this.searchPostTextbox.fill(subreddit);
            await this.page.keyboard.press("Enter");
        });
    }

    /**
     * @description - Keep scrolling until the number of posts is reached
     * @param {number} numberOfPosts - Number of posts to load
     */
    async loadPosts(numberOfPosts){
        await test.step(`Load ${numberOfPosts} posts`, async () => {
            while (await this.posts.count() < numberOfPosts) {
                await WebUtils.scrollToBottom(this.page);
            }
        });
    }
}