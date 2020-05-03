$(function() {

	var scroll = new SmoothScroll('a[href*="#"]');

  $('.about-img').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') { //scroll down
        activePoint.addClass('slideIn-left');
    }
  },{offset : '75%'});

  $('.about-text').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') { //scroll down
        activePoint.addClass('slideIn-right');
    }
	},{offset : '75%'});

	$('.slideIn-up').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') { //scroll down
        activePoint.addClass('slideIn-up-start');
    }
  },{offset : '75%'});

});