"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const enums_metadataKey_1 = require("./enums.metadataKey");
function use(middleware) {
    return function (target, key, desc) {
        const middlewares = Reflect.getMetadata(enums_metadataKey_1.MetadataKeys.middleware, target.prototype, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(enums_metadataKey_1.MetadataKeys.middleware, [...middlewares, middleware], target.prototype, key);
    };
}
