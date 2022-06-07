import Page from "../features/pageobjects/page";

const cases = {
    buy:{
        first: "You bought ",
        qty: "",
        last: " share(s) from AMZN"
    },
    mainPage:{
        msg:"Welcome back ",
        name: ""
    },
}

class validateAlert extends Page {
    get alertMessage() {
        return $('.alert');
    }
    async ValidateMessage(page){
        for(let i=0;i<Object.keys(cases).length; i++) {
            if(page=="buy") await expect(this.alertMessage).toHaveTextContaining(cases.buy.first + cases.buy.qty + cases.buy.last);
            if(page=="LoginPage") await expect(this.alertMessage).toHaveTextContaining(cases.mainPage.msg + cases.mainPage.name);
        }
    }
    async setQty(qty){
        cases.buy.qty=qty;
    }
    async setName(page,name){
        if(page =="loginPage") cases.mainPage.name='sd';
    }

}

export default new validateAlert();