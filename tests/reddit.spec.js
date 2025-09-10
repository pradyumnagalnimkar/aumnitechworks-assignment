import { test, expect } from "@playwright/test"
import { RedditPage } from "../pages/redditPage.js";

test('Fetch titles and comments from a subreddit posr ', {
    tag: ['@smoke', '@assignment']
}, async ({ page }) => {


    // 1. Open the Reddit website.
    // 2. Navigate to a specific subreddit of your choice (e.g., r/learnprogramming).
    // 3. Fetch the titles of posts numbered 40th to 45th (inclusive) on the page.
    // 4. Click on comments and fetch the first comment on that post
    // 5. Verify that exactly 6 titles and comments are fetched.
    // 6. Print the titles to the console and optionally validate their content.
    
    const redditPage = new RedditPage(page);
    const subreddit = "r/learnprogramming";
    
    let postDetails = [];
    let titleCount = 0;
    let commentCount = 0;
    
    await redditPage.openApp();
    await redditPage.search(subreddit);

    // Scroll until we have at least 46 posts loaded
    await redditPage.loadPosts(46);
    
    // Extract posts 40-45 (6 posts total)
    for (let i = 40; i < 46; i++) {
        let postDetail = {};
        postDetail.title = await page.locator("#main-content a[data-testid='post-title-text']").nth(i).innerText();
        await page.locator("#main-content a[data-testid='post-title']").nth(i).click();
        await page.locator("div[slot='comment'] div").nth(0).waitFor();
        
        let commentText = await page.locator("div[slot='comment'] div").nth(0).innerText();
        postDetail.comment = commentText.replace(/\n/g, " ").trim();
        
        postDetails.push(postDetail);
        await page.locator("pdp-back-button button[aria-label='Back']").click();
    }
    
    for (const postDetail of postDetails) {
        titleCount++;
        commentCount++;
        console.log(`Title: ${postDetail.title}, Comment: ${postDetail.comment} \n`);
    }
    
    expect(titleCount).toBe(6);
    expect(commentCount).toBe(6);
});