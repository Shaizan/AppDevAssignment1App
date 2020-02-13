var cards = [];
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
        },
        {
            path: '/self/',
            url: 'pages/self.html'  
        }
    ]
                         
});

var mainView = app.views.create(".view-main");
var $$ = Dom7;



$$(document).on('page:init', '.page[data-name="memories"]',function(){
    displayCards()
    
})


$('body').on('submit','#my-form', function() {
    
    mainView.router.navigate('/memories/');
  var formData = app.form.convertToData('#my-form');
  cards.push(app.form.convertToData('#my-form'));
 
    if (true) {  
  
      return false;
    } else {
      return true;
    }
})




function displayCards(){
    var divs = "";
    for( var i = 0; i < cards.length;++i) {
   divs +=    "<div class='card'> <div class='card-header'><h4>" +
            cards[i].title +
            "</h4></div> <div class='card-content card-content-padding'>" +
            cards[i].newmemory +
            "</div><div class='card-footer'> Tags:<div class='tags'>'"
           + cards[i].tags +
              "</div></div>"
      }
/*
  divs += "<div class='card'>"
			+"<p>My name is: "+data[i].Name+"</p>"
			+"<p>My job is: "+data[i].Job+"</p>"
			+"</div>";
      
  
  */
    
  $("#cardsdisp").append(divs);
}
