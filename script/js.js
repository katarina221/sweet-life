function jos(){
    $("#jos").css("display", "block");
}
$(document).ready(function(){
    $("form").submit(function(){
        var ime = $("#ime").val();
        var adresa = $("#adresa").val();
        if(ime != '' && adresa !=''){
            alert("vasa narudzbina je prihvacena");
            return
        }else {
            alert('niste popunili sve')
        }
        });

        $("#dugme-tel").click(function(){
            $("#nav-tel").toggle();
          });
});

