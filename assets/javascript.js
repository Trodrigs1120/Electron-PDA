$(document).ready(function () {
    $(".to-do-items").append('<p> Take a shower</p>');
    // here we'll append all the daily to do items
    
    
    // now we create a button in order to make the form appear
    Button=$("<button>Add Item</button>");
    Button.addClass("add-for-today")
    $(".to-do-items").append(Button);


    // const multiplyES6 = (x, y) => { return x * y };
    $(".add-for-today").on("click", function(){
 // now we add the form for a new event
 $(".to-do-items").append('<form id="mySearch"> <input type="radio" name="time" value="today" checked> Today<br> <input type="radio" name="time" value="week" checked> This Week<br> <input type="radio" name="time" value="month" checked> This Month<br> <input id="repeating" type="checkbox"> Repeating? <br>  Task name: <input type="text" name="task-name"><br> Details: <input type="text" name="task-details"><br> </form>'); //append a new form element with id mySearch to <body>

console.log("event fired")
    } )

//  $(".add-for-today").onclick = AddForm

})

