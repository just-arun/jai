document.addEventListener('DOMContentLoaded', function(){var elems=document.querySelectorAll('.sidenav'); var instances=M.Sidenav.init(elems, 'options');});document.addEventListener('DOMContentLoaded', function(){var elems=document.querySelectorAll('.modal'); var instances=M.Modal.init(elems, 'options');});document.addEventListener('DOMContentLoaded', function(){var elems=document.querySelectorAll('.carousel'); var instances=M.Carousel.init(elems, 'options'); var instance=M.Carousel.getInstance(elem); setInterval(function(){instance.next(1);}, 3000);});