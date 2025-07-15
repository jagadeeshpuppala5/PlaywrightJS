const {test, expect} = require('@playwright/test');
const { execPath } = require('process');

test('Browser playwright', async ({browser})=>{

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

test.only('UI controls', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');

    await page.locator('.checkmark').nth(1).click();
    await page.locator('#okayBtn').click();
    // await page.pause();
    console.log(await page.locator('.checkmark').nth(1).isChecked());
    await expect(page.locator('.checkmark').nth(1)).toBeChecked();

    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();

    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    await page.pause();
})