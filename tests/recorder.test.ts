import {test,expect} from '@playwright/test';
test('fireflink login',async({page})=>{
    await page.goto('https://us-app.fireflink.com/');
  await page.getByRole('textbox', { name: '* Email' }).click();
  await page.getByRole('textbox', { name: '* Email' }).fill('shashank.s@fireflink.com');
  await page.getByRole('textbox', { name: '* Email' }).press('Tab');
  await page.getByRole('textbox', { name: '* Password' }).fill('Password@123');
  await page.getByRole('textbox', { name: '* Password' }).press('Tab');
  await page.getByRole('link', { name: 'Forgot Password ?' }).press('Tab');
  await page.getByRole('button', { name: 'Button' }).press('Enter');
  await page.goto('https://us-app.fireflink.com/app/licenses?modal=expiration');
  await expect(page.getByLabel('Remind Me Later')).toBeVisible();
})