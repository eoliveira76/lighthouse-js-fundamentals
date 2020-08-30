/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
var count = 60
while (count >=0) {
  switch (count) {
    case 50:
      console.log("Orbiter transfers from ground to internal power" );
      count = count - 1;
      break;

    case 31:
      console.log("Ground Launch sequencer is go for auto sequence start");
      count = count - 1;
      break;

    case 16:
      console.log("Activate launch pad sound suppression system");
      count = count - 1;
      break;

    case 10:
      console.log("Activate main engine hydrogen burnoff system");
      count = count - 1;
      break;

    case 6:
      console.log("Main engine starat");
      count = count - 1;
      break;

    case 0:
      console.log("Solid rocket booster ignition and liftoff!");
      count = count - 1;
      break;

    default:
      console.log("T-" + count + " Seconds");
      count = count - 1;
      break;
  }
}
