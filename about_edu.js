const items =[
    { title : '아주대학교', date : '2010.03 ~ 2017.02', comment : '정보컴퓨터공학부'},
    { title : '광주고등학교', date : '2007.03 ~ 2010.02', comment : '경기도'}
]

function createTextElement(tag, id, value){
    var ele = document.createElement(tag);
    ele.setAttribute('id', id);
    ele.append(document.createTextNode(value));

    return ele;
}


function craeteTypeElement(id, item){

    var div = document.createElement('div');
    div.setAttribute('id', id);

    div.append(createTextElement('div', 'title', item.title));
    div.append(createTextElement('div', 'date', item.date));
    div.append(createTextElement('div', 'comment', item.comment));

    return div;
}

var grid = document.getElementById('grid');

var education = document.createElement('div');
education.setAttribute('id', 'sub_grid');
education.setAttribute('class', 'education');

education.append(createTextElement('div', 'title', '학력'));

for(var i = 0; i<items.length; i++){
    education.append(craeteTypeElement('timeline_item', items[i]));
}


grid.append(education);