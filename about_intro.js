const items =[
    { title : '이름', content : '박준영'},
    { title : '생년월일', content : '1991.08.16'},
    { title : '지역', content : '경기도 수원'},
    { title : '좋아하는 것', content : '여행, 음악, 스포츠'},
    { title : 'Mail', content : 'jaywapp16@gmail.com'}
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
    div.append(createTextElement('div', 'content', item.content));

    return div;
}

var grid = document.getElementById('grid');

var intro = document.createElement('div');
intro.setAttribute('id', 'sub_grid');
intro.setAttribute('class', 'intro');

intro.append(createTextElement('div', 'title', '소개'));

for(var i = 0; i<items.length; i++){
    intro.append(craeteTypeElement('intro_item', items[i]));
}

grid.append(intro);