function openBtn(obj) {
    var BtnClass = $(obj).attr('class');
    var BtnClassSplit = BtnClass.split(' ');
    var fbc = BtnClassSplit[1];

    $('.content' + '-' + fbc).addClass('full');
    $('.header' + '-' + fbc).addClass('collapse');
    $(obj, 'readmore').hide();
  }
  
  function closeBtn(obj) {
    var BtnClass = $(obj).attr('class');
    var BtnClassSplit = BtnClass.split(' ');
    var fbc = BtnClassSplit[1];

    $('.content' + '-' + fbc).removeClass('full');
    $('.header' + '-' + fbc).removeClass('collapse');
    $('.readmore' + '-' + fbc).show();
  }