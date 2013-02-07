/*
*
*  I made a quick little tool to help me figure out where breakpoints in my designs were happening. Enjoy
*
*/

$(document).ready(function() {
    var window_watcher = '<p id="window_watcher"></p>';
    $('body').append(window_watcher);

});

$(window).resize(function() {
    var width = $(window).width();
    $('#window_watcher').css('display', 'block');
    $('#window_watcher').html('Window width: ' + width + 'px');
});