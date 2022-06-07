import Page from './page';
import validateAlert from '../../helpers/validateAlert';

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[name="username"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        validateAlert.setName("LoginPage",username)
        await this.btnSubmit.click();
        return this;
    }
    async alertIsVisible(){
        await expect(this.alertLogin).not.toBeDisplayed;
        await expect(this.alertLogin).toHaveTextContaining("Welcome back")
        for(let i=0;i<cases.login.negative.length;i++){
            await expect(this.alertLogin).toHaveTextContaining(cases.login.negative[i])
        }
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
