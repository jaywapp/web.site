const items =[
    { title : '펜타큐브', date : '2017.03~', comment : 'SW 개발팀 / 대리'},
    { title : 'DLAB', date : '2016.07 ~ 2016.12', comment : 'SW 교육과정개발/교육'},
    { title : '아주대병원 정보관리팀', date : '2015.0 ~ 2016.02', comment : '서버관리 및 O/A'}
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

var compary = document.createElement('div');
compary.setAttribute('id', 'sub_grid');
compary.setAttribute('class', 'compary');

compary.append(createTextElement('div', 'title', '경력'));

for(var i = 0; i<items.length; i++){
    compary.append(craeteTypeElement('timeline_item', items[i]));
}


grid.append(compary);