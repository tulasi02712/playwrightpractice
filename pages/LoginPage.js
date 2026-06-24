class LoginPage{

constructor(page){
this.page=page;
this.loginlink=page.locator('#login2');
this.Username=page.locator('#loginusername');
this.Password=page.locator('#loginpassword');
this.LoginButton=page.locator('button:has-text("Log in")'); 

}
async navigateToLoginPage(){
await this.page.goto('https://www.demoblaze.com/index.html');

}

async Login(username,password){
    await this.loginlink.click();
    await this.Username.fill(username);
    await this.Password.fill(password);
    await this.LoginButton.click();
}

}
module.exports = LoginPage;