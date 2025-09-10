export class BasePage {
    
    constructor(page){
        this.page = page;
    }

    /**
     * @description - Navigate to the application
     */
    async loadApp(){
        await this.page.goto(this.url);
    }
}