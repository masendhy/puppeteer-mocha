"use strict";

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _LoginPage = require("../pages/LoginPage");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import puppeteer from "puppeteer";
describe('Mocha steps demo', function () {
    // let browser;
    var page = void 0;
    var loginPage = void 0;
    // let mobile;
    // let tablet;

    before(async function () {
        // browser = await puppeteer.launch({
        //     headless: true
        // });
        page = await _builder2.default.build("Desktop");
        loginPage = await new _LoginPage2.default(page);
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

    // step("should load the homepage", async () => {
    //     await page.goto('http://zero.webappsecurity.com/online-banking.html');
    //     await page.waitAndClick('#onlineBankingMenu');
    //     await page.waitFor(5000);
    // });
    (0, _mochaSteps.step)("should load the homepage", async function () {
        await page.goto('http://zero.webappsecurity.com/index.html');
        // const signInButton = await page.isElementVisible("#signin_button");
        (0, _chai.expect)((await page.isElementVisible("#signin_button"))).to.be.true;
    });

    (0, _mochaSteps.step)("should display login form", async function () {
        await page.waitAndClick("#signin_button");
        // const loginForm = await page.isElementVisible('#login_form');
        (0, _chai.expect)((await page.isElementVisible('#login_form'))).to.be.true;
        var signInButton = await page.isElementVisible("signin_button");
        (0, _chai.expect)(signInButton).to.be.false;
    });

    (0, _mochaSteps.step)('should login to the application', async function () {
        // await page.waitAndType("#user_login", "username");
        // await page.waitAndType("#user_password", "password");
        // await page.waitAndClick(".btn-primary");
        // const navbar = await page.isElementVisible(".row");
        await loginPage.login("username", "password");
        (0, _chai.expect)((await page.isElementVisible(".row"))).to.be.true;
    });

    (0, _mochaSteps.step)('should have 6 navbar links', async function () {
        var navbarLinkCount = await page.getCount('.nav-tabs li');
        (0, _chai.expect)(navbarLinkCount).to.equal(6);
    });
});