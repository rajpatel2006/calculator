
function addvalue(val) {
    document.getElementById("screen").value += val;
}

function clearAll() {
    document.getElementById("screen").value = "";
}

function singleClear() {
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
}

function result()
{
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}
