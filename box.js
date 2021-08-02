//extend keyword is used to create a child class of the class mentioned after extend keyword
//super keyword is used to refer to the parent class and calls the constructor properties and methods

class Box extends BaseClass { constructor(x, y, width, height){ super(x,y,width,height); this.image = loadImage("sprites/wood1.png"); } };

// class Box extends BaseClass {
//   constructor(x, y, width, height) {
//     super(x,y,width,height);//super is to inherit properties and function of baseclass
//     //this.image=loadImage("images/wood1.png");
  }
  //  display(){
  //  super.display();
  //  }
}