exports.loginpage=class loginpage {

    constructor(page) {


        this.page = page

        this.username_testbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })

    }
    //    //automatic functions--> one function create one action

    //   enterusername()
    //   {

    //   }
    //   enterpassword()
    //   {

    //   }
    //   clickonlogin()
    //   {

    //   }
    async gotologinpage()
    {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
     
    async login(username,passowrd)
    {
        await this.username_testbox.fill(username)
        await this.password_textbox.fill(passowrd)
        await this.login_button.click()
    }

}