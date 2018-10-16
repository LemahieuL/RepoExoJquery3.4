var rectangle = $('#rectangle')
$('#button1').click(function(){
  rWidth = rectangle.width();
  if (rWidth + 10 >= 100) {
    rectangle.css('width', '30px')
  }else{
    rectangle.css('width', rWidth + 10 + 'px');
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
