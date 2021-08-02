
window.alert("Welcome to the The Simmer Magazine! Make sure you have V.A 4.5 (Visual Ability) version on your devices to listen to the articles. Your devices may have problems with listening without updating the Visual Ability API.");

var synth = window.speechSynthesis;

function speak() {
  var utterThis = new SpeechSynthesisUtterance("Dear reader! Make sure you have V.A 4.5 (Visual Ability) version on your devices to listen to the articles! Your devices, may have problems with listening without updating the Visual Ability API.");
  synth.speak(utterThis);
}

function stop()
{
    speechSynthesis.cancel();
}

function myFunction() {
  let text;
  let person = prompt("Please enter your National Digital ID:", "");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Welcome " + person + "! You rock, you have successfully subscribed to the magazine!";
  }
  document.getElementById("demo").innerHTML = text;
}