class LoginPage {

    constructor(page, context) {

        this.page = page;

        this.context = context;

        this.LoginBtn =
            page.locator('#loginBtnKn');

    }

    async login(username, password) {

       //EAP await this.page.goto('https://10.25.1.84:8443/authn/');

    await this.page.goto('https://10.25.1.96/authn/')
        const [newPage] = await Promise.all([

            this.context.waitForEvent('page'),

            this.LoginBtn.click()

        ]);

        await newPage.locator('#nickName')
            .fill(username);

        await newPage.locator('#dummyPassword')
            .fill(password);

     //await this.page.pause()

        await newPage
            .getByRole('button', {
                name: 'Sign in'
            })
            .click();

         await newPage.waitForTimeout(10000);

 /*    console.log(
        this.context.pages()
            .map(p=>p.url())
    );

    console.log(
        "Current URL:",
        await newPage.url()
    );
 */
    return newPage; 

}
}

module.exports = { LoginPage };