// A room should:

// - have an area in square meters
// - should start not painted
// - should be able to be painted

const Room = function(area){
    this.area = area;
    this.paintedSqMetres = 0;
}

Room.prototype.roomPainted = function(){
    if (this.area === this.paintedSqMetres){
        return true;
    } else {
        return false;
    }
}
module.exports = Room;