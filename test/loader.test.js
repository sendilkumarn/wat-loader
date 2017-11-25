const should = require("should");

const loader = require('../loader');

describe("loader", function() {
	it("should convert simple wat module to wasm", function() {
    const array = [0, 97, 115, 109, 1, 0, 0, 0];
    const exceptedOutput = new Int8Array(array);
		loader.call({}, "(module )").should.be.eql(exceptedOutput);
  });

  it('should convert the wat file into wasm', () => {
    const array = [0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 7, 5, 1, 1, 116, 0, 0, 10, 5, 1, 3, 0, 1, 11, 0, 11, 4, 110, 97, 109, 101, 1, 4,1,0, 1, 48];
    const expectedOutput = new Int8Array(array);
    loader.call({}, '(module (func (export "t") (nop)))').should.be.eql(expectedOutput);
  })
});
