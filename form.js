function exec(){
var newElement = document.createElement("div");
var newtxt = document.createTextNode("日程入力フォーム");
var target = document.getElementById('body');
newElement.appendChild(newtxt);
newElement.id = 'test';
target.appendChild(newElement);
var form = document.createElement('form');
from.id = 'input';
target.appendChild(form);
var add = document.createElement('button');
add.textContent = '追加';
form.appendChild(add);

}

exec();
