const {test, expect} = require('@playwright/test');

test('incorrect credentials', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username = page.locator('#username');
    const signin = page.locator('#signInBtn');

    await username.fill('rahul');
    await page.locator('#password').fill('learning');
    console.log(await page.title());

    await signin.click();

    console.log(await page.locator('[style*="display"]').textContent());
    await expect(page.locator('[style*="display"]')).toContainText('Incorrect');

    await username.fill("");
    await username.fill('rahulshettyacademy');
    await signin.click();

    // console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator('.card-title a').nth(3).textContent());

})