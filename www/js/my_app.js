var app = new Framework7({
    root: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html'
        },
        {
            path: '/memories/',
            url: 'pages/memories.html'   
        }
    ]
                         
})



$(document).ready(function(){
    
    $('#rememberbtn').click(function(){
        var newmem = $('#newmemory').val();
        var tags = $('#tags').val();
    
        alert(newmem);
        alert(tags);
        
    })

    
})