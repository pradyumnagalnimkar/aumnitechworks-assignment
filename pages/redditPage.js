class RedditPage {
    constructor(page){
        this.page = page;
        this.searchPostTextbox = this.page.locator("reddit-search-large input[autocomplete='off']");
        
    }

    /**
     * Navigate to the Reddit homepage
     */
    async goto(){
        await this.page.goto("https://www.reddit.com/");
    }

    /**
     * 
     * @param {*} subreddit - Subreddit to search for
     */
    async search(subreddit){
        await this.searchPostTextbox.fill(subreddit);
        await this.page.keyboard.press("Enter");
    }


}