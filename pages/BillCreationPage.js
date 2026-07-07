const { expect } = require('@playwright/test');

class BillCreationPage {

    constructor(page) {
   this.page = page;
        // Bill Details
        this.billSector = page.locator('#blSector');
        this.billType = page.locator('#billType');
        this.claimSystem = page.locator('#blClaimSyscd');
        //this.pfmsBillType = page.locator('#pfmsBillType');
        this.openBtn = page.getByRole('button', { name: 'Open' });

        // Order Details
        this.orderNo = page.locator('#orderNo');

        this.offlineOrderRadio =page.locator('#sanctOffline');

        this.offlineOrderNo = page.locator('#offlineOrderNo');

        this.offlineOrderDate = page.getByRole('textbox', { name: 'Enter date in dd/mm/yyyy' })

        this.open=page.locator('#btnSelectToOpen');
        this.processingPopup =page.getByText('Your Request is in progress');

        // Budget Details
        this.budgetLine =page.locator('#bdgtLineSyscd');

        this.budgetFundReleased =page.locator('#bdgtFundReleased');

        this.accNumber =page.locator('#accNumber');

this.bankAccName =page.locator('#bankAccName');

this.componentId =page.locator('#componentId');

this.subComponentId = page.locator('#subComponentId');

    this.DCdetails=page.getByRole('link', { name: 'DC Bill Details' })
    this.voucherNo=page.locator('#subVoucherNo');
    this.date=page.getByRole('textbox', { name: 'Enter date in dd/mm/yyyy' })
    this.description=page.locator('#descOfexp')
    this.amount=page.locator('#subVoucherAmt')
    this.recipientCode =page.locator('#rcpntCodeCTS5');
//getByRole('button', { name: 'Add Another Recipient' })

this.add=page.getByRole('button', { name: 'Add', exact: true })
this.save=page.getByRole('link', { name: 'Save' });
this.summary=page.getByRole('link', { name: 'Recipient, Deduction, Amount' });
this.paymentmode=page.locator('#pmntModId')

this.forward=page.getByRole('link', { name: 'Forward', description: 'Forward', exact: true })
this.toPostFrame =page.frameLocator('iframe[name="bsDialogChild2_frame"]');
this.sendToSubmit =this.toPostFrame.getByRole('button', {name: 'Submit' })
    this.billInfoFrame =page.frameLocator('iframe[name="fileDialog_frame"]');

this.billForwardMsg =this.billInfoFrame.getByText('Bill has been forwarded successfully.');

//this.billNumber =this.billInfoFrame.getByRole('cell').nth(1);      // second cell contains AD number

this.closeBillPopup =this.billInfoFrame.getByRole('button', { name: 'Close' });

}
async selectFirstValidOption(locator) {

    const value = await locator
        .locator('option')
        .nth(0)
        .getAttribute('value');

    await locator.selectOption(value);

}
async fillDCBillDetails(DCData) {

    // Open DC Bill Details

    await this.DCdetails.click();

    // Voucher No

    await this.voucherNo.fill(
        DCData.subVoucherNo
    );

    // Today's Date

    const today = new Date();

    const formattedDate =
        today.toLocaleDateString(
            'en-GB'
        ); // dd/mm/yyyy

    await this.date.fill(
        formattedDate
    );

    // Description

    await this.description.fill(
        DCData.descOfexp
    );
/* console.log(DCData);

console.log(typeof DCData.subVoucherAmt);
console.log(DCData.subVoucherAmt);

console.log(typeof DCData.recipientcode);
console.log(DCData.recipientcode); */
    // Amount

    await this.amount.fill(
        DCData.subVoucherAmt
    );

    // Recipient Code
await this.recipientCode.type(
    DCData.recipientCode,
    { delay: 100 }
);
await this.recipientCode.click()
    // Select suggestion
   const suggestion=this.page.getByText(
            DCData.recipientCode,
            {
                exact: true
            }
        );
        await expect(suggestion).toBeVisible({
    timeout: 10000
});
       await suggestion.click();
    // Add
    await this.add.click();
}
    //summary
    async forwardBill(postCode) {

    await this.summary.click();
    await this.paymentmode.selectOption('e-Payment');

    // Handle browser alert

    this.page.on('dialog', async dialog => {

        //console.log(dialog.message());

        await dialog.accept();

    });
await this.forward.click();
// Select matching post
   
    await expect(
this.page.locator(
            'iframe[name="bsDialogChild2_frame"]'
        )
    ).toBeVisible();

    await this.toPostFrame
        .locator(
            `input[type="radio"][value="${postCode}"]`
        )
        .check();
    // Submit
    await this.sendToSubmit.click();
    await this.page.pause();

}

    async createBill(billData) {

        await this.billSector
            .selectOption(billData.sector);

        await this.billType
            .selectOption(billData.billType);

        await this.claimSystem
            .selectOption(billData.claimType);

        //await this.pfmsBillType.selectOption(billData.pfmsType);

        await this.openBtn.click();

    }

    async enterOrderDetails(orderData) {

        await this.orderNo
            .fill(orderData.orderNo);

        await this.offlineOrderRadio
            .check();

        await expect(
            this.offlineOrderRadio
        ).toBeChecked();

        await this.offlineOrderNo
            .fill(orderData.offlineOrderNo);

    // Today's Date

    const today = new Date();

    const formattedDate =
        today.toLocaleDateString(
            'en-GB'
        ); // dd/mm/yyyy

    await this.offlineOrderDate.fill(
        formattedDate
    );
        await this.offlineOrderDate.click();

        await this.open.click();

/* // Wait for loading popup to appear

await this.processingPopup.waitFor({
    state: 'visible',
    timeout: 30000
});

// Wait for popup to disappear

await this.processingPopup.waitFor({
    state: 'hidden',
    timeout: 120000
}); */
    
    }
    async selectBudgetLine(budgetData) {
        await this.budgetLine
        .scrollIntoViewIfNeeded();

    // Wait till visible

    await expect(
        this.budgetLine
    ).toBeVisible({
        timeout: 60000
    });

    // Print options in terminal

        await this.budgetLine
            .selectOption(
                budgetData.budgetCode
            );

        await expect(
            this.budgetFundReleased
        ).toHaveValue(
            /^\d+$/
        );

    }
   
    async selectAccountDetails() {

    // Verify Fund Released has some numeric value

    await expect(
        this.budgetFundReleased
    ).toHaveValue(/^\d+$/);

    // DDO Account Number
  /* console.log(
    "Enabled:",
    await this.accNumber.isEnabled()
); */

    await this.accNumber.selectOption({
    index: 0
});

/* console.log(
    "Bank Options:",
    await this.bankAccName
        .locator('option')
        .allTextContents()
);  */
    // Account Holder Name

    await this.selectFirstValidOption(
        this.bankAccName
    );

    // Component
    await this.selectFirstValidOption(
        this.componentId
    );
    // Sub Component
    await this.selectFirstValidOption(
        this.subComponentId
    );

};

  async verifyBillCreated() {

await expect(this.billInfoFrame.getByText('Bill has been forwarded successfully.')).toBeVisible();

    const billNo =await this.billInfoFrame.locator('input[name="blNoVal"]');

    console.log(
        "Bill Number:",
        billNo
    );

    expect(billNo.trim()
    ).toMatch(
        /^AD\d+$/
    );

        await this.close.click();
    
} 
}


module.exports = {BillCreationPage};