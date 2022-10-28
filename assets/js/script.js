var numFormEl = $('#num-form');
var numListEl = $('#num-list');

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var numItem = $('input[name="num-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!numItem) {
    console.log('No number filled out in form!');
    return;
  }

  // print to the page
  numListEl.append('<li>' + numItem + '</li>');

  // clear the form input element
  $('input[name="num-input"]').val('');
}

// Clear List
$("#clearBtn").click(function(){
  $("#num-list").empty();
})

// Create a submit event listener on the form element
numFormEl.on('submit', handleFormSubmit);


