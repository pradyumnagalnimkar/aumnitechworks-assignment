# Aumnitechworks Playwright Assignment

A comprehensive Playwright testing project demonstrating end-to-end testing capabilities with modern web applications.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Examples](#test-examples)
- [Configuration](#configuration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🎯 Overview

This project showcases Playwright testing framework capabilities with practical examples including:

- **Basic Web Testing**: Title verification and navigation testing
- **Todo App Testing**: Comprehensive testing of a todo application with CRUD operations
- **Cross-browser Testing**: Tests run on Chromium, Firefox, and WebKit
- **Modern Testing Practices**: Page Object Model, test organization, and best practices

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16 or higher
- **npm**: Version 7 or higher (comes with Node.js)
- **Git**: For version control

### Verify Installation

```bash
node --version
npm --version
git --version
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pradyumnagalnimkar/aumnitechworks-assignment.git
   cd aumnitechworks-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Verify installation**
   ```bash
   npx playwright --version
   ```

## 📁 Project Structure

```
aumnitechworks-assignment/
├── tests/                    # Main test files
│   └── example.spec.js      # Basic Playwright examples
├── tests-examples/          # Extended test examples
│   └── demo-todo-app.spec.js # Comprehensive todo app tests
├── playwright.config.js     # Playwright configuration
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## 🧪 Running Tests

### Quick Start with npm Scripts

The project includes convenient npm scripts for common testing scenarios:

```bash
# Run all tests
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run tests with UI mode (interactive)
npm run test:ui

# Generate HTML test report
npm run test:report

# Run tests in specific browsers
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run specific test files
npm run test:basic      # Basic examples
npm run test:todo       # Todo app tests

# Install Playwright browsers
npm run test:install

# View test report
npm run test:show-report
```

### Direct Playwright Commands

You can also use Playwright commands directly:

```bash
# Run all tests
npx playwright test

# Run tests in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run specific test file
npx playwright test tests/example.spec.js
npx playwright test tests-examples/demo-todo-app.spec.js

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug

# Generate test report
npx playwright test --reporter=html
```

## 📚 Test Examples

### Basic Web Testing (`tests/example.spec.js`)

The basic example demonstrates:
- **Title Verification**: Checking if a page has the expected title
- **Navigation Testing**: Clicking links and verifying page changes

```javascript
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

### Todo App Testing (`tests-examples/demo-todo-app.spec.js`)

The comprehensive todo app tests cover:

- **CRUD Operations**: Create, Read, Update, Delete todos
- **State Management**: Local storage verification
- **User Interactions**: Clicking, typing, keyboard shortcuts
- **Data Persistence**: Reload and verify data persistence
- **Routing**: Navigation between different views (All, Active, Completed)
- **Edge Cases**: Empty inputs, escape key handling, trimming whitespace

Key test scenarios:
- Adding multiple todo items
- Marking items as complete/incomplete
- Editing existing todos
- Filtering todos by status
- Clearing completed items
- Data persistence across page reloads

## ⚙️ Configuration

The project uses `playwright.config.js` for configuration:

### Key Features:
- **Multi-browser Testing**: Chromium, Firefox, WebKit
- **Parallel Execution**: Tests run in parallel for faster execution
- **Retry Logic**: Automatic retries on failure (2 retries in CI)
- **HTML Reporter**: Detailed test reports
- **Trace Collection**: Debug traces for failed tests

### Customization Options:

1. **Add Base URL**: Uncomment and set `baseURL` for your application
2. **Enable Web Server**: Uncomment `webServer` section to start a local server
3. **Mobile Testing**: Uncomment mobile device configurations
4. **Environment Variables**: Use dotenv for environment-specific settings

## 🏆 Best Practices

### Test Organization
- Group related tests using `test.describe()`
- Use descriptive test names
- Implement setup/teardown with `beforeEach`/`afterEach`

### Locator Strategies
- Prefer semantic locators (`getByRole`, `getByText`)
- Use test IDs for stable element selection
- Avoid CSS selectors when possible

### Data Management
- Use constants for test data
- Implement helper functions for common operations
- Verify application state, not just UI changes

### Performance
- Use `page.waitForFunction()` for async operations
- Implement proper waiting strategies
- Avoid hard-coded timeouts

## 🔍 Troubleshooting

### Common Issues

1. **Browser Installation Failed**
   ```bash
   npx playwright install --force
   ```

2. **Tests Timing Out**
   - Check network connectivity
   - Verify target URLs are accessible
   - Increase timeout in configuration

3. **Element Not Found**
   - Use Playwright Inspector: `npx playwright test --debug`
   - Check element selectors
   - Verify page load completion

4. **Permission Issues (macOS/Linux)**
   ```bash
   sudo npx playwright install
   ```

### Debug Mode
```bash
# Run with debug mode
npx playwright test --debug

# Run specific test in debug mode
npx playwright test tests/example.spec.js --debug
```

### Generate Trace
```bash
# View trace for failed tests
npx playwright show-trace test-results/trace.zip
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#troubleshooting)
2. Review [Playwright documentation](https://playwright.dev/docs/intro)
3. Open an [issue](https://github.com/pradyumnagalnimkar/aumnitechworks-assignment/issues)

---

**Happy Testing! 🎭**