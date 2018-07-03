// // drop down the menu, and swap the icon to the close icon
//   $('.navbar__hamburger-menu').click(function(){
//   $(this).toggleClass('fa-bars');
//   $(this).toggleClass('fa-times');
//   $('nav').toggleClass('down');
//   $('nav li a').removeClass('down');
// });

// //Make sure the menu icon behaves corectly when the menu is open
// $('nav li a').click(function(){
//     $('.navbar__hamburger-menu').addClass('fa-bars');
//     $('.navbar__hamburger-menu').removeClass('fa-times');
//     $('nav').toggleClass('down');
// });

// //show and hide the search bar, also make sure if the menu is open to hide the menu, and ensure the menu icon state is correct
// $('.icon-search').click(function(){
//     $(this).toggleClass('fa-times');
//     $('.navbar__hamburger-menu').addClass('fa-bars');
//     $('.navbar__hamburger-menu').removeClass('fa-times');
//     $('nav').removeClass('down');
// });

$( document ).ready(function() {

$( ".navbar__hamburger-cross" ).hide();
$( "nav" ).hide();
$( ".navbar__hamburger-menu" ).click(function() {
$( "nav" ).slideToggle( "slow", function() {
$( ".navbar__hamburger-menu" ).hide();
$( ".navbar__hamburger-cross" ).show();
});
});

$( ".navbar__hamburger-cross" ).click(function() {
$( "nav" ).slideToggle( "slow", function() {
$( ".navbar__hamburger-cross" ).hide();
$( ".navbar__hamburger-menu" ).show();
});
});

});