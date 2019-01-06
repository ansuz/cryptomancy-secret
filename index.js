var Secrets = require("secrets.js-grempe");
var Format = require("cryptomancy-format");

var Escrow = module.exports = function (u8_secret, n_parts, n_threshold) {
    // TODO return something other than hex
    return Secrets.share(Format.encodeHex(u8_secret), n_parts, n_threshold);
};

Escrow.join = function (shares) {
    var hex_result = Secrets.combine(shares);
    if (typeof(hex_result) !== 'string') { return false; }

    return Format.decodeHex(hex_result);
};
