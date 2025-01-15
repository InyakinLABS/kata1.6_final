const show_more=document.querySelector('.tech_showmore');
function show_more_func(){
  let expand_swiper =  document.querySelector('.tech_swiper-wrapper');
  let show_more_text=document.querySelector('.tech_btn-title');
  let show_more_image=document.querySelector('.tech_btn-img');
if(expand_swiper.classList.contains('tech_expanded')){
  expand_swiper.classList.remove('tech_expanded');
  show_more_text.innerHTML='Показать всё';
  show_more_image.classList.remove('rotate');
}else{
 expand_swiper.classList.add('tech_expanded');
 show_more_text.innerHTML='Скрыть';
 show_more_image.classList.add('rotate');

}

}
show_more.onclick=show_more_func;