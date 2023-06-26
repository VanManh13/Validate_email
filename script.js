function isValidEmail(email) {
  var pattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  return pattern.test(email);
}

// kiem tra 
var validEmails = [
  "a@gmail.com",
  "ab@yahoo.com",
  "abc@hotmail.com",
  "@gmail.com",
  "ab@gmail.",
  "@#abc@gmail.com"
];

validEmails.forEach(function(email) {
  if (isValidEmail(email)) {
    console.log(email + " hợp lệ.");
  } else {
    console.log(email + " không hợp lệ.");
  }
});


