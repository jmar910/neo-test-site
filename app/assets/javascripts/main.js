$(function() {

    //Quick function for contact form default text + behavior
	function textFieldClear(selector){
		var storeDefault;

    	$(selector).focus(function(){
            //Store the default value of the current selected input
    		storeDefault = $(this).prop('defaultValue');

            //On focus, check if current value is equal to default value
            //If it is, clear placeholder and change styling for user input
    		if($(this).val() == storeDefault){
    			$(this).val('');
    			$(this).css('color', 'white');
    		}

    		$(selector).blur(function(){
                //If field is empty, revert back to default value and
                //remove any styling that was added
    			if($(this).val() == ""){
    				$(this).val(storeDefault);
    				$(this).removeAttr('style');
				}
    		});
		});
	}

    //Quick and dirty image fader
    function imageFader() {
        var counter = 1;
        setInterval(function(){
            if (counter < 3){
                //On reset loop after fadeIn of first image, un-hide second graphic
                if ($('#iphone2').css('display') == 'none') {$('#iphone2').show()}

                //Fade to next graphic
                $('#iphone' + counter).fadeOut();
                counter = counter + 1;
            }
            //Reset loop and go back to first image
            else {
                $('#iphone1').fadeIn();
                counter = 1; 
            }
        }, 5000);
    };

    //Toggle nav on hamburger click
    function toggleNav() {
        $('#hamburger').click(function(){
            if($('.nav').hasClass('hide-for-small')){
                $('.nav').removeClass('hide-for-small');
            }
            else{
                $('.nav').addClass('hide-for-small');
            }
        });
    }

    //Custom validation rules
    jQuery.validator.addMethod("noDefaultVals", function (value, element) {
        var defVal = element.defaultValue;
        return element.value !== defVal;
    }, 'This field is required.');



    //Call image fader function
    imageFader();

    //Call functions for input and textarea 
	textFieldClear('.contact-content input[type="text"]');
	textFieldClear('.contact-content textarea');

    //Call hamburger click function
    toggleNav();

});