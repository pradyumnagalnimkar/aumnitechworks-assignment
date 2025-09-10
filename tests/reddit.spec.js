import { test, expect } from "@playwright/test"

test('Fetch titles and comments from a subreddit posr ', {
    tag: ['@smoke', '@assignment']
}, async ({ page }) => {
    // 1. Open the Reddit website.
    // 2. Navigate to a specific subreddit of your choice (e.g., r/learnprogramming).
    // 3. Fetch the titles of posts numbered 40th to 45th (inclusive) on the page.
    // 4. Click on comments and fetch the first comment on that post
    // 5. Verify that exactly 6 titles and comments are fetched.
    // 6. Print the titles to the console and optionally validate their content.
    
    let fetchedTitles = []
    let fetchedComments = []
    await page.goto("https://www.reddit.com/");
    await page.locator("reddit-search-large input[autocomplete='off']").fill("r/learnprogramming");
    await page.keyboard.press("Enter");
    while(await page.locator("#main-content a[data-testid='post-title']").count() < 46){
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(1000);
    }
    for(let i=40;i<46;i++){
        fetchedTitles.push(await page.locator("#main-content a[data-testid='post-title']").nth(i).getAttribute("aria-label"));
    }
    console.log(actualTitles);
    


    await page.pause();

})