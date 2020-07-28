const Page = require('./page');

class sina extends Page {
    
    open() {
        return super.open('https://www.sina.com.cn');
    }

    get news(){
        return $('=新闻');
    }
}

module.exports = new sina();