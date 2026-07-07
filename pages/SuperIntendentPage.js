const { expect } = require('@playwright/test');

class SuperintendentPage {

    constructor(page) {

        this.page = page;

       /*  this.postRoleSwitch =page.getByRole(
                'link',
                {
                    name: 'Post Role Switch'
                }
            );
 */
        this.post =page.locator(
                '[name="switchPostCode"]'
            );

        this.role =page.locator(
                '[name="selectedRoles"]'
            );

        this.submit =page.getByRole('button',
                {
                    name: 'Submit'
                }
            );

        this.billPreparation =page.getByRole(
                'link',
                {
                    name: '+ Bill Preparation and Submission'
                }
            );

        this.process =page.getByRole('link',
                {
                    name: '+ Process'
                }
            );

        this.billVerificationSuperintendent =page.locator('#main-menu')
.getByRole('link',
                {
                    name:
                    'Bill Verification Worklist - Superintendent'
                }
            );
            this.billNumbers =page.getByRole('link').filter({hasText:/AD\d+/});

        this.frame =page.frameLocator(
                'iframe[name="fileDialog_frame"]'
            );
        this.hoaVerified =this.frame.locator(
                '#hoaVrfd'
            );

        this.recipientTab = this.frame.getByRole('link',
                {
                    name:
                    'Recipient, Deduction, Amount'
                }
            );

        this.recipientVerified =this.frame.locator('#rcpntDtlsVrfd');

        this.amountVerified =this.frame.locator('#amntSmryVrfd');

        this.documentTab =this.frame.getByRole('link',
                {
                    name:
                    'Document Verification'
                }
            )
            this.checklist=this.frame.getByRole('link', { name: 'Checklist Verifications' });
            this.forward=this.frame.getByRole('button', { name: 'Forward to DDO', exact: true })
            this.close=this.frame.getByRole('button', { name: 'Close' })
        }
        
async switchRole(postCode,roleCode){

    //await this.postRoleSwitch.click()
    await this.page.waitForTimeout(5000);

await this.post.waitFor({

    state:'visible',

    timeout:60000

});

await this.post.selectOption(postCode);

await this.role.waitFor({

    state:'visible',

    timeout:30000

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

            this.submit.click()

        ]);
    }

async openBillVerification(){

    await this.billPreparation.hover();

    await this.process.evaluate(

        el => el.click()

    );

    await this.billVerificationSuperintendent.click()

}
/* async openBill(billNo){

await this.page.getByRole('gridcell',
{
name: billNo,

exact:true})

.click()

} */
async openFirstBill(){

const billNo =await this.billNumbers.first().textContent();

console.log("Processing:",billNo);

await this.billNumbers.first().click();

return billNo;

}
async verifyGeneralDetails(){

await this.hoaVerified.check()

}
async verifyRecipient(){

await this.recipientTab.click()

await this.recipientVerified.check()

await this.amountVerified.check()

}
async verifyDocuments(){

await this.documentTab.click()

const documents =this.frame.locator('input[id^="vrfdDoc"]')

const count =await documents.count()

for(let i=0;i<count;i++){

await documents.nth(i).check()
}
await this.checklist.click()
}

async verifychecklist() {

    const yesRadios = this.frame.locator(
        'input[id^="vrfdSupDocs"][value="1"]'
    );

    const count = await yesRadios.count();

    for (let i = 0; i < count; i++) {

        await yesRadios.nth(i).check();

    }
    const yesRadio = this.frame.locator(
        'input[id^="vrfdChkLst"][value="1"]'
    );

    const count1 = await yesRadio.count();

    for (let i = 0; i < count1; i++) {

        await yesRadio.nth(i).check();
}
this.page.on('dialog', async dialog => {

        //console.log(dialog.message());

        await dialog.accept();

    })

await this.forward.click();
await this.page.pause()

 await expect(
this.page.locator(
            'frame[name="fileDialog_frame"]'
        )
    ).toBeVisible();

//await this.close.click();

}
}

module.exports={SuperintendentPage}