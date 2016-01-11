
    'use strict';

    WIN95.video = function() {
        this.ID = null;
        this.image = 'regedit_201';
        this.title = 'Video';
        this.position;
        this.videoType = 'youtube';
        this.videoid = '';
        this.autoplay = 'false';
    };

    WIN95.video.prototype = {
        constructor: WIN95.video,
        set: function(data) {
            this.ID        = data.ID;
            this.image     = data.image;
            this.title     = data.title;
            this.position  = data.position;
            this.videoType = data.videoType;
            this.videoid   = data.videoid;
            this.autoplay  = data.autoplay;
            return this;
        },
        draggableOptions: {
            containment: 'window',
            handle: '.windowTitleBar'
        },
        render: function(renderTarget) {
        	var _this = this;

            this.position = WIN95.getWindowPosition(this.position);

            // vpWidth = $(window).width();
            // vpHeight = $(window).height();
            
            // if(!this.position && $('.explorer[data-status=selected]').length) {
            //     this.position = [
            //         $('.explorer[data-status=selected]').offset().left,
            //         $('.explorer[data-status=selected]').offset().top + 12
            //     ];
            // } else if(!this.position && $('.explorer').last().length) {
            //     this.position = [
            //         $('.explorer').last().offset().left,
            //         $('.explorer').last().offset().top + 12
            //     ];
            // } else if(!this.position) {
            //     this.position = [70, 70];
            // }

            // if(this.position) {
            //     if(this.position[0] >= vpWidth || (this.position[0] + $('.explorer').width()) >= vpWidth) {
            //         this.position[0] = 0;
            //     }
            //     if(this.position[1] >= vpHeight || (this.position[0] + $('.explorer').height()) >= vpHeight) {
            //         this.position[1] = 0;
            //     }
            // } 

            //console.log(_this.videoType);
            //console.log(this);
	        var element = $(Mustache.render(
                WIN95.templates[this.videoType], {
                    ID: this.ID,
                    image: this.image,
                    title: this.title,
                    videoid: this.videoid,
                    autoplay: this.autoplay
                }
            ))
	        .appendTo(renderTarget)
	        .draggable(this.draggableOptions)
            .resizable()
            .resize(function() {
                var height = $(this).height();
                var width = $(this).width();
                $(this).find('.explorerContents').height(height - 20);
                //$(this).find('.explorerStatusBarRight').width(width - 149);
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
        	$(element).find('.windowTitleBarClose').click(function() {
                $(element).remove();
            });
        }
    };