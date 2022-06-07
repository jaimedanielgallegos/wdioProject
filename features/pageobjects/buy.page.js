import Page from './page';
import validateAlert from '../../helpers/validateAlert';

class BuyPage extends Page {
    /**
     * define selectors using getter methods
     */

     get inputSymbol () {
        return $('[name="symbol"]');
    }

    get inputQuantity () {
        return $('[name="qty"]');
    }

    get btnBuy (){
        return $('[href="/buy"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async buy (symbol, qty) {
        await this.inputSymbol.setValue(symbol);
        await this.inputQuantity.setValue(qty);
        validateAlert.setQty(qty);
        await this.btnSubmit.click();
    }

    async clickToBuyPage(){
        await this.btnBuy.click();
    }

     open () {
        return super.open('buy');
    }
}

export default new BuyPage();
