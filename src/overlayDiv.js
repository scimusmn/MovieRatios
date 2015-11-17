// function overlayDiv (el){
// 	var self = this;
//
// 	this.div = el;
// 	this.display = false;
//
// 	this.hide = function(){
// 		this.div.style.display = "none";
// 		this.display = false;
// 	}
//
// 	this.show = function(){
// 		this.div.style.display = "block";
// 		this.display = true;
// 	}
// };

var overLay = inheritFrom(HTMLElement, function() {

  this.hide = function() {
    this.style.display = 'none';
    this.display = false;
  };

  this.show = function() {
    this.style.display = 'block';
    this.display = true;
  };

  this.createdCallback = function() {
    this.display = false;
  };
});

document.registerElement('over-lay', overLay);
