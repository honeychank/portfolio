$(function() {

	var scroll = new SmoothScroll('a[href*="#"]');

  $('.about-img').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') { //scroll down
        activePoint.addClass('slideIn-left');
    }
    else{ //scroll up
        activePoint.removeClass('slideIn-left');
    }
  },{offset : '80%'});

  $('.about-text').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') { //scroll down
        activePoint.addClass('slideIn-right');
    }
    else{ //scroll up
        activePoint.removeClass('slideIn-right');
    }
  },{offset : '80%'});

});