(function (){
  var target = document.createElement("div");
  var newtxt = document.createTextNode("日程入力フォーム");
  var body = document.getElementById('body');
  target.appendChild(newtxt);
  target.id = 'date_input';
  body.appendChild(target);
  var date_area = document.createElement('div');
  var input_name = document.createElement('input');
  input_name.type = 'text';
  input_name.name = 'name';
  date_area.appendChild(input_name);
  date_area.appendChild(document.createElement('br'));
  for(var i = 0; i<5;i++){
    for(var j = 0; j < 7; j++){
      var label = document.createElement('label');
      var check = document.createElement('input');
      check.type = 'checkbox';
      check.value = (i*7+j).toString();
      switch (i) {
        case 0:

          label.textContent ='月' + j;
          break;
        case 1:
          label.textContent ='火' + j;
          break;
        case 2:
          label.textContent ='水' + j;
          break;
        case 3:
          label.textContent ='木' + j;
          break;
        case 4:
          label.textContent ='金' + j;
          break;
        default:
          alert('error in date_area');
      }
      date_area.appendChild(check);
      date_area.appendChild(label);
    }
    date_area.appendChild(document.createElement('br'));
  }
  target.appendChild(date_area);
  var add = document.createElement('button');
  add.textContent = '追加';
  target.appendChild(add);
})();
