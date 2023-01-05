function createTextElement(tag, id, value) {
    var ele = document.createElement(tag);
    ele.setAttribute('id', id);
    ele.append(document.createTextNode(value));

    return ele;
}


function craeteTypeElement(id, item) {

    var div = document.createElement('div');
    div.setAttribute('id', id);

    div.append(createTextElement('div', 'title', item.title));
    div.append(createTextElement('div', 'date', item.date));
    div.append(createTextElement('div', 'comment', item.comment));

    return div;
}

const path = './data/edu.json';

let http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        write(this.responseText); //this = http
    }
}

http.open("GET", path, true);
http.send();


function write(jsonText) {

    let json = JSON.parse(jsonText)

    var grid = document.getElementById('grid');

    var education = document.createElement('div');
    education.setAttribute('id', 'sub_grid');
    education.setAttribute('class', 'education');

    education.append(createTextElement('div', 'title', '학력'));

    json.forEach(element => {
        intro.append(craeteTypeElement('timeline_item', element));
    });

    grid.append(education);
}