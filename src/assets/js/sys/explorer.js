
    'use strict';

    WIN95.explorer = function() {
        this.ID = null;
        this.image = 'regedit_201';
        this.title = 'Explorer';
        this.height;
    };

    WIN95.explorer.prototype = {
        constructor: WIN95.explorer,
        set: function(data) {
            this.ID = data.ID;
            this.image = data.image;
            this.title = data.title;
            this.height = data.height;
            this.position = data.position;
            this.appAction = data.appAction;
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

            // console.log(WIN95.setWindowPosition(position));

            // if($('.explorer[data-status=selected]').length) {
            //     position = [
            //         $('.explorer[data-status=selected]').offset().left,
            //         $('.explorer[data-status=selected]').offset().top + 12
            //     ];
            // } else if ($('.explorer').last().length) {
            //     position = [
            //         $('.explorer').last().offset().left,
            //         $('.explorer').last().offset().top + 12
            //     ];
            // }

            // if(position) {
            //     if(position[0] >= vpWidth 
            //         || (position[0] + $('.explorer').width()) >= vpWidth
            //         || (position[0] + 310) >= vpWidth) {
            //         position[0] = 0;
            //     }
            //     if(position[1] >= vpHeight 
            //         || (position[0] + $('.explorer').height()) >= vpHeight) {
            //         position[1] = 0;
            //     }
            // } 

            var element = $(Mustache.render(
                WIN95.templates.explorer, {
                    ID: this.ID,
                    image: this.image,
                    title: this.title
                }
            ))
            .appendTo(renderTarget)
            .draggable(this.draggableOptions)
            .resizable()
            .resize(function() {
                var height = $(this).height();
                var width = $(this).width();
                $(this).find('.explorerContents').height(height - 60);
                $(this).find('.explorerStatusBarRight').width(width - 149);
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
            $(element).find('.windowTitleBarMinimize').click(function() {
                $(element).hide();
                $('[data-taskBarItem=' + $(element).attr('data-window') + ']')
                    .attr('data-status', 'normal');
            });
            $(element).find('.windowTitleBarMaximize').click(function() {
                $(element).width($('#desktop').width());
                $(element).height($('#desktop').height()).resize();
                $(element).css({
                    top: 0,
                    left: 0
                });
            });
            $(element).find('.windowTitleBarClose').click(function() {
                $(element).remove();
            });
            $(element).find('.windowMenuBar li').mouseenter(function() {
                if ($('.windowMenuBar li[data-open=true]').length) {
                    $(this).mousedown();
                }
            });
            $(element).find('.windowMenuBar li').mousedown(function() {
                $('.windowMenuBar li').attr('data-open', 'false');
                if ($(this).attr('data-open') === 'true') {
                    $(this).attr('data-open', 'false');
                } else {
                    $(this).attr('data-open', 'true');
                }
            });

            if(this.height) {
                $(element).height(this.height+'px').resize();
            }

            

            // $(element).find('.explorerContents').enscroll({
            //     verticalTrackClass: 'track1',
            //     verticalHandleClass: 'handle1',
            //     drawScrollButtons: true,
            //     scrollUpButtonClass: 'scroll-up1',
            //     scrollDownButtonClass: 'scroll-down1',
            //     easingDuration: 100
            // });
        }
    };
