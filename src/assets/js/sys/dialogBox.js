
    'use strict';

    WIN95.dialogBox = function() {
        this.ID = null;
        this.image = 'regedit_201';
        this.title = 'Explorer';
        this.sound = 'ding';
        this.text = '';
        this.buttons = {};
    };

    WIN95.dialogBox.prototype = {
        constructor: WIN95.dialogBox,
        set: function(data) {
            this.ID = data.ID;
            this.image = data.image;
            this.title = data.title;
            this.sound = data.sound;
            this.text = data.text;
            this.buttons = data.buttons;
            return this;
        },
        draggableOptions: {
            containment: 'window',
            handle: '.windowTitleBar'
        },
        render: function() {
            (new Audio('assets/audio/'+this.sound+'.wav')).play();
            var _this = this;
            var vpWidth = $(window).width();
            var position = [
                $(window).width() / 3.5,
                $(window).height() / 3
            ];
            if(vpWidth <= 6400) {
                position = [
                    0,
                    $(window).height() / 3
                ];
            }
            if ($('.dialogBox').last().length) {
                position = [
                    $('.dialogBox').last().offset().left,
                    $('.dialogBox').last().offset().top + 12
                ];
            }


            var element = $(Mustache.render(
                    WIN95.templates.dialogBox, {
                        ID: this.ID,
                        image: this.image,
                        title: this.title,
                        text: this.text
                    }
                ))
                .appendTo('#desktop')
                .draggable(this.draggableOptions)
                .mousedown(function() {
                    $('[data-window]').attr('data-status', 'normal');
                    $('.taskBarItem').attr('data-status', 'normal');
                    $(this).attr('data-status', 'selected');
                })
                .on('remove', function() {})
                .css({
                    'position': 'absolute',
                    'left': position[0],
                    'top': position[1],
                    'width': '295px',
                    'height': '115px'
                })
                .mousedown();

            for (var b in _this.buttons) {
                //console.log(b);
                if (_this.buttons.hasOwnProperty(b)) {

                    
                    $(element).find('.dialogBoxButtons').append(

                        $('<div/>').attr('data-info',b).click(function() {
                            //console.log($(this).attr('data-info'));
                            _this.buttons[$(this).attr('data-info')]($(this));
                        })
                        .append($('<span/>').text(b))

                    );
                    
                }
          
            }

            this.postRender(element);
        },
        postRender: function(element) {

        }
    };
