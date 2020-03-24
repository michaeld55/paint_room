// A paint can should:

// - have a number of litres of paint
// - be able to check if it is empty
// - be able to empty itself of paint
const Paint = function(litres){
    this.litres = litres;
};

Paint.prototype.isEmpty = function(){
    if (this.litres == 0){
        console.log(`The paint has finished!`)
    };
    
};

Paint.prototype.emptyIt = function(){
    while (this.litres > 0) {
       this.litres --; 
    };
};

module.exports = Paint;