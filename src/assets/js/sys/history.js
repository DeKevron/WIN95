
    'use strict';

    WIN95.history = function() {
        this.ID = null;
        this.image = 'regedit_201';
        this.title = 'History';
        this.position;
    };

    WIN95.history.prototype = {
        constructor: WIN95.history,
        set: function(data) {
            this.ID = data.ID;
            this.image = data.image;
            this.title = data.title;
            this.position = data.position;
            // console.log(data);
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
	        var element = $(Mustache.render(
                WIN95.templates.history, {
                    ID: this.ID,
                    image: this.image,
                    title: this.title,
                }
            ))
	        .appendTo(renderTarget)
	        .draggable(this.draggableOptions)
            //.resizable()
            .resize(function() {
                var height = $(this).height();
                var width = $(this).width();
                $(this).find('.explorerContents').height(height - 40);
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
            $('#scrollbox1').enscroll({
                verticalTrackClass: 'track1',
                verticalHandleClass: 'handle1',
                drawScrollButtons: true,
                scrollUpButtonClass: 'scroll-up1',
                scrollDownButtonClass: 'scroll-down1',
                easingDuration: 100
            });
        }
    };