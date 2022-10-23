interface CustomIterator<T> {
    hasNext() : boolean;
    current() : T;
    next() : void;
}

class BrowserHistory{
    urls : string[] = []
    
    push(url: string) : void{
        this.urls.push(url);
    }

    pop(): string | undefined{
        let lastUrl = this.urls.pop()
        return lastUrl
    }

    // createIterator(): ListIterator {
    //     return new ListIterator(this)
    // }
    
    // class ListIterator implements CustomIterator<String> {
    //     private _history: BrowserHistory
    //     private _index: number = 0
    //     constructor (history : BrowserHistory){
    //         this._history = history
    //     }

    //     hasNext(): boolean {
    //         return (this._index < this._history.urls.length)
    //     }

    //     current(): string {
    //         return this._history.urls[this._index]
    //     }

    //     next() : void {
    //         this._index +=1
    //     }
        
    // } 
}