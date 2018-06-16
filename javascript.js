electron = require('electron')
fs = electron.remote.require('fs')

// we'll go ahead and write everything into json after we finish inputting

$(document).ready(function() {
    let activities
    let ToWritetoText
    taskintake()

    function taskintake() {

        fs.readFile('activities.json', (err, data) => {
            if (err) throw err;
            console.log(data)
            activities = JSON.parse(data);
            console.log(activities);
            ToWritetoText = activities
            // console.lhbog(activities[0]);
            // console.log(activities[0].task)

            //appending tasks to their tables
            for (let i = 0; i < activities.length; i++) {
                switch (activities[i].time) {
                    case "Daily":
                        //we will need to rewrite this for the loop once i know it works
                        $("#Daily").append("<tr><td>" + activities[i].activity + "</td><td>" + activities[i].task + "</td>");
                        break;

                    case "Weekly":
                        $("#Weekly").append("<tr><td>" + activities[i].activity + "</td><td>" + activities[i].task + "</td>");

                        break;
                    case "Monthly":
                        $("#Monthly").append("<tr><td>" + activities[i].activity + "</td><td>" + activities[i].task + "</td>");

                        break;
                }
            }

        });

        console.log('This is after the read call');
        //probably going to be putting this in a loop when we have more than 1 item
        console.log(activities);

    }




    // $(".to-do-items").append('<p> Take a shower</p>');
    // here we'll append all the daily to do items

    // now we create a button in order to make the form appear
    Button = $("<button>Add Item</button>");
    Button.addClass("add-for-today")
    $(".menu-buttons").append(Button);


    // const multiplyES6 = (x, y) => { return x * y };
    $(".add-for-today").on("click", function() {

        // now we add the form for a new event
        $(".menu-buttons").append('<form id="my-input"> <input type="radio" name="time" value="today" checked> Today<br> <input type="radio" name="time" value="week" checked> This Week<br> <input type="radio" name="time" value="month" checked> This Month<br> <input id="repeating" type="checkbox"> Repeating? <br>  Task name: <input type="text" name="task-name" id="task-name"><br> Details: <input type="text" name="task-details" id="task-details"><br> <button type="submit" form="my-input" id="submit" value="Submit">Submit</button></form>'); //append a new form element with id mySearch to <body>
        // the submit button needs to hide the added buttons and form fields,
        // we might want to disable the add item button or at least hide it until we're gonna add more stuff
        console.log("event fired")
        console.log(ToWritetoText)
    })

    $("#submit").on("click", function() {
        let Activity = $("#task-name").val().trim();
        let Details = $("#task-details").val().trim();

        let NewTask = {
            Activity: Activity,
            Details: Details,
        }

        let activities = (JSON.stringify(activities))
        console.log(activities)
        // alert(NewTask.Activity)
        // $("#myTable").append("<tr><td>" + NewTask.Activity + "</td><td>" + NewTask.Details + "</td>");
        fs.appendFile("./test.txt", (NewTask.activity + NewTask.Details), (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    })

})

// let TestTimer = setInterval(myTimer, 1000000); // the timer should be approximately an hour. It'll check for new records every hour
// function myTimer() { 
//     alert("Hello! I am an alert box!!");
// }