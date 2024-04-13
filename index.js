function sendsms(){
    value1=document.getElementById("i1").value
    value2=document.getElementById("i2").value
    element=document.createElement("li")

    if(value1!=""){
        text1=document.createTextNode(value1) //hi
        element.appendChild(text1)//<li>hi</li>
        element.style.color="red"
        mydiv=document.getElementById("mydiv")
        mydiv.appendChild(element)//<div><li>hi</li></div>
        document.getElementById("i1").value=""
    }
    else if(value2!=""){
        text2=document.createTextNode(value2) //hi
        element.appendChild(text2)//<li>hi</li>
        element.style.color="blue"
        mydiv=document.getElementById("mydiv")
        mydiv.appendChild(element)//<div><li>hi</li></div>
        document.getElementById("i2").value=""
    }
}