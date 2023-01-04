
const title = 'Jaywapp\'s World';
const htmls = [
    { name: 'home', value: 'home.html' },
    { name: 'about', value: 'about.html' },
    { name: 'portfolio', value: 'portfolio.html' },
    { name: 'experience', value: 'experience.html' },
    { name: 'contact', value: 'contact.html' },
];

function getTitleElement(value) {

    // <h4></h4>
    var element = document.createElement('h4');

    // <h4>[value]</h4>
    element.append(document.createTextNode(value));

    return element;
}

function getLinksElement() {

    // <ul></ul>
    var ul = document.createElement('ul');

    // <ul class="nav-links"></ul>
    ul.setAttribute('class', 'nav-links');

    for (var i = 0; i < htmls.length; i++) {

        var text = document.createTextNode(htmls[i].name);

        // <a></a>
        var a = document.createElement('a');

        // <a href="[htmls[i].value]"></a>
        a.setAttribute('href', htmls[i].value);
        // <a href="[htmls[i].value]">[htmls[i].name]</a>
        a.append(text);
    
        // <li></li>
        var li = document.createElement('li');
        // <li><a href="[htmls[i].value]">[htmls[i].name]</a></li>
        li.append(a);

        /*
        <ul class="nav-links">
            <li><a href="[htmls[i].value]">[htmls[i].name]</a></li>
            .
            .
            .
        </ul>
        */
        ul.append(li);

    }

    /*
    <ul class="nav-links">
        <li><a href="[htmls[i].value]">[htmls[i].name]</a></li>
            .
            .
            .
    </ul>
    */
    return ul;
}

// <div></div>
var nav_center = document.createElement('div');

// <div class="nav-center"></div>
nav_center.setAttribute('class', 'nav-center');

/*
<div class="nav-center">
    <h4>[title]</h4>
    <ul class="nav-links">
        <li><a href="[htmls[i].value]">[htmls[i].name]</a></li>
            .
            .
            .
    </ul>
</div>
 */
nav_center.append(getTitleElement(title));
nav_center.append(getLinksElement());

// nav element 생성
/*
<nav>
    <div class="nav-center">
        <h4>[title]</h4>
        <ul class="nav-links">
            <li><a href="[htmls[i].value]">[htmls[i].name]</a></li>
                .
                .
                .
        </ul>
    </div>
</nav>
*/
var nav = document.createElement('nav')
nav.append(nav_center);

// body에 추가
document.body.append(nav);