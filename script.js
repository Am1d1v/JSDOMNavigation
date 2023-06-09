//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//console.log(document.querySelector('#current').parentNode);
//console.log(document.querySelector('#current').parentNode.parentNode);

//console.log(document.querySelector('[data-current="3"]'));
//console.log(document.querySelector('[data-current="3"]').nextSibling); // #text т.к. у нас есть перенос строки
//console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);
//console.log(document.querySelector('[data-current="3"]').previousSibling);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//console.log(document.querySelector('#current').parentElement);

//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);

console.log(document.body.childNodes);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { // Перебрать все элементы, которые находятся в .body.childNodes, но без вывода #text
        continue;
    }

    console.log(node);
}