$(document).ready(function() {
    $('#adicionar-tarefa').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $("li").remove();
        alert('Todas as tarefas foram apagadas')
    })

    $('#botao-apagar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);
        $('ul').append(novoItem);

        $('ul').on('click', 'li', function() {
            $(this).addClass("tarefa-concluida");
        });


        $('#tarefa').val("");
    
    })
})