# Getting Started

## Quick Setup

### 1. Clone the Repository
```bash
git clone https://github.com/pradyumnagalnimkar/aumnitechworks-assignment.git
cd aumnitechworks-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright
```bash
npx playwright install
```

### 4. Configure Environment
Create `test.env` file at root level with credentials provided over email:
```env
REDDIT_URL=https://www.reddit.com/
GMAIL_URL=https://www.gmail.com/
GMAIL_EMAIL=your-email@gmail.com
GMAIL_PASSWORD=your-password
```

### 5. Run Tests
```bash
# Run all tests
npx playwright test

# Run with browser visible
npx playwright test --headed

# Run specific test
npx playwright test tests/reddit.spec.js

# Generate and view test report
npx playwright show-report
```


## Assignment Execution Video
https://drive.google.com/file/d/1XyBtUKQjEu9YpFzdC5JOKmVXVBvvk3zp/view?usp=sharing

## Assignment Report
zip folder with name `assignment-report.zip` is present in root level.
To open the report, unzip the folder and open the `index.html` file in your browser.

## Project Structure

```
aumnitechworks-assignment/
├── config/
│   └── test.env                 # Environment variables (Gmail credentials, URLs)
├── pages/
│   ├── gmailPage.js            # Gmail page object model
│   └── redditPage.js           # Reddit page object model
├── tests/
│   ├── gmail.spec.js           # Gmail test cases
│   └── reddit.spec.js          # Reddit test cases
├── utils/
│   └── web-utils.js            # Utility functions (scrolling, etc.)
├── playwright.config.js        # Playwright configuration
└── package.json               # Dependencies and scripts
```

## Test Cases

### Reddit Test (`tests/reddit.spec.js`)
- Navigates to r/learnprogramming subreddit
- Fetches titles and comments from posts 40-45
- Validates exactly 6 posts are retrieved
- Prints results to console

### Gmail Test (`tests/gmail.spec.js`)
- Automated Gmail login using environment credentials
- Performs email operations (implementation specific)

## Usage

1. **Configure credentials** in `test.env`
2. **Run specific tests**:
   ```bash
   npx playwright test tests/reddit.spec.js
   npx playwright test tests/gmail.spec.js
   ```
3. **View results** in HTML report or console output

## Areas to Improve

1. **Browser Initialization**: Implement singleton pattern in base class for browser creation to avoid multiple config imports
2. **Storage State Management**: Check for existing state.json file before login - use if exists, create new if not
3. **CI/CD Integration**: 
   - Add custom reports (Allure), utility methods to attach screenshots, videos, traces & logs to reports and test steps
   - Create Jenkinsfile for automated CI execution pipeline
