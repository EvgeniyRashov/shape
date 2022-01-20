'use stric'

function Backend(){
    const [, domain] = document.getElementById("STR4").value.split("@");
    if ((domain == "gmail.com") ){ 
      alert("Регистрация пользователей с таким почтовым адресом невозможна");
      return false;
    } else {
      alert("Пользователь успешно зарегистрирован");
      return true;
    }
  }