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
                         
});

var mainView = app.views.create(".view-main");

/*
$(".left").on("click",function(){
    router.navigate(memories'')
     //mainView.router.navigate({ name: '/memories/' })
})


$(document).ready(function(){
    
    $('#rememberbtn').click(function(){
        var newmem = $('#newmemory').val();
        var tags = $('#tags').val();
    
        alert(newmem);
        alert(tags);
        
    })

    
})
*/