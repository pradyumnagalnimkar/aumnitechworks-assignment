export class BasePage {
    
    constructor(page){
        this.page = page;
    }

    /**
     * @description - Navigate to the application
     */
    async openApp(){
        await this.page.goto(this.url);
    }
}