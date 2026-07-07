const { expect } = require('@playwright/test');

class DDOPage {

    constructor(page) {

        this.page = page;

        /*  this.postRoleSwitch =page.getByRole(
                 'link',
                 {
                     name: 'Post Role Switch'
                 }
             );
  */
        this.post = page.locator(
            '[name="switchPostCode"]'
        );

        this.role = page.locator(
            '[name="selectedRoles"]'
        );

        this.submit = page.getByRole('button',
            {
                name: 'Submit'
            }
        );

        this.billPreparation = page.getByRole(
            'link',
            {
                name: '+ Bill Preparation and Submission'
            }
        );

        this.process = page.getByRole('link',
            {
                name: '+ Process'
            }
        ).nth(0);

        this.billVerificationDDO = page.locator('#main-menu').getByRole('link',
            {
                name:
                    'Bill Verification Worklist - DDO'
            }
        );
        this.billNumbers = page.getByRole('link').filter({ hasText: /AD\d+/ })

        this.frame = page.frameLocator(
            'iframe[name="fileDialog_frame"]'
        );
        this.hoaVerified = this.frame.locator(
            '#hoaVrfd'
        );

        this.recipientTab = this.frame.getByRole('link',
            {
                name:
                    'Recipient, Deduction, Amount'
            }
        );

        this.recipientVerified = this.frame.locator('#rcpntDtlsVrfd');

        this.amountVerified = this.frame.locator('#amntSmryVrfd');

        this.documentTab = this.frame.getByRole('link',
            {
                name:
                    'Document Verification'
            }
        )
        this.toPostFrame = page.frameLocator('iframe[name="bsDialogChild2_frame"]');
        this.sendToSubmit = this.toPostFrame.getByRole('button', { name: 'Submit' })
        this.Approve = this.frame.getByRole('button', { name: 'Approve and Send for Printing' })
        this.sendToSubmit = this.toPostFrame.getByRole('button', { name: 'Submit' })
        this.close = this.frame.getByRole('button', { name: 'Close' })
    }

    async DDOswitchRole(postCode, roleCode) {

        //await this.postRoleSwitch.click()
        await this.page.waitForTimeout(5000);

        await this.post.waitFor({
            state: 'visible',
            timeout: 60000
        });

        await this.post.selectOption(postCode);

        await this.role.waitFor({
          state: 'visible',
            timeout: 30000
        });

        await this.role.selectOption(roleCode);
        await expect(this.role).toHaveValue(roleCode);

        // Submit
        await Promise.all([
            this.page.waitForURL( /getHomePage/,
                {
                    timeout: 60000
                }
            ),
            this.submit.click()
        ]);
    }

    async DDOBillVerification() {

        await this.billPreparation.hover();

        await this.process.evaluate(
            el => el.click()
        );

        await this.billVerificationDDO.click()

    }

    async DDOFirstBill() {

        const billNo = await this.billNumbers.first().textContent();

        console.log("Processing:", billNo);

        await this.billNumbers.first().click();

        return billNo;

    }
    async DDOverifyGeneralDetails() {

        await this.hoaVerified.check()

    }
    async DDOverifyRecipient() {

        await this.recipientTab.click()

        await this.recipientVerified.check()

        await this.amountVerified.check()

    }
    async DDOverifyDocuments() {

        await this.documentTab.click()

        const documents = this.frame.locator('input[id^="vrfdDoc"]')

        const count = await documents.count()

        for (let i = 0; i < count; i++) {

            await documents.nth(i).check()

        }
    }

    //approve and print bill

    async DDOapproveprintBill(postCode) {
        this.page.on('dialog', async dialog => {

        //console.log(dialog.message());

        await dialog.accept();
        })

        this.Approve.click()
        await expect(
            this.page.locator(
                'iframe[name="bsDialogChild2_frame"]'
            )
        ).toBeVisible();

            await this.toPostFrame.getByRole('row', {
        name: /MALA B/i
    })
    .locator('input[type="radio"]')
    .click();
            
        // Submit
        await this.sendToSubmit.click();
     console.log(await this.frame.locator('#tokenNoVal')).textContent()
       
        await this.close.click();

    }

}


module.exports = { DDOPage }