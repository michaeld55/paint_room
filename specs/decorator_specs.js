const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function(){

    let decorator;
    let paint;
    let room;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(10);
        room = new Room(50);
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

    it("should have enough paint", function(){
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, true);

    })

    it("should paint room", function(){
        /*
        check enough paint
        add paint if not enough
        empty paint when used,
        check if room painted
        repeat till done.
        */
       const actual = decorator.paintRoom(room);
       
    });

    // - be able to paint room if has enough paint in stock
});






  

  