import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/mainPage';
import RegisterPage from '../pageobjects/register.page';
import BuyPage from '../pageobjects/buy.page';
import validateAlert from '../../helpers/validateAlert';


const pages = {
    login: LoginPage,
    register: RegisterPage,
    buy: BuyPage
}


Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

//Login

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
   await LoginPage.login(username, password)
});

Then(/^I should see a welcome message$/, async () => {
   await validateAlert.ValidateMessage("LoginPage")
});

Then(/^I should see an alert$/, async () => {
    await LoginPage.alertIsVisible()
});

//Register

When(/^I enter my information (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+)$/, async (FName, LName, username, email, password, rPassword, phone, BDate, CCard, ExpDate, CVV) => {
    await RegisterPage.register(FName, LName, username, email, password, rPassword, phone, BDate, CCard, ExpDate, CVV);
    await RegisterPage.clickToButtonRegister();
});

When(/^I click to register button$/, async () => {
    await RegisterPage.clickToButtonRegister();
});

Then(/^I should see a required alert (.*)$/, async (message) => {
    await MainPage.checkMessage(message)
});

Then(/^I should see a success message (.*)$/, async (message) => {
    await MainPage.checkMessage(message)
});

Then(/^I should not be registered$/, async() => {
    await RegisterPage.notBeRegistered();
});

//Buy

Given(/^I enter as (\w+) p (.+)$/, async (username, password) => {
    await pages["login"].open()
    //await LoginPage.login(username, password)
    LoginPage.login(username, password)
});

When(/^I click buy page$/, async () => {
    await BuyPage.clickToBuyPage()
});

When(/^I buy (\w+) stock (.+)$/, async (symbol, qty) => {
    await BuyPage.buy(symbol, qty)
});

When(/^I buy (\w+) with negative stock (.+)$/, async (symbol, qty) => {
    await BuyPage.buy(symbol, qty)
});

Then(/^I should see a success buy message$/, async () => {
    await BuyPage.ValidateMessage();
});

Then(/^I should see an2 alert$/, async () => {
    await validateAlert.ValidateMessage("buy");
});