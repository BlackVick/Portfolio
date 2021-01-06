var theName = document.getElementById("user_name").value;
var theMail = document.getElementById("user_mail").value;
var thePhone = document.getElementById("contact_number").value;
var theSubject = document.getElementById("theSubject").value;
var theMsg = document.getElementById("message").value;
var submitBtn = document.getElementById("theBtn");

//submit click
submitBtn.onclick = () => {
  if (
    theName != "" &&
    theMail != "" &&
    thePhone != "" &&
    theSubject != "" &&
    theMsg != ""
  ) {
    theName = "";
    theMail = "";
    thePhone = "";
    theSubject = "";
    theMsg = "";
  }
};
