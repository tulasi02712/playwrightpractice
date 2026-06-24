class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator("div li");
        this.productNameLocator = (productName) => page.locator(`h3:has-text("${productName}")`);
        this.checkoutButton = page.locator("text=Checkout");
    }

    async VerifyProductIsDisplayed(productName) {
        await this.cartItems.first().waitFor();
        const isVisible = await this.productNameLocator(productName).isVisible();
        if (!isVisible) {
            throw new Error(`Product "${productName}" not found in cart`);
        }
    }

    async Checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };
