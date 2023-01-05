const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given("I visit login page", async function() {
    await loginPage.navigateToLoginScreen()
})

When("I fill the login form with valid credentials", async function() {
    await loginPage.submitLoginForm()
})

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function(username, password) {
    await loginPage.submitLoginFormWithParameters(username, password)
})

Then("I should see the home page", async function() {
    await loginPage.assertUserIsLoggedIn()
})

Then("item should not be visible", async function() {
    await loginPage.waitForSpecificItem()
})

