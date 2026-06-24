class HomePage{

constructor(page){
    this.page=page;
    this.productlists=page.locator('#tbodyid .card-title');
    this.productLinks = page.locator('#tbodyid .card-title a');
    this.addtocart=page.locator('a:has-text("Add to cart")');
    this.cartlink=page.locator('#cartur');

}
async addProductToCart(productname){
    const productlist = await this.productlists.allTextContents();
    // handle dialog when item is added
    this.page.on('dialog', async dialog => {
        if (dialog.message().includes('added'))
            await dialog.accept();
    });
    for (let i = 0; i < productlist.length; i++) {
        if (productname === productlist[i]) {
            await this.productLinks.nth(i).click();
            // wait for product page to show Add to cart and click it
            await this.page.waitForSelector('a:has-text("Add to cart")');
            await this.addtocart.click();
            break;
        }
    }
}

async navigateToCart(){
    await this.cartlink.click();
}     

}

module.exports = HomePage;