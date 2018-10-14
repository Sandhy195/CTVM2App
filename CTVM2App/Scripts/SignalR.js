//alert("Hey! its awesome!");
(function () {
    //var myHub = $.connection.myHub; //connect Hub(Class) - camelCase
    var myHub = $.connection.chat; //connect Hub(Class) - Attribute
    
    //event click Date
    $("#click-me").on("click", function () {
        myHub.server.getServerDateTime()
        .done(function (data) {
            WriteToPage(data);
        })
        .fail(function (e) {
            WriteToPage(e);
        })
    })
    $("#click-fromsendchat").click(function () {
        var textmessage = $("#txtmessagesendchat").val() || '';
        if(textmessage.length == 0){
            alert("message sendChat not available!");
            return;
        }
        myHub.server.send(textmessage);
    })

    //connect hub
    $.connection.hub.start()
    .done(function () {
        console.log("SignalR Worked!");
        WriteToPage("SignalR Worked!");
        myHub.client.announce("Connected");
    })
    .fail(function () {
        alert("Not Worked!");
        WriteToPage("Not Worked!");
    });

    myHub.client.sendChat = function (message) {

        WriteToPage("From sendChat : " +message);
    };
    myHub.client.announce = function (message) {

        WriteToPage(message);
    };

    var WriteToPage = function (message) {
        $("#welcome-message").append(message + "<br />");
    }
})()
