
const { test, expect, request } = require('@playwright/test');
const loginPayload = { userEmail: "tulasi10121999@gmail.com", userPassword: "Tulasi@12" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let token;
let orderId;

test.beforeAll(async () => {
   //LoginAPI
   const apicontext = await request.newContext();
   const loginResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
      {
         data: loginPayload
      }
   )
   //200,201
   expect((await loginResponse).ok()).toBeTruthy();
   const loginResponseJson = await loginResponse.json();
   token = loginResponseJson.token;
   console.log(token);
   //
   const orderResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
         data: orderPayload,
         headers:
         {
            'Authorization': token,
            'Content-Type': 'application/json'
         },
      })
   const orderResponseJson = await orderResponse.json();
   console.log(orderResponseJson);
   orderId = orderResponseJson.orders[0]

}
);


test('Place the order', async ({ page }) => {
   //js file- Login js, DashboardPage
   await page.addInitScript(value => {

      window.localStorage.setItem('token', value)
   }, token //parameter gives to value
   )

   await page.goto("https://rahulshettyacademy.com/client/");

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");

   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   await page.pause();
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

});





