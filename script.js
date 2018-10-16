var rectangle = $('#rectangle')
$('#button1').click(function(){
  rHeight = rectangle.height();
  if (rHeight + 10 >= 100) {
    rectangle.css('height', '40px')
  }else{
    rectangle.css('height', rHeight + 10 + 'px');
}
})
$('#button2').click(function(){
  rectangle.css('background-color','green')
})
$('#button3').click(function(){
  rectangle.css('background-color','#069')
})
$('#button4').click(function(){
  rectangle.hide()
})
$('#button5').click(function(){
  rectangle.show()
})
