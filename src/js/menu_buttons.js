//ПЕРЕМЕННЫЕ
let burger_menu = document.querySelector('.header__menu-burger');
let repair_button = document.querySelector('.repair');
let status_button = document.querySelector('.status');
let call_button = document.querySelector('.header__contacts-call');
let chat_button = document.querySelector('.header__contacts-chat');
let close_burger = document.querySelector('.header-buttons-burger');
let close_call=document.querySelector('.callback_close');
let close_feed=document.querySelector('.feedback-close');
let left_menu=document.querySelector('.left_menu');
let repair_highres=document.querySelector('.repair_highres');
let status_highres=document.querySelector('.status_highres');

//ФУНКЦИИ КНОПОК

function show_left(){
    let blur=document.querySelector('.website-layout');
    
    let layout=document.querySelector('.body');
    if(left_menu.classList.contains('menu_active')){
        left_menu.classList.remove('menu_active');
        layout.classList.remove('prevent_scroll');
     
    }
    else{
        left_menu.classList.add('menu_active');
        layout.classList.add('prevent_scroll');
    }
    document.onclick=function(e){
        if(e.target.contains(document.querySelector('.layout')) ){
        left_menu.classList.remove('menu_active');
        layout.classList.remove('prevent_scroll');
        blur.classList.remove('blured');
        console.log(e.target);
        }
    }

    if(blur.classList.contains('blured')){
        blur.classList.remove('blured');
    }else{
        blur.classList.add('blured')
    }



}

function show_callback(){
    let left_menu=document.querySelector('.left_menu');
    let blur=document.querySelector('.website-layout');
    let call_menu=document.querySelector('.modal--callBack');
    let layout=document.querySelector('.body');

    if(call_menu.classList.contains('call_back_active')){
        call_menu.classList.remove('call_back_active');
        layout.classList.remove('prevent_scroll');
        left_menu.classList.remove('blured');
    }
    else{
        call_menu.classList.add('call_back_active');
        layout.classList.add('prevent_scroll');
        left_menu.classList.add('blured');
    }

    if(blur.classList.contains('blured')){
        blur.classList.remove('blured');
    }else{
        blur.classList.add('blured')
    }
    document.onclick=function(e){
        if(e.target.contains(document.querySelector('.layout')) ){
        call_menu.classList.remove('call_back_active');
        layout.classList.remove('prevent_scroll');
        blur.classList.remove('blured');
        console.log(e.target);
        left_menu.classList.remove('blured');
        }
    }

}
function show_feedback(){
    let blur=document.querySelector('.website-layout');
    let feed_menu=document.querySelector('.modal--feedback');
    let layout=document.querySelector('.body');

    if(feed_menu.classList.contains('call_back_active')){
        feed_menu.classList.remove('call_back_active');
        layout.classList.remove('prevent_scroll');
        left_menu.classList.remove('blured');
  }
    else{
        feed_menu.classList.add('call_back_active');
        layout.classList.add('prevent_scroll');
        left_menu.classList.add('blured');
    }

    if(blur.classList.contains('blured')){
        blur.classList.remove('blured');
    }else{
        blur.classList.add('blured')
    }
    document.onclick=function(e){
        if(e.target.contains(document.querySelector('.layout')) ){
        feed_menu.classList.remove('call_back_active');
        layout.classList.remove('prevent_scroll');
        blur.classList.remove('blured');
        console.log(e.target);
        left_menu.classList.remove('blured');
        }
    }
}

function close_menu(e){
    let blur=document.querySelector('.website-layout');
    let left_menu=document.querySelector('.left_menu');
    if(!left_menu.contains(e.target)&& !blur.contains(e.target)){
        blur.classList.remove('blured');
        left_menu.classList.remove('menu_active');
    }

}



burger_menu.onclick= show_left;
close_burger.onclick= show_left;
call_button.onclick=show_callback;
status_button.onclick=show_callback;
close_call.onclick=show_callback;
chat_button.onclick=show_feedback;
close_feed.onclick=show_feedback;
repair_button.onclick=show_feedback;

status_highres.onclick=show_callback;
repair_highres.onclick=show_feedback;

