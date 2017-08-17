console.log("slideshow.js, YO!");

$(function () {
  let $imgDiv = $('.slideshow');
      $("#next").click(function(){
          $imgDiv.find('img').first().addClass('hide').appendTo($imgDiv);
          $imgDiv.find('img').first().removeClass('hide');
    });

    $("#previous").click(function(){
      $imgDiv.find('img').prev().removeClass('hide').appendTo($imgDiv);
      $imgDiv.find('img').prev().addClass('hide')
});
  })