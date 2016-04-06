/**
 * Created by wchavarria-as on 05/04/2016.
 */

/*Lodash Assign*/

var objectExtend = (function(){
    return Object.prototype.extend = function(obj) {
        console.log('Walter');
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                this[i] = obj[i];
            }
        }
    };
})();

module.exports = {
  objectExtend: objectExtend()
};