function getSumFromGroup(group) {
    var s = 49.9;
    for (var i = 0; i < group.length; i++) {
        if (group[i].checked) {
            s += parseFloat( group[i].value);
        }
    }
    return s;
}
function getTotal() {
    var result = document.getElementsByTagName("input");
    var s = getSumFromGroup(result);
    document.getElementById("screen").value = s + " грн.";
}