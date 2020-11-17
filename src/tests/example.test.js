// import puppeteer from "puppeteer";
import {
    expect
} from "chai";
import {
    step
} from "mocha-steps";

import Page from "../builder";
import LoginPage from "../pages/LoginPage";


describe('Mocha steps demo', () => {
    // let browser;
    let page;
    let loginPage;
    // let mobile;
    // let tablet;

    before(async () => {
        // browser = await puppeteer.launch({
        //     headless: true
        // });
        page = await Page.build("Desktop");
        loginPage = await new LoginPage(page);
        // mobile = await Page.build("Mobile");
    })

    after(async () => {
        await page.close();
        // await mobile.close();
    })

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
    step("should load the homepage", async () => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        // const signInButton = await page.isElementVisible("#signin_button");
        expect(await page.isElementVisible("#signin_button")).to.be.true;
    });

    step("should display login form", async () => {
        await page.waitAndClick("#signin_button");
        // const loginForm = await page.isElementVisible('#login_form');
        expect(await page.isElementVisible('#login_form')).to.be.true;
        const signInButton = await page.isElementVisible("signin_button");
        expect(signInButton).to.be.false;
    })

    step('should login to the application', async () => {
        // await page.waitAndType("#user_login", "username");
        // await page.waitAndType("#user_password", "password");
        // await page.waitAndClick(".btn-primary");
        // const navbar = await page.isElementVisible(".row");
        await loginPage.login("username", "password");
        expect(await page.isElementVisible(".row")).to.be.true;
    })

    step('should have 6 navbar links', async () => {
        const navbarLinkCount = await page.getCount('.nav-tabs li');
        expect(navbarLinkCount).to.equal(6);
    })
});