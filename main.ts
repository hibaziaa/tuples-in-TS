// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Hiba"];

/* // define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, 'Hiba', 5]; */

//READONLY TUPLES
// define our tuple
let ourTuple1: [number, boolean, string];

// initialize correctly
ourTuple1 = [5, false, 'Hiba'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

/* // define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'Hiba'];

// throws error as it is readonly.
ourReadonlyTuple.push('Another string value'); */

//NAMED TUPLES.
const logIn: [username: string, password: number] = ["@hiba_zia", 12345];
console.log (logIn);