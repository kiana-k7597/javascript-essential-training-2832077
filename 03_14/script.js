/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

class Book {
  constructor(
    name, 
    pageNum, 
    genre,
    dateBought,
  )
  {
    this.name = name;
    this.pageNum = pageNum;
    this.genre = genre;
    this.dateBought = dateBought;
  }
  bookAge() {
  let now = new Date();
  let bought = new Date(this.dateBought);
  let elapsed = now - bought;
  let daysSinceBought = Math.floor(elapsed / (1000 * 3600 * 24))
  return daysSinceBought;
  }
}

const normalPeople = new Book(
  "Normal People",
  300,
  "fiction", 
  "December 5, 2019 15:00:00 PST"
)

const beautifulWorldWhereAreYou = new Book(
  "Beautiful World Where Are you",
  250,
  "fiction",
  "October 14, 2020 22:00:00 EST"
)

const conversationsWithFriends = new Book(
  "Conversations With Friends",
  500,
  "fiction",
  "June 14, 2022 13:00:00 EST"
)

const untitled = new Book(
  "untitled",
  "unknown",
  "fiction",
  null
)

console.log("Book 1:", normalPeople )
console.log("Days since buying", normalPeople.bookAge())
console.log("Book 2:", beautifulWorldWhereAreYou , beautifulWorldWhereAreYou.bookAge())
console.log("Book 3:", conversationsWithFriends , conversationsWithFriends.bookAge())
console.log("Book 4:", untitled , untitled.bookAge())

