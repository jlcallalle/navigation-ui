var MyApp = {

    menuNav : {
        desplegar : function() {
             $('.boton-hamburgesa').click(function(event) {
                    event.stopPropagation();
                    event.preventDefault();

                    if (!$(this).hasClass('activado')) {
                        $(this).addClass('activado');
                        console.log('activado');
                    } else {
                        $(this).removeClass('activado');
                        console.log('no activado');
                    };
             });
        }
    }
};

$(document).ready(function(){
    MyApp.menuNav.desplegar();
});






