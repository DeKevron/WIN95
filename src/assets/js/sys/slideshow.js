	'use strict';

    WIN95.slideshow = function() {
        this.ID = null;
        this.image = 'regedit_201';
        this.slides = [{}];
        this.title = 'Slideshow';
        this.position;
    };

    WIN95.slideshow.prototype = {
        constructor: WIN95.slideshow,
        set: function(data) {
        	//console.log(data);
            this.ID = data.ID;
            this.image = data.image;
            this.slides = data.slides;
            this.title = data.title;
            this.position = data.position;
            return this;
        },
        draggableOptions: {
            containment: 'window',
            handle: '.windowTitleBar'
        },
        render: function(renderTarget) {
        	var _this = this;

            this.position = WIN95.getWindowPosition(this.position);

        	// if(!this.position && $('.explorer[data-status=selected]').length) {
         //        this.position = [
         //            $('.explorer[data-status=selected]').offset().left,
         //            $('.explorer[data-status=selected]').offset().top + 12
         //        ];
         //    } else if(!this.position && $('.explorer').last().length) {
         //        this.position = [
         //            $('.explorer').last().offset().left,
         //            $('.explorer').last().offset().top + 12
         //        ];
         //    } else if(!this.position) {
         //        this.position = [70, 70];
         //    }



            //console.log(this.slides);

            var slideCount = this.slides.length;

            var element = $(Mustache.render(
                WIN95.templates.slideshow, {
                    ID: this.ID,
                    image: this.image,
                    slides: this.slides,
                    title: this.title + ' - 1 of ' + slideCount
                }
            ))
            .appendTo(renderTarget)
	        .draggable(this.draggableOptions)
            //.resizable()
            .resize(function() {
                var height = $(this).height();
                var width = $(this).width();
                $(this).find('.explorerContents').height(height - 50);
                $(this).find('.explorerStatusBarRight').width(width - 225);
            })
            .mousedown(function() {
                $('[data-window]').attr('data-status', 'normal');
                $('.taskBarItem').attr('data-status', 'normal');
                $(this).attr('data-status', 'selected');
                $('[data-taskBarItem=' + _this.ID + ']')
                    .attr('data-status', 'selected');
            })
            .on('remove', function() {
                $('[data-taskBarItem=' + _this.ID + ']').remove();
            })
            .css({
                'position': 'absolute',
                'left': this.position[0],
                'top': this.position[1]
            })
            .resize()
            .mousedown();
            var taskBarItem = new WIN95.taskBarItem();
            taskBarItem.set({
                ID: this.ID,
                title: this.title,
                image: this.image
            }).render();
            this.postRender(element);
        },
        postRender: function(element) {
            var _this = this;

        	$(element).find('.windowTitleBarClose').click(function() {
                $(element).remove();
            });

            // Next Slide
            $(element).find('.explorerStatusBarRight').click(function() {

                var top = parseInt($(element).find('.slide').css('top'), 10);
                var newTop = 0;
                var maxSlideTop = $(element).find('.slide').length * $('.slide').height();
                // console.log(maxSlideTop);

                if(top > (-1 * (maxSlideTop - $('.slide').height()))) {
                    newTop = top - $('.slide').height();
                }
                 
                // console.log(top + ' ' + newTop);

                $(element).find('.slide').css({'top' : newTop+'px'});

                var slideNum = (-1 * (newTop / $('.slide').height())) + 1;
                var slideCount = _this.slides.length;

                $(element).find('.windowTitleBar span').text(_this.title + ' - ' + slideNum + ' of ' + slideCount);

                // GA Tracking
                //ga('send', 'event', 'Evidence', _this.title, slideNum + ' of ' + slideCount);
                console.log(slideNum + ' of ' + slideCount);
            });

            // Prev Slide
            $(element).find('.explorerStatusBarLeft').click(function() {
                var top = parseInt($(element).find('.slide').css('top'), 10);
                var newTop = 0;
                var maxSlideTop = $(element).find('.slide').length * $('.slide').height();
                // console.log(maxSlideTop);

                if(top < 0) {
                    newTop = top + $('.slide').height();
                } else if(top === 0) {
                    newTop = (-1 * (maxSlideTop - $('.slide').height()));
                }
                 
                // console.log(top + ' ' + newTop);

                $(element).find('.slide').css({'top' : newTop+'px'});

                var slideNum = (-1 * (newTop / $('.slide').height())) + 1;
                var slideCount = _this.slides.length;

                $(element).find('.windowTitleBar span').text(_this.title + ' - ' + slideNum + ' of ' + slideCount);

                // GA Tracking
                //ga('send', 'event', 'Evidence', _this.title, slideNum + ' of ' + slideCount);
            });

            // Arrow Keys - only work if window is in focus
            $(document).keydown(function(e) {
                //console.log($(element).attr('data-status'));
                if($(element).attr('data-status') === 'selected') {
                    if(e.keyCode === 37) { // left
                        $(element).find('.explorerStatusBarLeft').click();
                    } else if(e.keyCode === 39) { // right
                        $(element).find('.explorerStatusBarRight').click();
                    }
                }
            });
        }
    };