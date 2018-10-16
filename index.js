function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
 const lis = document.querySelectorAll('ul.ranked-list li');
 for (var i=0; i < lis.length; i++) {
   lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
 }
}

function deepestChild() {
  var elements = document.querySelector('#grand-node div');
  var nextElement = elements.children[0];
  while (nextElement) {
    elements = nextElement;
    nextElement = elements.children[0];
  }
  return elements;
}