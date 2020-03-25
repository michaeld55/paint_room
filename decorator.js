// A decorator should:

// - start with an empty paint stock
// - be able to add a can of paint to paint stock
// - be able to calculate total litres paint it has in stock
// - be able to calculate whether is has enough paint to paint a room
// - be able to paint room if has enough paint in stock
const Decorator = function(){
    this.paintStock = [];
};

Decorator.prototype.addPaint = function(paint){
    this.paintStock.push(paint.litres);
}

Decorator.prototype.totalPaint = function(){
    var total = 0;
    for (var paint of this.paintStock) {
      total += paint;
    }
    return total;
  
}

Decorator.prototype.enoughPaint = function(room){
    if (this.totalPaint() === room.area) {
        return true;
    }else{
        return false;
    }
}

Decorator.prototype.paintRoom = function(room, paint){
    while (this.enoughPaint(room) === false) {
        
            this.addPaint(paint); 
    }

    room.paintedSqMetres = room.paintedSqMetres + this.totalPaint();
    paint.emptyIt();
    return room.paintedSqMetres
}

module.exports = Decorator;

