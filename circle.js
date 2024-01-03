class Circle {
  radius= 1.0;
  colorrData = "Red";

  //to create a constructor with optional parameter
  constructor(radius, color) {
    if (typeof radius !== "undefined") {
      this.radius = radius;
    }
    if (typeof color !== "undefined") {
      this.color = color;
    }
  }

  //function to get radius value with number as return type
  getRadius() {
    return this.radius;
  }

  //function to set radius value
  setRadius(radius){
    this.radius = radius;
  }

  //function to get color value with custom return type colorData
  getColor() {
    return this.color;
  }

  //function to set the color value
  setColor(color) {
    this.color = color;
  }

  //to return string of member variables value
  toString() {
    return `Radius: ${this.radius} Color: ${this.color}`;
  }

  //to compute and return circle area using radius
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  //to compute and return circle circumference using radius
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

//to invoke the Circle-class constructor with no param
let c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());

//to invoke the Circle-class constructor with one param
let c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());

//to invoke the Circle-class constructor with all the params
let c3 = new Circle(2.2, "Yellow");
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());