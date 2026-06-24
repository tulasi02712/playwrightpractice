const {test,expect} = require("@playwright/test")

test('popup val test', async({page})=>
{
page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
await page.pause();
page.on('dialog',dialog =>dialog.accept());//dialog.dismiss()
await page.locator("#confirmbtn").click();
await page.locator(".mouse-hover").hover();
const framepage =  await page.frameLocator("#courses-iframe");
await framepage.locator("li a[href*='lifetime-access']:visible").click();
const textcheck= await framepage.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);


}
)

