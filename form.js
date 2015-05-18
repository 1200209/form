function exec(){
var newElement = document.createElement("div");
var newtxt = document.createTextNode("日程入力フォーム");
var target = document.getElementById('body');
newElement.appendChild(newtxt);
newElement.id = 'test';
target.appendChild(newElement);
var add = document.createElement('button');
add.textContent = '追加';
target.appendChild(add);

}

exec();
