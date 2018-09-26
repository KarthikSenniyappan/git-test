function formvalidate() {
    var tename = document.getElementById("username");
    var tname = /^[(A-Z){1,1}]+([a-z]{2,25})+$/;
    if (!tname.test(tename.value)) {
        document.getElementById("spanname").style.display = "block";
        document.getElementById("infoname").className = "error";
        document.getElementById("infoname").innerHTML = "First letter Uppercase and Name length should be less than 25";
        tename.focus;
        return false;
    } else {
        document.getElementById("spanname").style.display = "none";
    }
    var email = document.getElementById('publicemail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        document.getElementById("spanemail").style.display = "block";
        document.getElementById("infoemail").className = "error";
        document.getElementById("infoemail").innerHTML = "Enter valid email";
        email.focus;
        return false;
    } else {
        document.getElementById("spanemail").style.display = "none";
    }

    var phone = document.getElementById('mobilenumber');
    var tephone = /^([0-9]{0,10})+$/;

    if (!tephone.test(phone.value)) {
        document.getElementById("spannumber").style.display = "block";
        document.getElementById("infonumber").className = "error";
        document.getElementById("infonumber").innerHTML = "Enter valid Mobile number";
        phone.focus;
        return false;
    } else {
        document.getElementById("spannumber").style.display = "none";
    }
    var teurl = document.getElementById('publicurl');

    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if (!re.test(teurl.value)) {
        document.getElementById("spanurl").style.display = "block";
        document.getElementById("infourl").className = "error";
        document.getElementById("infourl").innerHTML = "URL Error";
        teurl.focus;
        return false;
    } else {
        document.getElementById("spanurl").style.display = "none";
    }

}