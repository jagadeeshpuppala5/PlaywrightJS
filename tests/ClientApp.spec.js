const {test, expect} = require('@playwright/test');

test('assignment 1', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('assignment1@gmail.com');
    await page.locator('#userPassword').fill('Learning@1');
    await page.locator('#login').click();

    console.log(await page.title());

    await page.waitForLoadState('networkidle');
    // await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    
    // console.log(await page.locator('.card-body b').first().textContent());
    // await expect(page.locator('.card-body b').first()).toContainText('ZARA');
})