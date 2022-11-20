jQuery(document).ready(function($) {


  //for (data of data_list) {
  for(i = 0; i < 20; i++) {
    data = data_list[i];
  if (document.getElementById('image-container')!= null){
    document.getElementById('image-container').innerHTML += `
    <a href=${data.link} data-lightbox="image-1">
    <div class="thumb">
        <div class="hover-effect" name=${data.name} hidden="true">
            <div class="hover-content">
                 <p>${data.text}</p>
            </div>
        </div>
        <div class="image" >
            <img src=${data.link} alt="imgae not in path" id=${data.name}>
        </div>
    </div></a>
`;

  }

}

	'use strict';
        function is_mobile() {
          var uai = navigator.userAgent;
          var Agents = ['Android', 'iPhone'];
          var gar = Agents.filter(i => uai.includes(i));
          return gar.length ? true : false;
       }
    //var ism = is_mobile();

        $('#loadmore').click(function(){
            document.getElementById('loadmorediv').hidden = true;
            for(i = 20; i < data_list.length; i++) {
                data=data_list[i];
                document.getElementById('image-container').innerHTML += `
  		  <a href=${data.link} data-lightbox="image-1">
    		  <div class="thumb">
                    <div class="hover-effect" name=${data.name} hidden="true">
                      <div class="hover-content">
                        <p>${data.text}</p>
                      </div>
                    </div>
                    <div class="image" >
                      <img src=${data.link} alt="image not in path" id=${data.name}>
                    </div>
             </div></a>
`;
            }

         $('img').mouseover(function() {
            if(!is_mobile()){
            this.style.opacity=0.3;
            document.getElementsByName(this.id)[0].hidden=false;}
         });
         $('img').mouseout(
            function() {
               this.style.opacity = 1.0;
               dv = document.getElementsByName(this.id)[0];
               dv.hidden=true;
            });
        });

        $('img').mouseover(
            function() {
              if (!is_mobile()) {
               this.style.opacity = 0.3;
               dv = document.getElementsByName(this.id)[0];
               dv.hidden=false;}
            }
        );
        $('img').mouseout(
            function() {
               this.style.opacity = 1.0;
               dv = document.getElementsByName(this.id)[0];
               dv.hidden=true;
            });
        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });


});

