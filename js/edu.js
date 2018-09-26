function validation() {
    var ten = document.getElementById("ten").value;
    if (ten == "") {
        document.getElementById("tenspanm").style.display = "block";
        document.getElementById("infotenm").className = "error";
        document.getElementById("infotenm").innerHTML = "Enter month and year";
        return false;
    } else {
        document.getElementById("tenspanm").style.display = "none";
    }

    var tennum = document.getElementById("tennumber").value;
    var len = tennum.length;
    if (len != 7) {
        document.getElementById("tenspan").style.display = "block";
        document.getElementById("infoten").className = "error";
        document.getElementById("infoten").innerHTML = "Only Seven numbers";
        return false;

    } else {
        document.getElementById("tenspan").style.display = "none";
    }


   

    if ((document.getElementById('pg').checked) || (document.getElementById('ug').checked) || (document.getElementById('dip').checked)) {
        document.getElementById("checkedu").style.display = "none";

    } else {
        document.getElementById("checkedu").style.display = "block";
        document.getElementById("infocheck").className = "error";
        document.getElementById("infocheck").innerHTML = "Select what you done";
        return false;
    }
}
