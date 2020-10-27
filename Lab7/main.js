font_size_orginial = $("body").css("font-size");
font_size_orginial = font_size_orginial.slice(0,-2);

function increase_font_size() {
    str_font_size = 2*font_size_orginial+'px';
    $("body").css("font-size",str_font_size);
}

function restore_font_size() {
    str_font_size = font_size_orginial+'px';
    $("body").css("font-size",str_font_size);
}

function change_font_type(){
    $("body").css("font-family","Comic Sans MS");
}

function hideMe(){
    $('.screenshot_group').hide();
}

function reduceMySize(){
    $('.main_image').css("width","15%");
}