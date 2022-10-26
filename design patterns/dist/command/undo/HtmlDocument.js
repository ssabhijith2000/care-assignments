class HtmlDocument {
    makeBold() {
        this._content = "</b>" + this._content + "</b>";
    }
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }
}
export default HtmlDocument;
//# sourceMappingURL=HtmlDocument.js.map