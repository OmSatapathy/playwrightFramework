exports.Loginpage =

class Loginpage{

    constructor(page){
        this.page= page;
        this.usernameInput = page.locator("//input[@placeholder='Username']")
        this.passwordInput = page.locator("//input[@placeholder='Password']")
        this.loginbutton = page.locator("//button [@type='submit']")
    }

    async launch(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async providingDetails(username,password){
        
        await this.usernameInput.fill(username) 
        await this.passwordInput.fill(password) 
        await this.loginbutton.click()
    }
}