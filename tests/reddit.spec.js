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

    await redditPage.loadApp();
    await redditPage.search(subreddit);
    await redditPage.loadPosts(50);
    postDetails = await redditPage.fetchPostDetails(40, 45);

    for (const postDetail of postDetails) {
        titleCount++;
        commentCount++;
        console.log(`Post ${titleCount}\nTitle: ${postDetail.title},\n Comment: ${postDetail.comment} \n`);
    }
    expect.soft(titleCount, `Title count is not 6`).toBe(6);
    expect.soft(commentCount, `Comment count is not 6`).toBe(6);
});