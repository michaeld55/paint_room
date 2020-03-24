const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");

describe("Decorator", function(){

    let decorator;
    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(10);
    });

    it("should start with no stock", function(){
        const actual = decorator.paintStock.length
        assert.deepStrictEqual(actual, 0);
    });

    it("should be able to add paint", function(){
        decorator.addPaint(paint);
        const actual = decorator.paintStock[0];
        assert.deepStrictEqual(actual, 10);
    });

    it("should be able to calculate total", function(){
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        decorator.totalPaint();
        const actual = decorator.totalPaint(); //here?
        assert.deepStrictEqual(actual, 20);
    });
});






  

  