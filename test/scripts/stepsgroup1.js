const {Given, When, Then} = require('cucumber');
//const SinaPage = require('../pages/sina.page');
//const sinaPage = new SinaPage();

Given("/^sina home is opened", function(){
    browser.url = "https://www.sina.com.cn"
} );

When("/^people click 'news' link", function(){

});

Then("/^news page is shown", function(){

});