const assert = require("assert");
const Room = require("../room");

describe('Room', function(){

    let room;

    beforeEach(function (){
        room = new Room(50);
    })   

   it("should have area", function(){
       const actual = room.area;
       assert.strictEqual(actual, 50);
   })

   it("should have no painted sq metres", function(){
        const actual = room.paintedSqMetres;
        assert.strictEqual(actual, 0);
   })

   it("should be able to be painted", function(){
       room.paintedSqMetres = 50;
       room.roomPainted()
       const actual = true;
       assert.strictEqual(actual, true)

   })
  
    
})