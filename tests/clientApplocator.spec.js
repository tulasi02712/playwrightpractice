const {test,expect} = require('@playwright/test');

test('speciallocators test',async ({page})=>
{ 
const email = "tulasi10121999@gmail.com"
  const ProductName = "ZARA COAT 3"
  const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
console.log(await page.title());
await page.getByPlaceholder("email@example.com").fill('tulasi10121999@gmail.com');
await page.getByPlaceholder("enter your passsword").fill('Tulasi@12')
await page.getByRole("button",{name :'Login'}).click();
  await page.locator(".card-body b");
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
     await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name :' Add To Cart'}).click();
  //Zara coat3
  //await page.pause(); 
await page.getByRole("listitem").getByRole("button",{name :'Cart'}).click();
  await page.locator("div li").first().waitFor();
await page.getByText("ZARA COAT 3").isVisible();
await page.getByRole("button",{name :'Checkout'}).click();

await page.getByPlaceholder("Select Country").pressSequentially("ind");
await page.getByRole("button",{name :' India'}).nth(1).click();
await page.getByText('PLACE ORDER').click();
await page.getByText(" Thankyou for the order. ").isVisible();
 await expect(page.getByText("Thankyou for the order.")).toBeVisible();

  }
)