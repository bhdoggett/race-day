// Race Day Project
var raceNumber = Math.floor(Math.random() * 1000); // random number to generate the race number. This will be adjusted below for those who registred early.
var registerEarly;
if (Math.random() >= 0.5) {
    registerEarly = true;
} else {
    registerEarly = false;
} // uses random number to set a true / false boolean value to the registerEarly variable
var runnerAge = Math.floor(Math.random() * 80) // assuming the age of runners will not exceed 80, using a random number generator to determine the runnerAge variable.

if (runnerAge >= 18 && registerEarly === true) {
    raceNumber = raceNumber + 1000;
} // whether an adult registers early or not will determine their race number. Numbers at or above 1000 (i.e. those who register early) will race at the earliest time.

console.log(`Registered early: ${registerEarly}`);
console.log(`Runner age: ${runnerAge}`);
console.log(`Race number: ${raceNumber}`);

if (raceNumber >= 1000) {
    console.log(`Runner number ${raceNumber}, you will race at 9:30 AM.`);
} else if (raceNumber < 1000 && runnerAge >= 18) {
    console.log(`Runner number ${raceNumber}, Late adults run at 11:00 AM.`);
} else {
    console.log(`Runner number ${raceNumber}, Youth registrants run at 12:30 pm (regardless of registration)`);
}
