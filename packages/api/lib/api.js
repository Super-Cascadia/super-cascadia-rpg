'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hapi_1 = require("@hapi/hapi");
var init = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var server;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                server = new hapi_1.Server({
                    port: 3000
                });
                server.route({
                    method: 'GET',
                    path: '/',
                    handler: function (request, reply) {
                        console.log('hello world!');
                        return 'Hello World!';
                    }
                });
                return [4 /*yield*/, server.start()];
            case 1:
                _a.sent();
                console.log('Server running on %s', server.info.uri);
                return [4 /*yield*/, server.start()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
init();
//# sourceMappingURL=api.js.map