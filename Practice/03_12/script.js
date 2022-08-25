/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

 class Bedsheet {
    constructor(
       name,
       colour, 
       pattern, 
       size,
       brand,
       usage
    )
   { this.name = name;
    this.colour = colour;
    this.pattern = pattern;
    this.size = size;
    this.brand = brand;
    this.usage = usage;
   }
   currentlyUsed(usage) {
    this.usage = usage;
   }
}

const floralBedsheet = new Bedsheet("bedsheet 1", "white", "floral", "double", "Urban Outfitters", "Not in Use")
const jungleBedsheet = new Bedsheet("bedsheet 2", "green and yellow", "plants and jungle","double", "IKEA", "In Use")

console.log(floralBedsheet)
console.log(jungleBedsheet)