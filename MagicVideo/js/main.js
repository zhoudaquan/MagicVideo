jQuery(document).ready(function($) {


  const data_list = [
    {
      'link':'./img/001.gif',
      'name': 'im1',
      'header': '',
      'text':'Close up of grapes on a rotating table. High Definition.'
    },
    {
      'link':'./img/002.gif',
      'name': 'im2',
      'header': '',
      'text':'Raw fresh beef meat fillet on a wooden plate with dill.'
    },
    {
      'link':'./img/003.gif',
      'name': 'im3',
      'header': '',
      'text':'Close up coffee being poured into a glass. Slow motion.'
    },
    {
      'link':'./img/004.gif',
      'name': 'im4',
      'header': '',
      'text':'A waving flag close up realistic animation seamless loop.'
    },
    {
      'link':'./img/005.gif',
      'name': 'im5',
      'header': '',
      'text':'Face of happy macho mature man looking at camera.'
    },
    {
      'link':'./img/006.gif',
      'name': 'im6',
      'header': '',
      'text':'Blue sky clouds timelapse 4k time lapse big white clouds cumulus growing cloud formation sunny weather background.'
    },
    {
      'link':'./img/007.gif',
      'name': 'im7',
      'header': '',
      'text':'Campfire at night in a snowy forest with starry sky in the background.'
    },
    {
      'link':'./img/008.gif',
      'name': 'im8',
      'header': '',
      'text':'Ocean waves hitting headland rocks pacifica california slow motion.'
    },
    {
      'link':'./img/009.gif',
      'name': 'im9',
      'header': '',
      'text':'There is a table by a window with sunlight streaming through illuminating a pile of books.'
    },
    {
      'link':'./img/010.gif',
      'name': 'im10',
      'header': '',
      'text':'Beautiful sexy lady in elegant white robe. close up fashion portrait of model indoors. beauty blonde woman.'
    },
    {
      'link':'./img/011.gif',
      'name': 'im11',
      'header': '',
      'text': 'Fire burning in a forest.'
    },
    {
      'link':'./img/012.gif',
      'name': 'im12',
      'text': 'Fireworks.',
      'head': ''
    },
    {
      'link':'./img/013.gif',
      'name': 'im13',
      'header': '',
      'text': 'Melting pistachio ice cream dripping down the cone.'
    },
    {
      'link':'./img/014.gif',
      'name': 'im14',
      'text': 'A 3D model of an elephant origami. Studio lighting.',
      'header': ''
    },
    {
      'link':'./img/015.gif',
      'name': 'im15',
      'header': '',
      'text': 'Strawberry close-up on a black background swinging, slow motion. water flows down the berry.'
    },
    {
      'link':'./img/016.gif',
      'name': 'im16',
      'header': '',
      'text': 'A spaceship is landing.'
    },
    {
      'link':'./img/017.gif',
      'name': 'im17',
      'header': '',
      'text': 'A girl is looking at the camera smiling. High Definition.'
    },
    {
      'link':'./img/018.gif',
      'name': 'im18',
      'header': '',
      'text': 'A girl is looking at the camera smiling. High Definition.'
    },
    {
      'link':'./img/019.gif',
      'name': 'im19',
      'header': '',
      'text': 'Drone flythrough of a tropical jungle covered in snow. High Definition.'
    },
    {
      'link':'./img/020.gif',
      'name': 'im20',
      'header': '',
      'text': 'Ocean waves hitting headland rocks pacifica california slow motion.'
    },

    {
      'link':'./img/021.gif',
      'name': 'im21',
      'header': '',
      'text': 'Fog at the end of the path in the summer-autumn forest. nobody present. scary scene. peaceful. quiet.'
    },
    {
      'link':'./img/022.gif',
      'name': 'im22',
      'header': '',
      'text': 'Cars running on the highway at night.'
    },
    {
      'link':'./img/023.gif',
      'name': 'im23',
      'header': '',
      'text': 'Strawberry close-up on a black background swinging, slow motion. water flows down the berry.'
    },
    {
      'link':'./img/024.gif',
      'name': 'im24',
      'header': '',
      'text': 'A giant spaceship is landing on mars in the sunset. High Definition.'
    },
    {
      'link':'./img/025.gif',
      'name': 'im25',
      'header': '',
      'text': 'A giant spaceship is landing on mars in the sunset. High Definition.'
    },
    {
      'link':'./img/026.gif',
      'name': 'im26',
      'header': '',
      'text': 'A man is riding a horse in sunset.'
    },
    {
      'link':'./img/027.gif',
      'name': 'im27',
      'header': '',
      'text': 'close up of a clown fish swimming. 4K'
    },
    {
      'link':'./img/028.gif',
      'name': 'im28',
      'header': '',
      'text': 'Ocean waves hitting headland rocks pacifica california slow motion.'
    },
    {
      'link':'./img/029.gif',
      'name': 'im29',
      'header': '',
      'text': 'Ocean waves hitting headland rocks pacifica california slow motion.'
    },
    {
      'link':'./img/030.gif',
      'name': 'im30',
      'header': '',
      'text': 'a boring bear is standing behind a bar table. High Definition.'
    },
    {
      'link':'./img/031.gif',
      'name': 'im31',
      'header': '',
      'text': 'close up coffee being poured into a glass. Slow motion. 4K'
    },
    {
      'link':'./img/033.gif',
      'name': 'im33',
      'header': '',
      'text': 'Beautiful pink rose background. blooming rose flower rotation, close-up.'
    },
    {
      'link':'./img/034.gif',
      'name': 'im34',
      'header': '',
      'text': 'flag waving slow motion 3d rendering blue sky background - seamless loop 4k'
    },
    {
      'link':'./img/035.gif',
      'name': 'im35',
      'header': '',
      'text': 'Face of happy macho mature man smiling.'
    },

{
      'link':'./img/036.gif',
      'name': 'im36',
      'header': '',
      'text': 'Fireworks'
    },
{
      'link':'./img/037.gif',
      'name': 'im37',
      'header': '',
      'text': 'A cat eating food out of a bowl, in style of Van Gogh.'
    },
{
      'link':'./img/038.gif',
      'name': 'im38',
      'header': '',
      'text': 'Wide shot of woman worker using welding machine on her work in site construction.'
    },
{
      'link':'./img/039.gif',
      'name': 'im39',
      'header': '',
      'text': 'celebration of christmas.'
    },
{
      'link':'./img/040.gif',
      'name': 'im40',
      'header': '',
      'text': 'Young girl eye macro, shot in raw, 4k'
    },
{
      'link':'./img/041.gif',
      'name': 'im41',
      'header': '',
      'text': 'A fire is burning on a candle.'
    },

  ]


  for (data of data_list) {
  if (document.getElementById('image-container')!= null){
    document.getElementById('image-container').innerHTML += `
    <a href=${data.link} data-lightbox="image-1"><div class="thumb">
        <div class="hover-effect" name=${data.name} hidden="true">
            <div class="hover-content">
                 <p>${data.text}</p>
            </div>
        </div>
        <div class="image">
        <img src=${data.link} alt="imgae not in path" id=${data.name}>
    </div>
    </div></a>
`;

  }

}

	'use strict';
        $('img').mouseover(
            function() {
               this.style.opacity = 0.3;
               dv = document.getElementsByName(this.id)[0];
               dv.hidden=false;
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

