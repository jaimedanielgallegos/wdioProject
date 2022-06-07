import Page from './page';

const cases = {
    register:{
        positive: "was succesfully registered.", 
        negative:[ "Juan2 is already taken", "invalid username and/or password", "You must provide a username", "You must provide a password"]
    }
}
class RegisterPage extends Page {
    /*
     * define selectors using getter methods
     */
    get inputFname () {
        return $('[name="first_name"]');
    }

    get inputLname () {
        return $('[name="last_name"]');
    }

    get inputEmail () {
        return $('[name="email"]');
    }

    get inputUsername () {
        return $('[name="username"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get inputRPassword () {
        return $('[name="repeat_password"]');
    }

    get inputPhone () {
        return $('[name="phone"]');
    }

    get inputBirthDate () {
        return $('[name="birthdate"]');
    }

    get inputCCard () {
        return $('[name="cc"]');
    }

    get inputExpDate () {
        return $('[name="expiration"]');
    }

    get inputCVV () {
        return $('[name="cvv"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get alertRegister () {
        return $('.alert');
    }

    get alertRequire () {
        return $('[required]');
    }

    async register (FName, LName,username, email, password, rPassword, phone, BDate, CCard, ExpDate, CVV) {
        await this.inputFname.setValue(FName);
        await this.inputLname.setValue(LName);
        await this.inputEmail.setValue(email);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputRPassword.setValue(rPassword);
        await this.inputPhone.setValue(phone);
        await this.inputBirthDate.setValue(BDate);
        await this.inputCCard.setValue(CCard);
        await this.inputExpDate.setValue(ExpDate);
        await this.inputCVV.setValue(CVV);
    }

    async clickToButtonRegister(){
        await this.btnSubmit.click();
    }


    async ValidateErrorMessage(){
        for(let i=0;i<cases.register.negative.length;i++){
            await expect(this.alertRegister).toHaveTextContaining(cases.register.negative[i])
        }
    }

    async notBeRegistered(){
        await expect(this.alertRegister).toBeDisplayed();
    }

    open () {
        return super.open('register');
    }
}

export default new RegisterPage();