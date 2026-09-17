import {test,expect, chromium } from '@playwright/test';
test('open browser',async()=>
{
   const browser = await chromium.launch(
   { headless: false}
   );
   const context= await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://www.amazon.in")
   await page.hover("//*[@aria-label='Amazon.in']")
   await page.click("//*[@aria-label='Amazon.in']")
const newcontext= await browser.newContext();
   const newpage =  await newcontext.newPage();
   await newpage.goto("https://www.amazon.in")
   await newpage.waitForTimeout(5000);




})