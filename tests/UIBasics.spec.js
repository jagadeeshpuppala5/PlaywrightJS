const {test, expect} = require('@playwright/test');

test.only('Browser playwright', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title());

    await page.locator("#username").fill('rahulshettyacademy');
    await page.locator("#password").fill('learningg');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='display']").textContent());
    await expect(page.locator("[style*='display']")).toContainText('Incorrect');

});

test('Page playwright test', async ({page})=>{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle("Google");
});