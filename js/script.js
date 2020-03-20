$(function() {

    let dropLiPositions = [];

    function dragDrop(){

      $('.drag').draggable({
            revert: false,
            // snapMode: 'inner',
            helper: 'clone',
            stop : function(event,ui){

               dropLiPositions = [];
             // console.log(ui.draggable.children());
              let liList = ui.helper.find('li');
              let mainDiv = ui.helper.position();
              console.log(ui.helper);
              console.log("top :", mainDiv.top, "Left :", mainDiv.left);
              $.each(liList, function(index, value){
                let position = $(value).position();
                let positionAxis = {
                  'top':mainDiv.top + position.top,
                  'left':mainDiv.left + position.left
                }
                dropLiPositions.push(positionAxis);
              })
              setTimeout(function(){
                let itemToHighlightLenght = 0;
                $.each(dropLiPositions, function(index, value){
                let selectEachLi = document.elementFromPoint(dropLiPositions[index].left+10, dropLiPositions[index].top+10);
                let dataId = $(selectEachLi).attr('data-id');
                if(dataId  == 0){
                     itemToHighlightLenght+=1;
                } 
              })
                if(itemToHighlightLenght == dropLiPositions.length){
                   $.each(dropLiPositions, function(index, value){
                let selectEachLi = document.elementFromPoint(dropLiPositions[index].left+10, dropLiPositions[index].top+10);
                $(selectEachLi).addClass('filled').attr('data-id',1);

              })
                    // $(this).hide();
                    console.log("not working");
                    console.log(ui.draggable)
                }
              },500)
              console.log(dropLiPositions);
            },
            drag: function(event, ui){
                  $('.drag').css({'transition':'none'});
                 
            }
      });

      $(".dropWrapper" ).droppable({
            accept:".drag",
            // tolerance: "fit",
            // tolerance: 'intersect',
            drop: function(event, ui) {
              // console.log("drop is working fine", dropLiPositions);

               dropLiPositions = [];
             // console.log(ui.draggable.children());
              let liList = ui.helper.find('li');
              let mainDiv = ui.helper.position();
              console.log(ui.helper);
              console.log("top :", mainDiv.top, "Left :", mainDiv.left);
              $.each(liList, function(index, value){
                let position = $(value).position();
                let positionAxis = {
                  'top':mainDiv.top + position.top,
                  'left':mainDiv.left + position.left
                }
                dropLiPositions.push(positionAxis);
              })
              setTimeout(function(){
                let itemToHighlightLenght = 0;
                $.each(dropLiPositions, function(index, value){
                let selectEachLi = document.elementFromPoint(dropLiPositions[index].left+10, dropLiPositions[index].top+10);
                let dataId = $(selectEachLi).attr('data-id');
                if(dataId  == 0){
                     itemToHighlightLenght+=1;
                } 
              })
                if(itemToHighlightLenght == dropLiPositions.length){
                   $.each(dropLiPositions, function(index, value){
                let selectEachLi = document.elementFromPoint(dropLiPositions[index].left+10, dropLiPositions[index].top+10);
                $(selectEachLi).addClass('filled').attr('data-id',1);

              })
                    // $(this).hide();
                    // console.log("not working");
                    $(ui.draggable).fadeOut();
                }
              },500)
              console.log(dropLiPositions);
            }
      }); 

  }
    dragDrop();


  $('.rotateClock').change(function(){
    // console.log("chal raha hai");
    $(this).parent().find('.rotateDeg').val("null");
  })

  $('.rotateDeg').mouseup(function(){
    // 1 stand for clockwise
    // 0 stand for Anticlockwise
    var open = $(this).data("isopen");
    if(open) {
    if($(this).val() == 'null'){
      return false;
    }

    let itemToRotate = $(this).parent().parent().find('.drag');
    let rotateData = itemToRotate.attr('data-rotate');
    console.log(rotateData);
    let clockAntiClock = $(this).prev('.rotateClock').val();
    let angle = (clockAntiClock==1) ? parseInt($(this).val()): - $(this).val();
    angle = parseInt(rotateData)+angle;
    itemToRotate.attr('data-rotate', angle);
    setAngle(clockAntiClock , angle, itemToRotate);
    }

    $(this).data("isopen", !open);
    })

  function setAngle(clockAntiClock, angle, itemToRotate){
      console.log("clockAntiClock ",clockAntiClock , 'angle ', angle, itemToRotate);
      $(itemToRotate).css({'transform':'rotate('+angle+'deg)', 'transition':'0.5s'});
  }

  $("#reset").click(function(){
    location.reload();
  })

});   // end document function 
