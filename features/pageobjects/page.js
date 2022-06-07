
export default class Page {
    open (path) {
        return browser.url(`https://vamonos-finance.herokuapp.com/${path}`)
    }
}