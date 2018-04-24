var onClick = function(e) {
    var $el = e.target;
    var changeColor = $el.style.backgroundColor;

    e.stopPropagation();
    alert("Click")

    $el.style.backgroundColor = 'yellow';

    setTimeout(() => {
        $el.style.backgroundColor = changeColor;
    }, 1000);
}



box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;


var onClick2 = function(e) {

    let $el = e.target;
    var previousColor;
    if ($el.style.backgroundColor != "yellow") {
        changeColor = $el.style.backgroundColor;
    }

    e.preventDefault();

    alert("CLICK");
    $el.style.backgroundColor = "yellow";
    setTimeout(() => {
        $el.style.backgroundColor = changeColor;
    }, 1000);
}
box11.onclick = onClick2;
box22.onclick = onClick2;
box33.onclick = onClick2;