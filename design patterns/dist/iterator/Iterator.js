"use strict";
class BrowserHistory {
    constructor() {
        this.urls = [];
    }
    push(url) {
        this.urls.push(url);
    }
    pop() {
        let lastUrl = this.urls.pop();
        return lastUrl;
    }
}
//# sourceMappingURL=Iterator.js.map