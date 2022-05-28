menuListArray = ["Pizza Vegetariana",
                 "Pizza de Frango",
                 "Pizza portuguesa",
                 "Pizza quatro queijos",
                 "Pizza de Calabresa",
                 "Pizza Extravaganza"];

function getMenu(){
var htmldata="";//variável tem que ter o valor =""
menuListArray.sort(); // aqui seria menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>' // o final não é 'br' e sim '<br>'
}
document.getElementById("displayMenu").innerHTML=htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="pizzaImg.png"/>'
//aqui faltou o comando var imgtags='<img id="im1" src="pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i] + '<br>'; // o final não é 'br' e sim '<br>'
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}