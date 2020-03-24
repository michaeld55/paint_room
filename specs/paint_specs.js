const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function(){

    let paint;

    beforeEach(function(){
        paint = new Paint(10)
    });

    it("should have litres", function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });
    
    it("should check if empty", function(){
        paint.isEmpty();
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });

    it("It can be emptied", function(){
        paint.emptyIt();
        const actual = paint.litres;
        assert.strictEqual(actual, 0);
    });


});