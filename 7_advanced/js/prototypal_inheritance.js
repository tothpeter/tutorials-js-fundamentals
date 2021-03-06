+function(){
  'use strict';

  function Shape2d() {}

  Shape2d.prototype.getArea = function() {
    return this.sides[0] * this.sides[1];
  }

  function Rectangle(width, height) {
    this.sides = [ width, height, width, height ];
  }

  Rectangle.prototype = new Shape2d();
  Rectangle.prototype.constructor = Rectangle;

  var myRect = new Rectangle(5, 4);

  // console.log(myRect.constructor.name);
  // console.log(myRect.getArea());
  // console.log(myRect);
  // console.log(myRect.hasOwnProperty('getArea'));
  // console.log(myRect instanceof Rectangle);

  function Square(sidesLength) {
    this.sides = [ sidesLength, sidesLength, sidesLength, sidesLength ];
  }

  Rectangle.prototype = new Shape2d();
  Rectangle.prototype.constructor = Square;

  function Triangle(sideALength, sideBLength, sideCLength) {
    // Shadow the original fn
    this.getArea = function() {
      var semiperimeter = (sideALength + sideBLength + sideCLength) / 2;
      return Math.sqrt(semiperimeter * (semiperimeter - sideALength) * (semiperimeter - sideBLength) * (semiperimeter - sideCLength));
    }
  }

  Rectangle.prototype = new Shape2d();
  Rectangle.prototype.constructor = Triangle;

  // Make sure it wont appear in every object instantiated from the same calass
  // Triangle.prototype.getArea = function() {
  //   var semiperimeter = (sideALength + sideBLength + sideCLength) / 2;
  //   return Math.sqrt(semiperimeter * (semiperimeter - sideALength) * (semiperimeter - sideBLength) * (semiperimeter - sideCLength));
  // }

  var myTriangle = new Triangle(4, 5, 6);
  console.log(myTriangle.getArea());
}();