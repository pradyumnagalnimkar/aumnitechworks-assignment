import { test, expect } from "@playwright/test";
import { GmailPage } from "../pages/gmailPage.js";

test('Gmail Login', {
    tag: ['@smoke', '@assignment']
}, async ({ page }) => {

    // 1. Open Gmail in a browser.
    // 2. Log in with provided Gmail credentials (for the test user account).
    // 3. Search for an email from aumni techworks (you can assume the subject or sender).
    // 4. Open the email and click on the Reply button.
    // 5. Write a response with the acceptance message (e.g., "I accept the invitation to proceed to the next round").
    // 6. Send the reply.

    const gmailPage = new GmailPage(page);

    const email = process.env.GMAIL_EMAIL;
    const password = process.env.GMAIL_PASSWORD;
    const subjectLine = "Test email: Check Reception";
    const replyMessage = "I accept the invitation to proceed to the next round";


    await gmailPage.loadApp();
    await gmailPage.login(email, password);
    await gmailPage.searchMail(subjectLine);
    await gmailPage.waitForInbox();
    await gmailPage.openEmail();
    await gmailPage.sendReply(replyMessage);    
    await expect.soft(gmailPage.messageSentText).toBeVisible();
});