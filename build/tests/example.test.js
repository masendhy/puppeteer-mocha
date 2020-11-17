"use strict";

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import puppeteer from "puppeteer";
describe('Mocha steps demo', function () {
    // let browser;
    var page = void 0;
    // let mobile;
    // let tablet;

    before(async function () {
        // browser = await puppeteer.launch({
        //     headless: true
        // });
        page = await _builder2.default.build("Desktop");
        // mobile = await Page.build("Mobile");
    });

    after(async function () {
        await page.close();
        // await mobile.close();
    });

    // step("should load google homepage", async () => {
    //     await page.goto('https://google.com')
    // });

    // step("step 2 should be failed", async () => {
    //     await page.waitForSelector('#fail')
    // });

    // step("step 3 ", async () => {
    //     console.log("from step 3")
    // });

    // step("step 4", async () => {
    //     console.log("from step 4");
    // });

    (0, _mochaSteps.step)("should load the homepage", async function () {
        await page.goto('http://zero.webappsecurity.com/online-banking.html');
        await page.waitAndClick('#onlineBankingMenu');
        await page.waitFor(5000);
    });
});