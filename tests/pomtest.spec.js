import {test, expect} from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

test('POM Test', async ({page}) => {

//LoginPage
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.Login('Tulasi','Tulasi12');

//HomePage
  const homePage = new HomePage(page);
  await homePage.addProductToCart('Nexus 6');
  await homePage.navigateToCart();

//CartPage
  const cartPage = new CartPage(page);
  const isProductInCart = await cartPage.checkProductInCart('Nexus 6');
  expect(await isProductInCart).toBe(true);

})