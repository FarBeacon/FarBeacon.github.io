setTimeout(() => {  
    var elements = document.getElementsByClassName("fadeInUp");

    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i]);
        elements[i].style.display = 'block';
    }
}, 10);