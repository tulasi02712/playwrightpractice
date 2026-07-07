const { expect } = require('@playwright/test');

class PrintbillPage {

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

        this.printbill = page.locator('#main-menu').getByRole('link',
            {
                name:
                    'Bill for Printing Worklist'
            }
        );

this.frame=page.frameLocator('iframe[name="fileDialog_frame"]')
this.numberOfPages =this.frame.locator('input[id^="pageCnt"]')

this.forward=this.frame.getByRole('button', { name: 'Forward to DDO', exact: true })
this.close=this.frame.getByRole('button', { name: 'Close' })
   
}
            
async switchRole(postCode,roleCode){

    //await this.postRoleSwitch.click()
    await this.page.waitForTimeout(5000);

await this.post.waitFor({

    state:'visible',

    timeout:30000

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

    async billprint(){

    await this.billPreparation.hover();

    await this.process.evaluate(

        el => el.click()

    );

    await this.printbill.click()
}

async Token() {

   const tokenCell = this.page.locator('td.leftAlignment a' ).first()
   
const tokenNo =await tokenCell.textContent();

//console.log(tokenNo);

await tokenCell.click();
}

async enterPageCount() {

await expect(
    this.frame.locator('input[id^="pageCnt"]').first()
).toBeVisible({
    timeout: 60000
});

await this.page.pause();
     const count = await this.numberOfPages.count();
     
    for (let i = 0; i < count; i++) {

       const input = this.numberOfPages.nth(i);
        await input.click();
        await input.type('1');
    }
}
async verifyTotalPages() {

    const pageInputs =this.frame.locator(
            'input[id^="pageCnt"]'
        );

    const count1 =await pageInputs.count();

    let total = 0;

    for (let i = 0; i < count1; i++) {

        total += Number(await pageInputs.nth(i).inputValue());
    }

console.log(`Total pages = ${total}`);
this.page.on('dialog', async dialog => {
        await dialog.accept();
    })

this.forward.click()
this.close.click();
}
}
    

module.exports={ PrintbillPage }