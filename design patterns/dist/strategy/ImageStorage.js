"use strict";
class ImageStorage {
    constructor(compressor, filter) {
        this._compressor = compressor;
        this._filter = filter;
    }
    store(fileName) {
        this._compressor.compress(fileName);
        this._filter.apply(fileName);
    }
}
//# sourceMappingURL=ImageStorage.js.map