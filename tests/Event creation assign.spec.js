const {test,expect} = require("@playwright/test")

test('Event Creation', async({page})=>
    {
const email= "atulasi101299@gmail.com";
const EventName= await page.locator("#event-title-input");
await page.goto("https://eventhub.rahulshettyacademy.com");
await page.locator("#email").fill(email);
await page.locator("#password").fill('Tulasi@12');
await page.locator("#login-btn").click();
await page.getByRole("button",{name : 'Browse Events →'}).isVisible();

await page.locator("#nav-events").click();
const Event = await page.locator('a:has-text("Add New Event")');
await Event.click();
await page.getByRole("button",{name : 'Admin'});
 await expect(page.locator('h2:has-text("+ New Event")')).toBeVisible();
await EventName.fill('Women Empowerment Summit');

const dropdown= page.locator("#category").selectOption('Conference');
await page.locator("#city").fill('Hyderabad');
await page.locator("#venue").fill('Banjarahills');
// CSS id selector can't contain unescaped special chars like "(" and "$".
// Use an attribute selector to match the exact id value.
await page.locator('[id="price-($)"]').fill('50');
// "&" isn't valid in a CSS id selector without escaping; use an attribute selector instead.
const eventDateTime = "2026-04-15T08:30";
const eventDateTimeInput = page.locator('input[type="datetime-local"]');

await eventDateTimeInput.click();
await eventDateTimeInput.fill(eventDateTime);
await eventDateTimeInput.blur();              // commit on blur (many apps require this)
await expect(eventDateTimeInput).toHaveValue(eventDateTime);

await page.locator("#total-seats").fill("20");
await page.getByRole("button",{name : '+ Add Event'}).click();
await page.getByText('Event Created!').isVisible();  
await page.locator("#nav-events").click();
await page.locator("#event-card").first().waitFor(); 
await expect(page.getByText("Women Empowerment Summit")).toBeVisible();
await page.getByText("Banjarahills",", ","Hyderabad").isVisible();
const seatbooking= await page.locator("#book-now-btn").last();
 await seatbooking.click();
 
await page.getByText('Women Empowerment Summit').first().waitFor();
await page.locator("#customerName").fill('A.Tulasi');
await page.locator("#customer-email").fill('atulasi101299@gmail.com');
await page.getByPlaceholder('+91 98765 43210').fill('9121864316');
await page.locator("#confirm-booking").click(); 
await expect(page.getByText("Booking Ref")).toBeVisible(); 
/* await page.pause();
await page.locator("#nav-bookings").click();
await expect(page).toHaveURL(/bookings/);
await Eventcard.allTextContents();
await expect(Eventcard.first()).toBeVisible();
const bookingcount = await Eventcard.count();
console.log(bookingcount);
const Eventname= 'Women Empowerment Summit';
const bookingref= await page.getByText("W-D9EIUO");

for(let i=0;i<bookingcount;++i)
{
    if(page.locator("#booking-card").nth(i)== bookingref){
        console.log(bookingref);
        break;
    }

}
await expect(bookingref).toBeVisible(); */

const bookingRef = 'W-D9EIUO';
const eventTitle = 'Women Empowerment Summit';

await page.locator('#nav-bookings').click();
await expect(page).toHaveURL(/bookings/);

const cards = page.locator('[data-testid=booking-card]'); // if this is repeated, consider changing selector to '.booking-card' or '[data-testid=booking-card]'
await expect(cards.first()).toBeVisible();

// card that has a .booking-ref element whose text matches bookingRef
const matchedCard = cards.filter({
  has: page.locator('.booking-ref', { hasText: bookingRef }),
});

await expect(matchedCard.first()).toBeVisible();
await expect(matchedCard.first()).toContainText(eventTitle);

// optional: assert the booking ref text exactly inside that card
await expect(matchedCard.first().locator('.booking-ref')).toHaveText(bookingRef);

})












