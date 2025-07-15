const {test, expect} = require('@playwright/test');

test.only('Browser playwright', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title());

    const userName = page.locator("#username");
    const signIn = page.locator('#signInBtn');

    await userName.fill('rahulshetty');
    await page.locator("#password").fill('learning');
    await signIn.click();
    console.log(await page.locator("[style*='display']").textContent());
    await expect(page.locator("[style*='display']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());

});

test('Page playwright test', async ({page})=>{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle("Google");
});