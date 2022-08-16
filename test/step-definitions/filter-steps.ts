import Page from "../page-objects/page";
import {Given, When, Then} from "@wdio/cucumber-framework";
import HomePage from "../page-objects/home.page";
import CryptoTable from "../page-objects/cryptoTable";

const page = new Page();
const pages: any = {
    home: HomePage,
    cryptoTable: CryptoTable
}

When(/^I can see cryptocurrency price in the table$/, async function() {
    await pages["home"].waitForCryptoPriceTable()
    await page.scrollPageToElement(await pages["cryptoTable"].$cryptoTable)
    await pages["cryptoTable"].getRowValuesForTable(4)

});