const { expect } = require('@playwright/test');

class BillsubmissionPage {

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

        this.submissionbill = page.locator('#main-menu').getByRole('link',
            {
                name:
                    'Bill Ready for Submission Worklist'
            }
        );
this.frame=page.frameLocator('iframe[name="fileDialog_frame"]')
this.send=this.frame.getByRole('button', { name : 'Send To Treasury' })

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
 async submitbill(){

    await this.billPreparation.hover();

    await this.process.evaluate(

        el => el.click()

    );

    await this.submissionbill.click()
}

async Token() {

   const tokenCell = this.page.locator('td.leftAlignment a' ).first()
   
const tokenNo =await tokenCell.textContent();

//console.log(tokenNo);

await tokenCell.click();
}

async sendtotreasury(){
  
this.page.on('dialog', async dialog => {
        await dialog.accept();
    })

await this.send.click()
}
}


module.exports={BillsubmissionPage}