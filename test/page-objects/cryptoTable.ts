import Page from "./page";
const Currency = require("../helper/Currency"),
worldState = require("../js/WorldState.js")

class CryptoTable extends Page {
    get $cryptoTable() {
        return browser.$(`//div[contains(@class,'h7vnx2-1 bFzXgL')]/table`)
    }

    get $$cryptoTableRows() {
        return browser.$$(`//div[contains(@class,'h7vnx2-1 bFzXgL')]/table/tbody/tr`)
    }

    async getRowValuesForTable() {
        await console.log("Reading Table Rows Values")
        const tableRowsAr = await browser.$$(`//div[contains(@class,'h7vnx2-1 bFzXgL')]/table/tbody/tr`)
        const tableColAr = await browser.$$(`//div[contains(@class,'h7vnx2-1 bFzXgL')]/table/thead/tr/th`)
        const tableRowsArray = await browser.$$(`//div[contains(@class,'h7vnx2-1 bFzXgL')]/table/tbody/tr`).valueOf(),
            rowValues = [];

       let numOfRows = await tableRowsAr.length
        let numOfCol = await tableColAr.length
        await console.log("Number of rows are :" + numOfRows)
        await console.log("Number of columns are :" + numOfCol)

        for(let i =1; i  < numOfRows; i++) {
             let currency = new Currency()
            for(let j =2; j < numOfCol; j++) {
                let cellVal = await browser.$(`//div[contains(@class,'h7vnx2-1 bFzXgL')]/table/tbody/tr[${i}]/td[${j}]`).getText()
               if(j === 2) currency.number = cellVal
                if(j === 3) currency.name = cellVal
                if(j === 4) currency.price = cellVal
                if(j === 8) currency.marketCap = cellVal.split("$")[1]
                if(j === 9) currency.volume = cellVal.split("$")[1]
                worldState.addCurrency(currency)
            }
        }

        return rowValues
    }

    async browserTableToFindValue(columnIndex: number) {
        return null
    }
}
export default new CryptoTable()