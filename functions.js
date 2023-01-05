const timeline_id = 'timeline_item';
const intro_id = 'intro_item';

export function createTextElement(tag, id, value) {
    var ele = document.createElement(tag);
    ele.setAttribute('id', id);
    ele.append(document.createTextNode(value));

    return ele;
}

export function createIntroItemElement(title, content){

    var div = document.createElement('div');
    div.setAttribute('id', intro_id);

    div.append(createTextElement('div', 'title', title));
    div.append(createTextElement('div', 'content', content));

    return div;
    
}

export function createEduItemElement(title, date, comment){

    var div = document.createElement('div');
    div.setAttribute('id', timeline_id);

    div.append(createTextElement('div', 'title', title));
    div.append(createTextElement('div', 'date', date));
    div.append(createTextElement('div', 'comment', comment));

    return div;

}

export function createExperienceItemElement(title, date, comment){

    var div = document.createElement('div');
    div.setAttribute('id', timeline_id);

    div.append(createTextElement('div', 'title', title));
    div.append(createTextElement('div', 'date', date));
    div.append(createTextElement('div', 'comment', comment));

    return div;

}