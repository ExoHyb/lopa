console.log('Lopa v1.0.04 !');

// Sidebar
if($(document).width() < 768) {
  $('.sidebar .item-sidebar .title-sidebar').on('click', function(e) {
    $(this).toggleClass('active').parent().find('ul').stop().slideToggle('medium');
    e.preventDefault();
  })
}
