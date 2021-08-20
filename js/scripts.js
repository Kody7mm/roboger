
//Business Logic
function robotTranslate(number) {
  let output = [];
  for (i = 0; i <= number; i++) {
    if (i.toString().includes(69)) {
      output.push("I see what you did here...");
    } else if (i.toString().includes(42)) {
      output.push("Answer to the Ultimate Question of Life, the Universe and Everything!")
    } else if (i.toString().includes(3)) {
      output.push("Wont you be my neighbor?!")
    } else if (i.toString().includes(2)) {
      output.push("boop!")
    } else if (i.toString().includes(1)) {
      output.push("Beep!")
    } else {
      output.push(i);
    }

  }
  return output;
};

//User Logic//
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    let userInput = $("#numberVal").val();
    let newArray = robotTranslate(userInput);

    let joinedArray = [];
    joinedArray.push(newArray.join(" "));

    $(".speech-bubble").show();
    $("#result").text(joinedArray);

    $("#result").show();
  });
});