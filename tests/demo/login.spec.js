import { test, expect } from '@playwright/test';
import  {loginpage} from '../../pages/login'
test('test', async ({ page }) => {

  const login = new loginpage(page)

  await login.gotologinpage()
  await login.login('tomsmith','SuperScretPassword!')
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});