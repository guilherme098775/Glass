document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.getElementById('hamburguer');
    const navmenu = document.getElementById('navmenu');

    hamburguer.addEventListener('click', function() {
        navmenu.classList.toggle('active'); // Alterna a classe 'active' no menu
    });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextimage();
}, 5000) 

function nextimage (){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
