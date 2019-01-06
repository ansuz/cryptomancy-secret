var Format = require("cryptomancy-format");
var Secret = require(".");
var assert = require("assert");

var utf = 'Hello, world!';
var plain = Format.decodeUTF8(utf);

var shares = Secret(plain, 5, 4);
var joined = Secret.join(shares.slice(1));

assert(Format.encodeUTF8(joined) === utf);
