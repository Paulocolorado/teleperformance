function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username=="teleperformance" && password == "qwerty987654*") {
        alert("Successfully loged")
    } else {
        alert("Check the accesses")
    }
}
