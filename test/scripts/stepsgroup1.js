const {Given, When, Then} = require('cucumber');
const sina = require( '../pages/sina.page' );

Given(/^sina home is opened$/, ()=>{
    sina.open();
    console.log("sina home is opened")

} );

When(/^people click 'news' link$/, ()=>{
    console.log("when for news is executed");
    sina.news.click();
    browser.pause(3000);
});

When(/^people click 'finance' link$/, ()=>{
    console.log("when for finance is executed");
    sina.news.click();
    browser.pause(3000);
});

When(/^people click 'sport' link$/, ()=>{
    console.log("when for sport is executed");
    sina.news.click();
    browser.pause(3000);
});

Then(/^news page is shown$/, ()=>{
});