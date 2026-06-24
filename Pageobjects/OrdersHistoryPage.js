class OrdersHistoryPage {
    constructor(page) {
        this.page = page;
        this.orderRows = page.locator("tbody tr");
        this.orderDetailText = page.locator(".col-text");
    }

    async searchOrderAndSelect(orderId) {
        await this.orderRows.first().waitFor();
        const rowCount = await this.orderRows.count();
        for (let i = 0; i < rowCount; ++i) {
            const rowOrderId = await this.orderRows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.orderRows.nth(i).locator("button").first().click();
                return;
            }
        }
        throw new Error(`Order "${orderId}" not found in order history`);
    }

    async getOrderId() {
        return await this.orderDetailText.textContent();
    }
}

module.exports = { OrdersHistoryPage };
