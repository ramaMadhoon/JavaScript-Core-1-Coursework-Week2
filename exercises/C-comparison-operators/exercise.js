/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
if (studentCount > mentorCount){
  var moreStudentsThanMentors = true ; // finish this statement
}
else { moreStudentsThanMentors = false ; }

var roomMaxCapacity = 25;
if ( roomMaxCapacity >= (studentCount + mentorCount)){
  var enoughSpaceInRoom = true; // finish this statement
}
else { enoughSpaceInRoom = false ;}

var personA = "Daniel";
var personB = "Irina";
if (personA === personB){
  var sameName = true ; // finish this statement
}
else { sameName = false ; }

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
