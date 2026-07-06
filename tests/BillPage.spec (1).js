const { test } =require('@playwright/test');

const { LoginPage } =require('../pages/LoginPage');

const {RoleSelectionPage} =require('../pages/RoleSelectionPage');

const { HomePage } =require('../pages/HomePage');

const {BillCreationPage}= require('../Pages/BillCreationPage');

    const {
    billData,
    orderData,
    budgetData,DCData
} = require('../Testdata/billData'); 

const {userData,
    SuperintendentData,
    DDOData} = require('../testdata/userData');
const {SuperintendentPage} = require('../Pages/SuperIntendentPage');
const {DDOPage} = require('../Pages/DDOPage');
const { PrintbillPage } = require('../Pages/PrintbillPage');
const { BillsubmissionPage} = require('../Pages/BillsubmissionPage')

test('Create Bill', async ({ page, context }) => {

    const loginPage =new LoginPage(page,context);

    const newPage =await loginPage.login(userData.username, userData.password);

    /* const rolePage =new RoleSelectionPage(newPage);

    await rolePage.selectPostAndRole(userData.postCode,userData.roleCode);

    const homePage =new HomePage(newPage );

    await homePage.clickCreateBill();

    const billPage =new BillCreationPage(newPage);

    await billPage.createBill( billData);

    await billPage.enterOrderDetails( orderData );

    await billPage.selectBudgetLine(budgetData);
 */
/* console.log("URL:", await newPage.url());

console.log(
    "accNumber count:",
    await newPage.locator('#accNumber').count()
);

await billPage.selectAccountDetails();

//await newPage.pause();
//DC details
await billPage.fillDCBillDetails( DCData);

await billPage.forwardBill(userData.postCode)
await billPage.verifyBillCreated();
 */
/* const verifyPage =new SuperintendentPage(newPage);

await verifyPage.switchRole(SuperintendentData.postCode,SuperintendentData.roleCode);
await verifyPage.openBillVerification()
await verifyPage. openFirstBill()
await verifyPage.verifyGeneralDetails()
await verifyPage.verifyRecipient()
await verifyPage.verifyDocuments()
await verifyPage.verifychecklist()
 */

/* const Ddopage = new DDOPage(newPage);
await Ddopage.DDOswitchRole(DDOData.postCode,DDOData.roleCode);
await Ddopage.DDOBillVerification()
await Ddopage.DDOFirstBill()
await Ddopage.DDOverifyGeneralDetails()
await Ddopage.DDOverifyRecipient()
await Ddopage.DDOverifyDocuments()
await Ddopage.DDOapproveprintBill() */
 
/* const printbill= new PrintbillPage(newPage)
await printbill.switchRole(userData.postCode,userData.roleCode)
await printbill.billprint()
await printbill.Token()
await printbill.enterPageCount()
await printbill.verifyTotalPages()
 */

const submitbill=new BillsubmissionPage(newPage)
await submitbill.switchRole(DDOData.postCode,DDOData.roleCode)
await submitbill.submitbill()
await submitbill.Token()
await submitbill.sendtotreasury()
});