class HomePage {

    constructor(page) {

        this.page = page;

        this.mainMenu =
            page.locator('#main-menu');

    }

    async clickCreateBill() {

        await this.page.getByRole('link', { name: '+ Bill Preparation and Submission' }).hover()

        await this.page
            .waitForTimeout(1000);

        await this.page.getByRole('link', {name: '+ Process'})
    .evaluate(el => el.click());

        await this.page
            .waitForTimeout(1000);

        await this.mainMenu.getByRole('link', { name: 'Create Bill' }).click();

    }

}

module.exports = { HomePage };