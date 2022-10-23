class ImageStorage {
    private _compressor: Compressor;
    private _filter: Filter;

    constructor(compressor: Compressor, filter: Filter) {
        this._compressor = compressor;
        this._filter = filter;
    }

    store(fileName: string) {
        this._compressor.compress(fileName);
        this._filter.apply(fileName);
    }
}
