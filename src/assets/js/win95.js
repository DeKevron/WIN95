var WIN95 = {};

$(function() {

	//console.log("startup!");
    /*
     * Utility functions
     */

    // Get time (AM/PM format)
    var currentTime = function() {
        var dateObject = new Date();
        var hours = dateObject.getHours();
        var minutes = dateObject.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    };

    // Generate a unique identifier for every UI element.
    WIN95.getUniqueID = function() {
        if (!WIN95.IDCounter) {
            WIN95.IDCounter = 1;
        }
        return ++WIN95.IDCounter;
    };

    WIN95.getWindowPosition = function(defaultPos) {
        var vpWidth = $(window).width();
        var vpHeight = $(window).height();
        var tmpDefaultPos = defaultPos;

        if(!tmpDefaultPos && $('.explorer[data-status=selected]').length) {
            tmpDefaultPos = [
                $('.explorer[data-status=selected]').offset().left,
                $('.explorer[data-status=selected]').offset().top + 12
            ];
        } else if (!tmpDefaultPos && $('.explorer').last().length) {
            tmpDefaultPos = [
                $('.explorer').last().offset().left,
                $('.explorer').last().offset().top + 12
            ];
        } else if(!tmpDefaultPos) {
            tmpDefaultPos = [70, 70];
        }

        if(vpWidth <= 640) {
            if( $('.explorer[data-status=selected]').length) {
                tmpDefaultPos = [
                    $('.explorer[data-status=selected]').offset().left - 10,
                    $('.explorer[data-status=selected]').offset().top + 15
                ];
            } else if($('.explorer').last().length) {
                tmpDefaultPos = [
                    $('.explorer').last().offset().left - 10,
                    $('.explorer').last().offset().top + 15
                ];
            } else {
                tmpDefaultPos = [0, 0];
            }
        }

        // if(tmpDefaultPos) {
        //     if(tmpDefaultPos[0] >= vpWidth 
        //         || (tmpDefaultPos[0] + $('.explorer').width()) >= vpWidth
        //         || (tmpDefaultPos[0] + 310) >= vpWidth) {
        //         tmpDefaultPos[0] = 0;
        //     }
        //     if(tmpDefaultPos[1] >= vpHeight 
        //         || (tmpDefaultPos[0] + $('.explorer').height()) >= vpHeight) {
        //         tmpDefaultPos[1] = 0;
        //     }
        // } 

        return tmpDefaultPos;
    };

    /*
     * Taskbar
     */

    // Start button
    var startButton = $('#startButton');

    startButton.mousedown(function() {
        $('.icon').attr('data-status', 'normal');
        var isOpen = $(this).attr('data-open');
        if (isOpen === 'true') {
            $(this).attr('data-open', false);
            startMenu.hide();
        } else if (isOpen === 'false') {
            $(this).attr('data-open', true);
            startMenu.show();
        }
    });

    // Taskbar items
    WIN95.taskBarItem = function() {
        this.ID = null;
        this.image = null;
        this.title = null;
    };

    WIN95.taskBarItem.prototype = {
        constructor: WIN95.taskBarItem,
        set: function(data) {
            this.ID = data.ID;
            this.image = data.image;
            this.title = data.title;
            return this;
        },
        render: function() {
            var _this = this;
            var element = $(Mustache.render(
                WIN95.templates.taskBarItem, {
                    ID: this.ID,
                    image: this.image,
                    title: this.title
                }
            )).mousedown(function(e) {
                $('.taskBarItem').attr('data-status', 'normal');
                $(this).attr('data-status', 'selected');
                $('[data-window=' + _this.ID + ']').show().mousedown();
            }).appendTo('#taskBarItems').attr('data-status', 'selected');
            this.postRender(element);
        },
        postRender: function(element) {

        }
    };

    // Taskbar clock
    setInterval(function() {
        $('#clock span').text(currentTime());
    }, 1000);

    /*
     * Start menu
     */

    var startMenu = $('#startMenu');
    $('#startMenuRight').menu();

    $('#startMenuRight li').hover(function() {
        $(this).find('a').css('color', '#FFF');
    }, function() {
        $(this).find('a').css('color', '#000');
    });

    /*
     * Desktop
     */

    $(this).mousedown(function(e) {
        var defocus = [
            $(e.target).parents('.icon').length,
            $(e.target).parents('#startMenu').length,
            $(e.target).parents('#taskBar').length,
            $(e.target).is('#taskBar')
        ];
        //console.log(defocus);
        var d = false;
        for (var i in defocus) {
            if (defocus[i]) {
                d = true;
            }
        }
        if (!d) {
            $('.icon').attr('data-status', 'normal');
            if (startButton.attr('data-open') === 'true') {
                startButton.mousedown();
            }
        }

        if (!$(e.target).parents(".context-menu").length > 0) {
            // Hide it
            $(".context-menu").hide();
        }
    }).keypress(function(e) {
        if (e.which === 13) {
            $('.icon[data-status=selected]').dblclick();
        }
    }).bind('contextmenu', function(e) {
        // console.log('rightclick');
        // e.preventDefault();

        // $(".context-menu.desktop").finish().toggle().css({
        //     top: e.pageY + "px",
        //     left: e.pageX + "px"
        // });

        //return false;
    });

});