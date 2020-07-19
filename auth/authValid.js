function valid(form){
    var fail=false;
    var email = form.email.value;
    var pass = form.password.value;
    var exception;
    if (!validateEmail(email)) {
        exception="Такой email невалидный(не может существовать)";
        document.getElementById('email_help').innerHTML = exception;
    }
    else{
      document.getElementById('email_help').innerHTML = '';
    }
    if (!validatePassword(pass)) {
        exception="Пароль должен содержать как минимум одну цифру и одну большую букву";
        document.getElementById('password_help').innerHTML = exception;
    }
    else{
      document.getElementById('password_help').innerHTML = '';
    }
    if (exception) {
         document.getElementById('mistake').innerHTML = 'Внимание! Невалидные данные в полях вводах';
    }
    else{
         document.getElementById('mistake').innerHTML = '';
    }
    login();
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(pass){
  return validateNumber(pass)&&validateLiteral(pass);
}

function validateNumber(pass){
  var regNumber = /[0-9]/;
  return regNumber.test(pass);
}

function validateLiteral(pass){
  var reg = /[A-Z]/;
  return reg.test(pass);
}

login = function() {
  document.getElementById("hide").style.display = "block";
  document.getElementById("window").style.display = "block";
}