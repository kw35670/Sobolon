$(function() {
    //drawer.js
    $('.drawer').drawer();

    /*==================
    スムーススクロール
    ==================*/
    
    jQuery('a[href^="#"]').on('click', function() {
    
        var header = jQuery('.header').innerHeight();
        var id = jQuery(this).attr('href');
        var position = 0;
    
        if(id != '#') {
          position = jQuery(id).offset().top - header;
        }
      
        jQuery('html,body').animate({
          scrollTop: position
        },
        300);
    });
    
    new WOW().init();

    //googleフォーム
    let $form = $('#js-form');
    $form.submit(function(e) { 
        $.ajax({ 
         url: $form.attr('action'), 
         data: $form.serialize(), 
         type: "POST", 
         dataType: "xml", 
         statusCode: { 
            0: function() { 
              //送信に成功したときの処理
              $form.slideUp()
              $('#js-success').slideDown()
            }, 
            200: function() { 
              //送信に失敗したときの処理 
              $form.slideUp()
              $('#js-error').slideDown()
            }
          } 
        });
        return false; 
      }); 

      //formの入力確認
      let $submit = $('#js-submit');
      $('#js-form input, #js-form textarea').on('change', function() {
            if (
                $('#js-form input[type="text"]').val() !== "" &&
                $('#js-form input[type="email"]').val() !== "" &&
                $('#js-form input[name="entry.286898289"]').prop('checked') === true
            ) {
                //全て入力された時
                $submit.prop('disabled', false)
                $submit.addClass('active');
            } else {
                //入力されていない時
                $submit.prop('disabled', true)
                $submit.removeClass('active');
            }
      });
});
