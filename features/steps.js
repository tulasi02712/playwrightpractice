const assert = require('assert')
const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../Pageobjects/POManager');
const { expect } = require('@playwright/test')
const playwright = require('@playwright/test')

Given('login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    this.POManager = new POManager(page);
    const products = page.locator(".card-body");
    const loginpage = this.POManager.getLoginPage()
    await loginpage.goTo();
    await loginpage.validLogin(username, password);

});

When('Add {string} to cart', async function (productName) {
    this.dashboardPage = this.POManager.getDashboardPage();
    await this.dashboardPage.SearchProductAddtocart(productName);
    await this.dashboardPage.navigatetoCart();
});

Then('Verfiy {string} is added to cart', async function (productName) {
    const cartPage = this.POManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and place the Order', async function () {
    const ordersReviewPage = this.POManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
});

Then('Verfiy Order present in OrderHistory', async function () {
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.POManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
