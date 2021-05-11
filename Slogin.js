$('input:radio[name="mything"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == '1') {
            window.location = "MPS.html";
        }
        else{
            window.location = "Scitizen signup.html";
        }
    });