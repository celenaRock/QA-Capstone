const { Builder, Capabilities, By, Browser } = require('selenium-webdriver'); 

jest.setTimeout(30000)

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


test("Food Search test", async () => {

    await driver.get('https://waitrapp.com/')
    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(TimeOut, TimeUnit.SECONDS);
    let searchBar = await driver.findElement(By.xpath('/html/body/div[2]/main/div[2]/section/div/section/div/form/section/div/input'))

    await searchBar.click()
    await searchBar.sendKeys("Cajun\n")
    await driver.sleep(10000)

})

// test("Select items test", async () => {

//     driver.manage().timeouts().implicitlyWait(TimeOut, TimeUnit.SECONDS);
    
//     await selectItems.click()
//     await driver.sleep(3000)

// })


    // //Login//
    // test("Can click Login button to be directed to Login form", async () => {

    //     let loginButton = await driver.findElement(By.xpath('/html/body/div[1]/main/div[1]/header/div/div[2]/button[3]/div'))

    //     await loginButton.click()

    //     let loginCheck = await driver.findElement(By.xpath('/html/body/div[3]/div[2]/div/div/div/div[3]/div/div[1]/div/form/button'))

    //     expect(loginCheck).toContain('Sign In')


    // })



test("Sell On Waitr click test", async () => {
   
    let sellButton = await driver.findElement(By.xpath('/html/body/div[2]/main/div[1]/header/div/nav/ul/li[2]/a'))
    
    await sellButton.click()
    await driver.sleep(3000)
    
    driver.manage().window().minimize();
});




