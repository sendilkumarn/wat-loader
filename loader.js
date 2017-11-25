"use strict";
const path = require("path");
const async = require("async");
const Module = require("./wasm-as");

module.exports = function(content) {
  let result = {};
  let wasm = Module._malloc(64);
  Module.ccall("assemble", 'boolean', ['string', 'number', 'number'], [content, wasm, wasm + 4]);
  wasm = Module.HEAP8.subarray(Module.getValue(wasm, 'i32'), Module.getValue(wasm, 'i32') + Module.getValue(wasm + 4, 'i32'));
  result.wasm = wasm;
  Module._free(wasm.byteOffset);
  // TODO getting the source map
  // result.map = {};
  return result.wasm;
};
