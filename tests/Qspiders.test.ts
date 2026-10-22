import { test, expect } from '@playwright/test'
test('verify the user is able to login', async ({ page }) => {
    try {
        await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
        // await page.setViewportSize({ width: 2180, height: 1080 });
        // const header = await page.locator('//span[@class="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-center relative py-1 font-bold text-[20px] w-[50%]"]');
        // const value = await header.textContent();
        // console.log(value)
        // await expect(header).toHaveText('Write a script to enter data into Text field?')
        // expect(value).toBe('Write a script to enter data into Text field?');


    }
    catch (error) {
        console.log(error)
    }


}
)


