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

  
    
})