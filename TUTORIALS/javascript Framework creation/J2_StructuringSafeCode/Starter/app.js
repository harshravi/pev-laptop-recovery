var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true);
// g.HTMLGreeting('#greeting', false).HTMLGreeting('#newGreeting', true);
// console.log(g);

$('#login').on('click', function () {
    var loginGrtr = G$('John', 'Doe');

    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})