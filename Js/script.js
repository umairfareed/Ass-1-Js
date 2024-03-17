document.getElementById("show1").onclick = function () {
    document.getElementById("org").innerHTML="<h5>Variable names show in output</h5>"
    document.getElementById("otpt").innerHTML = "<ul><li>A variable name cannot contain any spaces.</li><li>A variable name can contain only letters,numbers'collar sign and underscores.</li><li>Though a variable name can't be any of javascriptkeywords, it can contain keywords.For examples <code> userAlert </code> and <code>myVar</code> are legal.</li><li>Capital letters are fine,but be careful.Variabl names are case sensitive.</li></ul> "
}
document.getElementById("show2").onclick = function () {
    document.getElementById("org").innerHTML="<h5>camelCase show in output</h5>"
    document.getElementById("otpt").innerHTML = "<h4>Examples</h4><ul><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></ul> "
}

document.getElementById("sum").onclick = function () {
    document.getElementById("org").innerHTML = " first number=20 <br> second number=10 <br>Sum= 20+10"
    document.getElementById("otpt").innerHTML = "<center>30</center>"
}
document.getElementById("sub").onclick = function () {
    document.getElementById("org").innerHTML = "first number=20 <br> second number=10 <br>Subtract= 20-10"
    document.getElementById("otpt").innerHTML = "<center>10</center>"
}
document.getElementById("mul").onclick = function () {
    document.getElementById("org").innerHTML = "first number=20 <br> second number=10 <br>Multiply= 20*10"
    document.getElementById("otpt").innerHTML = "<center>200</center>"
}
document.getElementById("div").onclick = function () {
    document.getElementById("org").innerHTML = "first number=20 <br> second number=10 <br>Divide= 20/10"
    document.getElementById("otpt").innerHTML = "<center>2</center>"
}
document.getElementById("cal").onclick = function () {
    document.getElementById("org").innerHTML = "45/5*2+4**2-( 6+3 )"
    document.getElementById("otpt").innerHTML = "<center>25</center>"
}
document.getElementById("btn-org").onclick = function () {
    document.getElementById("org").innerHTML = null
}
document.getElementById("btn-otpt").onclick = function () {
    document.getElementById("otpt").innerHTML = null
}