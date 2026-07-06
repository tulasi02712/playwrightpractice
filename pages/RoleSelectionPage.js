const { expect } = require('@playwright/test');

class RoleSelectionPage {

    constructor(page) {

        this.page = page;

        this.post = page.locator(
            '[name="switchPostCode"]'
        );

        this.role = page.locator(
            '[name="selectedRoles"]'
        );

        this.submitBtn = page.getByRole(
            'button',
            { name: 'Submit' }
        );
    }

    async selectPostAndRole(postCode, roleCode) {

        // Wait until redirected to Post/Role page
        console.log(
    "Current URL:",
    await this.page.url()
);

await this.page.waitForTimeout(5000);

await this.post.waitFor({

    state:'visible',

    timeout:60000

});

await this.post.selectOption(postCode);

await this.role.waitFor({

    state:'visible',

    timeout:50000

});

await this.role.selectOption(roleCode);

        // Submit
        await Promise.all([
            this.page.waitForURL(
                /getHomePage/,
                {
                    timeout: 60000
                }
            ),
            this.submitBtn.click()
        ]);

    }
}

module.exports = { RoleSelectionPage };