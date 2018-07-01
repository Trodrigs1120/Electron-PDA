electron = require('electron')
fs = electron.remote.require('fs')



$(document).ready(function() {
    let activities
    // let ToWritetoText unused at this time

    taskintake()


    function taskintake() {

        fs.readFile('activities.json', (err, data) => {
            if (err) throw err;
            activities = JSON.parse(data);
            console.log(activities);
            ToWritetoText = activities


            for (let i = 0; i < activities.length; i++) {
                switch (activities[i].time) {
                    case "Daily":
                        //we will need to rewrite this for the loop once i know it works
                     
                        $("#Daily").append("<tr><td> <input id="+'Task'+i+ " type='checkbox'> " + activities[i].activity + "</td><td>" + activities[i].task + "</td>");
                        break;

                    case "Weekly":
                        $("#Weekly").append("<tr><td> <input id="+'Task'+i+ " type='checkbox'>  " + activities[i].activity + "</td><td>" + activities[i].task + "</td>");

                        break;
                    case "Monthly":
                        $("#Monthly").append("<tr><td><input id="+'Task'+i+ " type='checkbox'>   " + activities[i].activity + "</td><td>" + activities[i].task + "</td>");

                        break;
                }
            }

        });
    }

    $("#submit").on("click", function() {
        let testtask
        let TaskName = $("#task-name").val().trim();
        let TaskDetails = $("#task-details").val().trim();


       

        if ($("#Today").is(':checked')) {
            newtask = {
                time: "Daily",
                activity: TaskName,
                task: TaskDetails
            }
            activities.push(newtask)
        } else if ($("#Weekly").is(':checked')) {b
            newtask = {
                time: "Weekly",
                activity: TaskName,
                task: TaskDetails
            }
            activities.push(newtask)
        } else {
            newtask = {
                time: "Monthly",
                activity: TaskName,
                task: TaskDetails
            }
            
            activities.push(newtask)
        }

        //  let testtask = {time: "Weekly", activity: "Trim Beard", task: "Keep your beard growth under control"}
        //  activities.push(testtask)

        WriteTasks()



    })
    let i = 0;

    function WriteTasks() {

        if (i == 0) {
            fs.writeFile("./activities.json", ("[" + '{"time":' + '"' + activities[i].time + '"' + "," + '"activity":' + '"' + activities[i].activity + '"' + "," + '"task":' + '"' + activities[i].task + '"' + '}' + ","), (err) => {
                if (err) throw err;
                console.log('prepended');
            });
        } else if (i === activities.length - 1) {
            fs.appendFile("./activities.json", ('{"time":' + '"' + activities[i].time + '"' + "," + '"activity":' + '"' + activities[i].activity + '"' + "," + '"task":' + '"' + activities[i].task + '"' + '}' + "]"), (err) => {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        } else {
            fs.appendFile("./activities.json", ('{"time":' + '"' + activities[i].time + '"' + "," + '"activity":' + '"' + activities[i].activity + '"' + "," + '"task":' + '"' + activities[i].task + '"' + '}' + ","), (err) => {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        }
        i++
        if (i < activities.length) {
            WriteTasks()
        }
    }


});
// let TestTimer = setInterval(myTimer, 1000000); // the timer should be approximately an hour. It'll check for new records every hour
// function myTimer() { 
//     alert("Hello! I am an alert box!!");