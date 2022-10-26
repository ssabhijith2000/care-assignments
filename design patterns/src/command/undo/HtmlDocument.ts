class HtmlDocument {
    private _content?: string | undefined;

    public makeBold() {
        this._content = "</b>" + this._content + "</b>";
    }

    public get content(): string | undefined {
        return this._content;
    }
    public set content(value: string | undefined) {
        this._content = value;
    }
}


export default HtmlDocument