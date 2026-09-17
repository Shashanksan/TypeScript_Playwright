import {test,expect } from '@playwright/test';
test('open browser',async({page})=>(
await page.goto('https://performance.fireflink.com/signin'),
await page.getByRole("button").isVisible
)
)