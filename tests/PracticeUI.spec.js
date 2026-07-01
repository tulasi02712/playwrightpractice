const {test, expect} = require('@playwright/test');

test('sql search playwright test',async({page})=>
{

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
await page.fill('textarea[name="q"]','SQL Testing');
await expect(page).toHaveURL(/google/);
await page.keyboard.press('Enter');
await expect(page).toHaveURL(/search/);


})


test('login test',async({page})=>
{
await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator("button[type = 'submit']").click();
  await expect(page.locator("#flash")).toContainText('You logged into a secure area!');
  const message= await page.locator("#flash").textContent();
console.log(message);

}
)


//Loader Handling

test('Loader handling', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.click('text=Start');

  // Step 1: Wait for loader to disappear
  await expect(page.locator('#loading')).toBeHidden();

  // Step 2: Validate content
  await expect(page.locator('#finish'))
    .toHaveText('Hello World!');

});
