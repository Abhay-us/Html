function helloWorld(){
    document.getElementById('para1').innerHTML="<b>Hello World</b>";
}

function hide(){
    // document.getElementById('para1').innerHTML="";
    document.getElementById('para1').innerText="<b>This</b>";
    let a = document.getElementById('para1').innerText;
    document.getElementById('para2').innerHTML= a;
}