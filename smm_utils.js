/****************************
*  Function to grab elements based on class, tag, or id, based on first symbols.
*****************************/

var $ = function( id ) { 

	switch(id.charAt(0)){
		case '#':
			return document.getElementById( id.substr(1) );
			break;
		case '.':
			return document.getElementsByClassName( id.substr(1) );
			break;
		case '$': 
			return document.getElementsByTagName( id.substr(1) );
			break;
		default:
			return document.getElementById( id );
			break;
	}

};

var charCode = function(string){
	return string.charCodeAt(0);
}

/***************
* Returns -1 if number is negative, 1 if positive. Functionally identical to x/abs(x)
****************/

function sign(x) {
    return (x > 0) - (x < 0);
}

/***************
* Returns "a" if num is less than "a", "b" if num is greater than "b", and num if between
****************/

function constrain(num, a, b){
	return num = Math.min(Math.max(num, a), b);
}

/*******************
* function degToRad
* Input- A number of degrees "d" to be converted to radians
* Return- Angle "d" in radians.
********************/

function degToRad(d) {
    // Converts degrees to radians
    return d * 0.0174532925199432957;
}

/*******************
* Input- a string containing a human-readable number.
* Return- the number from the input string, if possible, otherwise zero.
********************/

function extractNumber(value)
{
    var n = parseInt(value);
	
    return n == null || isNaN(n) ? 0 : n;
}


/*******************
* Input- two 2-dimensional points.
* Return- the distance between the input points.
********************/

function distance(p1,p2){
	return Math.sqrt(Math.pow((p2.x-p1.x),2)+Math.pow((p2.y-p1.y),2));
}

Array.prototype.min = function(){
	return Math.min.apply({},this);
}

Array.prototype.max = function(){
	return Math.max.apply({},this);
}

Array.prototype.last = function(){
	return this[this.length-1];
}