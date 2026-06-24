class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.ProductText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.ordersButton = page.locator("button[routerlink*='myorders']");
    }

    async SearchProductAddtocart(productName) {
        await this.ProductText.first().waitFor();
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                return;
            }
        }
        throw new Error(`Product "${productName}" not found on dashboard`);
    }

    async navigatetoCart() {
        await this.cart.click();
    }

    async navigateToOrders() {
        await this.ordersButton.click();
    }
}
module.exports = { DashboardPage } 