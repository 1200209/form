(function() {
  String.prototype.splice = function(idx, s) {
    return (this.slice(0, idx) + s + this.slice(idx));
  };
  function isFirst(){}
  function space_pipe(scrap,class_num){
    var count = 0;
    for (var i = 0; i < scrap.length; i++) {
      if(count == class_num){
        return i;
      }
      if(scrap[i] == '|'){
          count++;
      }

    }
    if(i == scrap.length){
      alert('err');
    }
    return 0;
  }

  function insert(name, date, class_num) {
    var mon = /\| *(mon|月) *\|/ig;
    var tue = /\| *(tue|火) *\|/ig;
    var wed = /\| *(wed|水) *\|/ig;
    var thu = /\| *(thu|木) *\|/ig;
    var fri  = /\| *(fri|金) *\|/ig;
    var insert_index;
    reg = new Array(5);
    reg[0] = mon;
    reg[1] = tue;
    reg[2] = wed;
    reg[3] = thu;
    reg[4] = fri;
    var msg = document.getElementsByName('msg')[0].value;

    if (reg[date].exec(msg)) {
      alert(msg.slice(reg[date].lastIndex));
      scrap = reg[date].lastIndex + space_pipe(msg.slice(reg[date].lastIndex),class_num);
      document.getElementsByName('msg')[0].value = msg.splice(scrap,name);
    }
  }

  function start() {
    var name = document.getElementById('namae').value;
    var schedule = [];
    var date;
    var class_num;
    for (var i = 0; i < 35; i++) {
      schedule[i] = document.getElementById(i.toString());
      if (schedule[i].checked) {

        date = Math.floor(Number(schedule[i].value) / 7);
        class_num = Number(schedule[i].value) % 7;
        insert(name, date, class_num);
      }

    }

  }
  var target = document.createElement("div");
  var newtxt = document.createTextNode("日程入力フォーム");
  var body = document.getElementById('body');
  target.appendChild(newtxt);
  target.id = 'date_input';
  body.appendChild(target);
  var date_area = document.createElement('div');
  var input_name = document.createElement('input');
  input_name.type = 'text';
  input_name.id = 'namae';
  date_area.appendChild(input_name);
  date_area.appendChild(document.createElement('br'));
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 7; j++) {
      var label = document.createElement('label');
      var check = document.createElement('input');
      check.type = 'checkbox';
      check.id = check.value = (i * 7 + j).toString();
      switch (i) {
        case 0:
          label.textContent = '月' + j;
          break;
        case 1:
          label.textContent = '火' + j;
          break;
        case 2:
          label.textContent = '水' + j;
          break;
        case 3:
          label.textContent = '木' + j;
          break;
        case 4:
          label.textContent = '金' + j;
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
  add.onclick = function() {
    start();
  };

  target.appendChild(add);
})();
