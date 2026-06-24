class CartPage{

constructor(page){
   this.page=page;
   this.noOfproducts='//tbody[@id="tbodyid"]/tr/td[2]';
}
async checkProductInCart(productname){
    const productsInCart = await this.page.$$(this.noOfproducts)
    for(const product of productsInCart){
        if(productname===await product.textContent()){
            return true;
        }
}
}
}
module.exports = CartPage;