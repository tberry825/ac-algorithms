  function transportationOptions() {
    const choice = prompt("What is today's weather? (sunny, cloudy, rain):");
    let time;
    let hungry;

     // if choice is sunny, ask what time is it?
    // if time is > 30 min, 
    // output walk
    // else if time is < 30 min 
    // output take bus
    
    if (choice === "sunny") {
        time = parseInt(prompt("What time is it? Enter a number greater or less than 30:"));  //he parseInt() function parses a string argument and returns an integer 
        if (time > 30) {
            alert("You have time to walk"); //The alert() method is used to display a virtual alert box instead of input box
        } else if (time < 30) {
            alert("I see the bus in your future");
        }

    // if choice is  cloudy, ask waht if hungry?
    // if answer is yes, 
    // output walk
    // else if answer is no, 
    // output  bus

    } else if (choice === "cloudy") {
         hungry = prompt("Are you hungry? (yes or no):").toLowerCase(); //The toLowerCase() method returns the value of the string converted to lower case
        if (hungry === "yes") {
            alert("You can walk to grab a bite to eat");
        } else if (hungry === "no") {
            alert("I see the bus in your future");
        }

    // what is the today's weather?
    // drop down for sunny, cloudy, rain
    // if input is  rain
    // output  take the bus

    } else if (choice === "rain") {
        prompt("Check what time the bus is coming, we don't want to be late?");
    } else {
        alert("Invalid input. Please enter sunny, cloudy, or rain.");
    }
}

transportationOptions();