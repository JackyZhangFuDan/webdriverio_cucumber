const {Given, When, Then} = require('cucumber');
const sina = require( '../pages/sina.page' );

Given(/^sina home is opened$/, ()=>{
    sina.open();
    console.log("sina home is opened")
} );

When(/^people click 'news' link$/, ()=>{
    console.log("when is executed");
    sina.news.click();
    browser.pause(5000);
});

Then(/^news page is shown$/, ()=>{
});