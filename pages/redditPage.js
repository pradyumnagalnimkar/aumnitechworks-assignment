import { test} from "@playwright/test";
import { BasePage } from "../pages/basePage.js";
import { WebUtils } from "../utils/web-utils.js";

export class RedditPage extends BasePage{
    constructor(page){
        super(page);
        // this.url = "https://www.reddit.com/";
        this.url = process.env.REDDIT_URL;
        this.searchPostTextbox = this.page.locator("reddit-search-large input[inputmode]");
        this.posts = this.page.locator("#main-content a[data-testid='post-title']")
        this.postTitleText = this.page.locator("#main-content a[data-testid='post-title-text']")
        this.postComments = this.page.locator("div[slot='comment'] div")
        this.backToPostsButton = this.page.locator("pdp-back-button button[aria-label='Back']")
    }

    /**
     * @description - Search for a subreddit
     * @param {string} subreddit - Subreddit to search for
     */
    async search(subreddit){
        await test.step(`Search for ${subreddit}`, async () => {
            await this.searchPostTextbox.fill(subreddit);
            await WebUtils.performKeyPress(this.page, "Enter");
        });
    }

    /**
     * @description - Keep scrolling until the number of posts loaded is greater than or equal to the number of posts to load
     * @param {number} numberOfPosts - Number of posts to load
     */
    async loadPosts(numberOfPosts){
        await test.step(`Load ${numberOfPosts} posts`, async () => {
            while (await this.posts.count() <= numberOfPosts) {
                await WebUtils.scrollToBottom(this.page);
            }
        });
    }

    /**
     * @description - Fetch post details from the page between startIndex and endIndex (inclusive)
     * @param {number} startIndex - Start index of the posts
     * @param {number} endIndex - End index of the posts
     * @returns {Array} - Array of post details
     */
    async fetchPostDetails(startIndex, endIndex){
        return await test.step(`Fetch post details from ${startIndex} to ${endIndex}`, async () => {
            let postDetails = [];
            for (let i = startIndex; i <= endIndex; i++) {
                let postDetail = {};
                postDetail.title = await this.postTitleText.nth(i).innerText();
                await this.posts.nth(i).click();
                await this.postComments.nth(0).waitFor();
                let commentText = await this.postComments.nth(0).innerText();
                postDetail.comment = commentText.replace(/\n/g, " ").trim();
                postDetails.push(postDetail);
                await this.goBackToPosts();
            }
            return postDetails;
        });
    }

    /**
     * @description - Click on the back to posts button
     */
    async goBackToPosts(){
        await test.step(`Click on the back to posts button`, async () => {
            await this.backToPostsButton.click();
        });
    }

}