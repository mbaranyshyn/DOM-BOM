window.addEventListener('scroll', function(e) {
    var $parallax = document.getElementById('parallax');
    var pagY = window.pageYOffset;
    $parallax.style.backgroundPosition = '0px ' + pagY * 0.4 + 'px';
})