function skillMembers() {
    var members = document.getElementsByClassName("member");
    var i;
    for (i = 0; i < members.length; i++) {
        members[i].style.display = "none";
    }
    var skill = document.getElementById("skill").value;
    var members = document.getElementsByClassName(skill);
    var i;
    for (i = 0; i < members.length; i++) {
        members[i].style.display = "block";
    }
}