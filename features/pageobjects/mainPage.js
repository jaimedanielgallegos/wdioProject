import Page from './page';
class MainPage extends Page {
    get alertWelcomeMessage () {
        return $('.alert');
    }
    async checkMessage(message){
        await expect(this.alertWelcomeMessage).toBeExisting();
        await expect(this.alertWelcomeMessage).toHaveTextContaining(message);
    }
}

export default new MainPage();