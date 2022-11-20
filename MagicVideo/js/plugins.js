/*!
 * Lightbox v2.10.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2018 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

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
{
      'link':'./img/042.gif',
      'name': 'im42',
      'header': '',
      'text': 'Pov driving high rural mountain country road snow winter blue sky nature environment sierra nevada usa.'
    },
{
      'link':'./img/043.gif',
      'name': 'im43',
      'header': '',
      'text': 'Close-up milky liquid being poured. slow motion.'
    },
{
      'link':'./img/044.gif',
      'name': 'im44',
      'header': '',
      'text': 'Lid taken off gift box with puppy inside on table top with holiday gifts.'
    },
{
      'link':'./img/045.gif',
      'name': 'im45',
      'header': '',
      'text': 'Silhouette of retired caucasian american couple enjoying the sunrise having kayaking trip on the lake outdoors red dragon.'
    },
{
      'link':'./img/046.gif',
      'name': 'im46',
      'header': '',
      'text': 'Woman in sunset.'
    },
{
      'link':'./img/047.gif',
      'name': 'im47',
      'header': '',
      'text': 'Aerial autumn forest with a river in the mountains.'
    },
{
      'link':'./img/048.gif',
      'name': 'im48',
      'header': '',
      'text': 'Wildfire in mountain of thailand (pan shot).'
    },
{
      'link':'./img/049.gif',
      'name': 'im49',
      'header': '',
      'text': 'Face of happy macho mature man smiling.'
    },
{
      'link':'./img/050.gif',
      'name': 'im50',
      'header': '',
      'text': 'Strawberry close-up on a black background swinging, slow motion. water flows down the berry.'
    },
{
      'link':'./img/051.gif',
      'name': 'im51',
      'header': '',
      'text': 'London, uk - november 16,2014:traffic, buses and cars in baker street move slowly in london england. congested city traffic.'
    },
  ]

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    // albumLabel: 'Image %1 of %2',
    albumLabel: 'Input Text: %1 ',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.imageTextLabel = function(text) {
    return this.options.albumLabel.replace(/%1/g, text);
  };

  Lightbox.prototype.init = function() {
    var self = this;
    // Both enable and build methods require the body tag to be in the DOM.
    $(document).ready(function() {
      self.enable();
      self.build();
    });
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    if ($('#lightbox').length > 0) {
        return;
    }

    var self = this;
    $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox       = $('#lightbox');
    this.$overlay        = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');
    this.$image          = this.$lightbox.find('.lb-image');
    this.$nav            = this.$lightbox.find('.lb-nav');

    // Store css values for future lookup
    this.containerPadding = {
      top: parseInt(this.$container.css('padding-top'), 10),
      right: parseInt(this.$container.css('padding-right'), 10),
      bottom: parseInt(this.$container.css('padding-bottom'), 10),
      left: parseInt(this.$container.css('padding-left'), 10)
    };

    this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 10),
      right: parseInt(this.$image.css('border-right-width'), 10),
      bottom: parseInt(this.$image.css('border-bottom-width'), 10),
      left: parseInt(this.$image.css('border-left-width'), 10)
    };

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$outerContainer.on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
    this.$nav.on('mousedown', function(event) {
      if (event.which === 3) {
        self.$nav.css('pointer-events', 'none');

        self.$lightbox.one('contextmenu', function() {
          setTimeout(function() {
              this.$nav.css('pointer-events', 'auto');
          }.bind(self), 0);
        });
      }
    });


    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = $(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    $('select, object, embed').css({
      visibility: 'hidden'
    });

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        alt: $link.attr('data-alt'),
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('html').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;

    this.disableKeyboardNav();
    var $image = this.$lightbox.find('.lb-image');

    this.$overlay.fadeIn(this.options.fadeDuration);

    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr({
        'alt': self.album[imageNumber].alt,
        'src': self.album[imageNumber].link
      });

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);

      if (self.options.fitImagesInViewport) {
        // Fit image inside the viewport.
        // Take into account the border around the image and an additional 10px gutter on each side.

        windowWidth    = $(window).width();
        windowHeight   = $(window).height();
        maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
        maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
          maxImageHeight = self.options.maxHeight;
        }

        // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
        // option than we need to size down while maintaining the aspect ratio.
        if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
          if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
            imageWidth  = maxImageWidth;
            imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          } else {
            imageHeight = maxImageHeight;
            imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          }
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    preloader.src          = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    this.$overlay
      .width($(document).width())
      .height($(document).height());
  };

  // Animate the size of the lightbox to fit the image we are showing
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
    var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);
      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast')
        .find('a').on('click', function(event) {
          if ($(this).attr('target') !== undefined) {
            window.open($(this).attr('href'), $(this).attr('target'));
          } else {
            location.href = $(this).attr('href');
          }
        });
    }
    
    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      // var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      var labelText = this.imageTextLabel(data_list[this.currentImageIndex].text);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    $(document).off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    var key     = String.fromCharCode(keycode).toLowerCase();
    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this.end();
    } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);
    $('select, object, embed').css({
      visibility: 'visible'
    });
    if (this.options.disableScrolling) {
      $('html').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));
