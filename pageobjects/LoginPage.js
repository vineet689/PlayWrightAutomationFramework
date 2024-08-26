class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("[value='Log In']");
    this.userName = page.locator("#username");
    this.password = page.locator("#password");

}

async goTo()
{
    await this.page.goto("https://360degreecloudtechnologi-6f-dev-ed.develop.lightning.force.com/lightning/page/home");
}

async validLogin(username,password)
{
    await  this.userName.fill(username);
     await this.password.fill(password);
     await this.signInbutton.click();
     await this.page.waitForLoadState('networkidle');

}

}
module.exports = {LoginPage};