$("p#ajax-control a.set_ajax").on( "click", function( event ) {
    event.preventDefault();
    set_handlers();
});

var set_handlers = function(){
    $("p#ajax-control a.set_ajax").unbind("click");

    $("p#ajax-control").html("<a href='/' class='unset_ajax'>Remove Ajax event handlers</a>").fadeOut("slow").fadeIn("slow");
    $("p#ajax-control a.unset_ajax").on("click",function(event){
       event.preventDefault();
       remove_handlers();
     });

    $("title").html("Testing Ajax (HTML) requests");
 
    $("h1").html("Testing Ajax (HTML) requests").fadeOut("slow").fadeIn("slow");
    $("#response").html("Ajax responses will appear here.").fadeOut("slow").fadeIn("slow");



     $(".ajax").on("click",function(event){
       event.preventDefault();
       get_request(event);
     });

     $("#signin").on("click",function(event){
       event.preventDefault();
       signin(event);
     });    

     $("#delete").on("click",function(event){
       event.preventDefault();
       delete_user(event);
     });    

     $("#update").on("click",function(event){
       event.preventDefault();
       update_email(event);
     });    

}

var remove_handlers = function(){
    $("p#ajax-control a.unset_ajax").unbind("click");
    $("p#ajax-control").html("<a href='/' class='set_ajax'>Apply ajax event handlers</a>").fadeOut("slow").fadeIn("slow");
 
    $("p#ajax-control a.set_ajax").on("click",function(event){
       event.preventDefault();
       set_handlers();
     });

    $("a.ajax").unbind("click");
    $("#signin").unbind("click");
    $("#delete").unbind("click");
    $("#update").unbind("click");

    $("#response").html("This is where the traditional HTTTP responses will appear.").fadeOut("slow").fadeIn("slow");
    $("title").html("Testing traditional HTTTP requests.");
    $("h1").html("Testing traditional HTTP requests").fadeOut("slow").fadeIn("slow");
}

var get_request = function(event){
    $.ajax({
        beforeSend: function(xhrObj){
           xhrObj.setRequestHeader("Accept","text/html");
        },
        type: "GET",
        url: event.target.href,
        dataType: "html",
    }).done(function(data) {
            $("#response").html(data).fadeOut("slow").fadeIn("slow");
    }).fail(function() {
            $("#response").html("Ajax GET request failed ... is the server running?").fadeOut("slow").fadeIn("slow");
    });

    
}

var signin = function(event){
    var uri = $(event.target).parent().attr('action');
    var name = $(event.target).siblings("input[name='name']").val();
    var password = $(event.target).siblings("input[name='password']").val();
    $.ajax({
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Accept","text/html");
        },
        type: "POST",
        url: uri,
        data: {"name":name,"password":password},
        dataType: "html"
    }).done(function(data) {
            $("#response").html(data).fadeOut("slow").fadeIn("slow");
    }).fail(function() {
            $("#response").html("Ajax POST request failed ... is the server running?").fadeOut("slow").fadeIn("slow");
    });
   
}

var delete_user = function(event){
    var uri = $(event.target).parent().attr('action');
    var method = $(event.target).siblings("input[name='_method']").val();

    $.ajax({
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Accept","text/html");
        },
        type: "POST",
        url: uri,
        data: {"_method":method},
        dataType: "html"
    }).done(function(data) {
            $("#response").html(data).fadeOut("slow").fadeIn("slow");
            $(".delete_me").fadeOut("slow",function(){
                 $(".delete_me").remove();
            });
    }).fail(function() {
            $("#response").html("Ajax DELETE request failed ... is the server running?").fadeOut("slow").fadeIn("slow");
    });

}

var update_email = function(event){
    var uri = $(event.target).parent().attr('action');
    var method = $(event.target).siblings("input[name='_method']").val();
    var email = $(event.target).siblings("input[name='email']").val();

    $.ajax({
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Accept","text/html");
        },
        type: "POST",
        url: uri,
        data: {"_method":method,"email":email},
        dataType: "html"
    }).done(function(data) {
            $("#response").html(data).fadeOut("slow").fadeIn("slow");
    }).fail(function() {
            $("#response").html("Ajax PUT request failed ... is the server running?").fadeOut("slow").fadeIn("slow");
    });
  
}