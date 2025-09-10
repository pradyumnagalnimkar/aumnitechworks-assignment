import { test, expect } from "@playwright/test";
import { BasePage } from "./basePage.js";
import { WebUtils } from "../utils/web-utils.js";

export class GmailPage extends BasePage{
    constructor(page){
        super(page);
        this.url = process.env.GMAIL_URL;   
        this.genericTextbox = (label) => this.page.locator(`input[aria-label='${label}']`);
        this.nextButton = this.page.getByText("Next");
        this.table = this.page.locator('table[role="grid"]');
        this.replyButton = this.page.locator("div[aria-label='Reply']");
        this.messageBodyTextbox = this.page.locator("div[aria-label='Message Body']");
        this.sendButton = this.page.getByText("Send", {exact: true});
        this.messageSentText = this.page.locator("span:text-is('Message sent')");
    }

    /**
     * @description - Enter email in the email textbox
     * @param {string} email - Email address to enter
     */
    async setEmail(email){
        await test.step(`Enter email ${email}`, async () => {
            await this.genericTextbox("Email or phone").fill(email);
        });
    }

    /**
     * @description - Enter password in the password textbox
     * @param {string} password - Password to enter
     */
    async setPassword(password){
        await test.step(`Enter password ${password}`, async () => {
            await this.genericTextbox("Enter your password").fill(password);
        });
    }

    /**
     * @description - Click on the next button
     */
    async clickNext(){
        await test.step(`Click next`, async () => {
            await this.nextButton.click();
        });
    }

    /**
     * @description - Login to the application
     * @param {string} email - Email address to login with
     * @param {string} password - Password to login with
     */
    async login(email, password){
        await test.step(`Login with email ${email} and password ${password}`, async () => {
            await this.setEmail(email);
            await this.clickNext();
            await this.genericTextbox("Email or phone").waitFor({ state: "detached" });
            await this.setPassword(password);
            await this.clickNext();
        });
    }
    
    /**
     * @description - Search for an email
     * @param {string} subjectLine - Subject line to search for
     */
    async searchMail(subjectLine){
        await test.step(`Search for ${subjectLine}`, async () => {
            await this.genericTextbox("Search mail").fill(subjectLine);
            await WebUtils.performKeyPress(this.page, "Enter");
        });
    }
    
    /**
     * @description - Wait for results to load
     */
    async waitForInbox(){
        await test.step(`Wait for results to load`, async () => {
            await this.table.last().waitFor({ state: "visible" });
        });
    }

    /**
     * @description - Open the email
     */
    async openEmail(){
        await test.step(`Open the email`, async () => {
            await this.table.last().click();
        });
    }
     

    /**
     * @description - Click on the reply button
     */
    async clickOnReply(){
        await test.step(`Click on the reply button`, async () => {
            await this.replyButton.click();
        });
    }
    

    /**
     * @description - Set the reply message
     * @param {string} message - Reply message to set
     */
    async setReplyMessage(message){
        await test.step(`Set the reply message`, async () => {
            await this.messageBodyTextbox.fill(message);
        });
    }

    /**
     * @description - Click on the send button
     */
    async clickOnSend(){
        await test.step(`Click on the send button`, async () => {
            await this.sendButton.click();
        });
    }

    /**
     * @description - Send the reply
     * @param {string} message - Reply message to send
     */
    async sendReply(message){
        await test.step(`Send the reply`, async () => {
            await this.clickOnReply();
            await this.setReplyMessage(message);
            await this.clickOnSend();
        });
    }
}