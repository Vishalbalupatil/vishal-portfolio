import { test, expect } from '@playwright/test'

test('home page has name', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.locator('text=Vishal Patil')).toBeVisible()
  await page.click('text=Experience')
  await expect(page).toHaveURL(/experience/)
})
