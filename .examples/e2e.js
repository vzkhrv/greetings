const puppeteer = require('puppeteer');

describe('Добавление товара в корзину', () => {
  test('Товар добавляется в корзину при нажатии кнопки "Купить"', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://localhost:8080/product');
    await page.click('button.buy');
    const cartCount = await page.$eval('.cart-count', el => el.innerText);
    expect(cartCount).toBe('1');

    await browser.close();
  });
});