class OrdersReviewPage {
    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.countryOptions = page.locator(".ta-results button");
        this.submitButton = page.locator(".action__submit");
        this.confirmationText = page.locator(".hero-primary");
        this.orderIdText = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async searchCountryAndSelect(searchText, countryName) {
        await this.countryInput.fill(searchText);
        await this.page.waitForSelector(".ta-results");
        const count = await this.countryOptions.count();
        for (let i = 0; i < count; ++i) {
            const text = (await this.countryOptions.nth(i).textContent()).trim();
            if (text === countryName) {
                await this.countryOptions.nth(i).click();
                return;
            }
        }
        throw new Error(`Country "${countryName}" not found`);
    }

    async SubmitAndGetOrderId() {
        await this.submitButton.click();
        await this.confirmationText.waitFor({ state: 'visible' });
        return await this.orderIdText.textContent();
    }
}

module.exports = { OrdersReviewPage };
