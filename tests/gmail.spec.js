import { test, expect } from "@playwright/test";

test('Gmail Login', {
    tag: ['@smoke', '@assignment']
}, async ({ page }) => {

    //     1. Open Gmail in a browser.
    //     2. Log in with provided Gmail credentials (for the test user account).
    //     3. Search for an email from aumni techworks (you can assume the subject or
    // sender).
    //     4. Open the email and click on the Reply button.
    //     5. Write a response with the acceptance message (e.g., "I accept the invitation to
    // proceed to the next round").
    //     6. Send the reply.

    const subjectLine = "Test email: Check Reception";

    await page.goto("https://www.gmail.com");
    await page.locator("input[aria-label='Email or phone']").fill("testaumnitechworkuser@gmail.com");
    await page.getByText("Next").click();
    await page.locator("input[aria-label='Email or phone']").waitFor({state: "detached"});
    await page.locator("input[aria-label='Enter your password']").fill("testuser1234");
    await page.getByText("Next").waitFor({state: "visible"});
    await page.getByText("Next").click();
    
    // await page.getByText("Not now").click();
    // await page.getByText("Cancel").click();
    await page.getByPlaceholder("Search mail").waitFor({state: "visible"});
    await page.getByPlaceholder("Search mail").fill(subjectLine);
    await page.keyboard.press("Enter");
    // 2. Wait for inbox to load
    await page.locator('table[role="grid"]').last().waitFor({state: "visible"});

    // 3. Open the first email
    await page.locator('table[role="grid"] tr').last().click();

    // 4. Click Reply
    await page.locator('div[aria-label="Reply"]').click();

    // 5. Type reply
    await page.locator('div[aria-label="Message Body"]').fill('I accept the invitation to proceed to the next round');

    // 6. Send
    // await page.getByText("Send").click();

    // 7. Assertion (check sent notification)
    // await expect(page.locator('span:has-text("Message sent")')).toBeVisible();
});