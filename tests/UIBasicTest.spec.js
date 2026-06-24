const {test, expect,request} = require('@playwright/test');

test('Browser Context Playwright test',async ({browser})=>
{
//chrome - cookies/plugins
const context = await browser.newContext();
const page = await context.newPage();
const Username = page.locator('#username');
const password = page.locator("[type = 'password']");
const signIn = page.locator('#signInBtn');
const cardTitles=  page.locator(".card-body a");
page.on('request',request=> console.log(request.url()));//print all urls when any call is made
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//css selector type,fill

//await page.locator('#username').fill("rahulshetty");//for typing in edit box
await Username.fill("rahulshetty");
await password.fill("Learning");
await signIn.click(); //To signin
//signin  for incorrect user/pswd  [style*='none'] --Partial filling

console.log(await page.locator("[style*='block']").textContent());//extract n print the text
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//fill/Type
await Username.fill("");//clearing existing values
await Username.fill("rahulshettyacademy");
await password.fill("");
await page.locator("[type = 'password']").fill("Learning@830$3mK2");
await signIn.click();
console.log(await cardTitles.first().textContent());//1st one --wait
console.log(await cardTitles.nth(1).textContent());//2nd one
const alltitles=await cardTitles.allTextContents();//written all in an array, no async
console.log(alltitles);
});


test('Page Playwright test',async ({page})=>
{
//chrome - cookies/plugins
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://www.google.com/");
//get title -assertion
console.log(await page.title());
await expect(page).toHaveTitle("Google");//to know title is correct
})


test('UI Control test',async ({page})=>
{
const Username = page.locator('#username');
const password = page.locator("[type = 'password']");
const signIn = page.locator('#signInBtn');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//css selector type,fill

//await page.locator('#username').fill("rahulshettyacademy");//for typing in edit box
await Username.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");
const dropdown =  page.locator("select.form-control");
const doclink= page.locator("[href*='documents-request']");
/* await dropdown.selectOption("stud");
dropdown.selectOption("teach"); */
await dropdown.selectOption("consult");
 await page.locator('.radiotextsty').last().click();
await page.locator("#okayBtn").click();
//assertions
console.log( await page.locator('.radiotextsty').last().isChecked());
await expect(page.locator('.radiotextsty').last()).toBeChecked();//checked action performed at the end,outside of expect so keep await outside
//await page.pause();
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
// check the uncheck assertion
expect(await page.locator("#terms").isChecked()).toBeFalsy(); //checked action performed inside expect so give await inside
await expect(doclink).toHaveAttribute("class","blinkingText");

}
)

test('@child window handle',async({browser})=>
{
const context= await browser.newContext();
const page = await context.newPage();
const Username = page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const doclink = page.locator("[href*='documents-request']");
// Create promise BEFORE click
 const [newPage]=await Promise.all([
 context.waitForEvent('page'),//listen for any new page --pending,rejecting,fulfilled
 doclink.click(),//new page is opened
 ])
await newPage.waitForLoadState();
const text = await newPage.locator(".red").textContent();
//console.log(text);
const ArrayText= text.split("@")//split text before n after @
const domain= ArrayText[1].split(" ")[0]//text before space 
//console.log(domain);
await page.locator("#username").fill(domain);
//await page.pause();
console.log(await page.locator("#username").inputValue());
}
) 