
'use strict';

WIN95.icon = function() {
    this.ID = null;
    this.image = 'ftmcl_4500';
    this.text = 'New';
    this.rename = true;
};

WIN95.icon.prototype = {
    constructor: WIN95.icon,
    set: function(idata) {
        this.data      = idata;
        this.ID        = idata.ID;
        this.image     = idata.image;
        this.text      = idata.text;
        this.rename    = idata.rename;
        this.type      = idata.type;
        this.appAction = idata.appAction;
        this.videoType = idata.videoType;
        this.videoid   = idata.videoid;
        this.slides    = idata.slides;
        this.photo     = idata.photo;
        this.position  = idata.position;
        this.autoplay  = idata.autoplay;
        this.height    = idata.height;
        //console.log(idata);
        return this;
    },
    draggableOptions: {
        containment: 'window',
        start: function() {
            $(this).attr('data-status', 'dragging');
        },
        stop: function() {
            $(this).attr('data-status', 'selected');
        }
    },
    renderWindow: function() {

    },
    render: function(renderTarget) {
        var _this = this;
        var element = $(Mustache.render(
                WIN95.templates.icon, 
                {
                    ID: this.ID,
                    image: this.image,
                    text: this.text,
                    type: this.type,
                    appAction: this.appAction
                }
            //)).mousedown(function(e) {
            )).bind('touchstart mousedown', function(e) {
                if ($(e.target).is('span') &&
                    $(this).attr('data-status') === 'selected') {
                   
                    if (!_this.rename) {
                        return;
                    }

                    window.setTimeout(function(t) {
                        if ($(t).attr('data-status') !== 'selected') {
                            return;
                        }

                        //$(document).one('mousedown', function(e) {
                        $(document).one('touchstart mousedown', function(e) {
                            //console.log('baboo');
                            if ($(e.target).is(t)) {
                                return;
                            }
                            _this.text = $(t).find('textarea').val();
                            $(t).find('textarea').hide();
                            $(t).find('span')
                                .text(_this.text)
                                .show();
                        });
                        $(t).find('span').hide();
                        $(t).find('textarea')
                            .text($(t).find('span').text())
                            .elastic()
                            .css({
                                'display': 'inline',
                                'margin': 0,
                                'height': '1.3em'
                            })
                            .keypress(function(e) {
                                if (e.which === 13) {
                                    //$(document).mousedown();
                                    $(document).trigger('touchstart mousedown');
                                }
                            })
                            .select();
                    }, 1000, this);
                }
                $('.icon').attr('data-status', 'normal');
                $(this).attr('data-status', 'selected');
            //}).dblclick(function() {
             }).bind('dblclick touchend', function() {
                $('.icon').attr('data-status', 'normal');
                if ($('[data-window=' + _this.ID + ']').length) {
                    //$('[data-window=' + _this.ID + ']').mousedown();
                    $('[data-window=' + _this.ID + ']').trigger('touchstart mousedown');
                    //console.log('derlp');
                    return;
                }

                // GA Tracking
                // var windowType = $(element).attr('data-icon');
                // switch(windowType) {
                //     case 'evidenceFolder15':
                //         ga('send', 'event', 'Evidence', 'Current', '2015');
                //         break;
                //     case 'evidenceFolder14':
                //         ga('send', 'event', 'Evidence', 'History', '2014');
                //         break;
                //     case 'evidenceFolder13':
                //         ga('send', 'event', 'Evidence', 'History', '2013');
                //         break;
                //     case 'myComputer':
                //     case 'myProfile':
                //     case 'myMusic':
                //     case 'gifs':
                //     case 'internetOnline':
                //     case 'recycleBin':
                //         ga('send', 'event', 'Desktop', windowType, 'Window');
                //         break;
                //     case 'driveD':
                //          ga('send', 'event', 'Evidence', 'Backup', windowType);
                //          break;
                //     case 'streamVid':
                //     case 'santaVid':
                //     case 'tvShow':
                //         ga('send', 'event', 'Evidence', 'Backup', _this.text);
                //         break;
                //     default:
                //         ga('send', 'event', 'Icon', 'Click', windowType);
                // }

                //console.log('dorlep');
                switch(_this.type) {
                    case 'dialog':
                        console.log('dialog');
                        break;
                    case 'video':
                        var video = new WIN95.video();
                        video.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            videoType: _this.videoType,
                            videoid: _this.videoid,
                            position: _this.position,
                            autoplay: _this.autoplay
                        }).render('#desktop');
                        break;
                    case 'slideshow':
                        var slideshow = new WIN95.slideshow();
                        slideshow.set({
                            ID: _this.ID,
                            image: _this.image,
                            slides: _this.slides,
                            title: _this.text,
                            position: _this.position
                        }).render('#desktop');
                        break;
                    case 'internetonline':
                        var internetonline = new WIN95.internetonline();
                        internetonline.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            position: _this.position
                        }).render('#desktop');
                        break;
                    case 'profile':
                        var profile = new WIN95.profile();
                        profile.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            position: _this.position
                        }).render('#desktop');
                        break;
                    case 'gifs':
                        var gifs = new WIN95.gifs();
                        gifs.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            position: _this.position
                        }).render('#desktop');
                        break;
                    case 'photo':
                        var photo = new WIN95.photo();
                        photo.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            photo: _this.photo,
                            position: _this.position
                        }).render('#desktop');
                        break;
                    case 'history':
                        var history = new WIN95.history();
                        history.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            position: _this.position
                        }).render('#desktop');
                        break;
                    case 'nothing':
                        _this.appAction();
                        break;
                    case 'explorer':
                    default:
                        var explorer = new WIN95.explorer();
                        explorer.set({
                            ID: _this.ID,
                            image: _this.image,
                            title: _this.text,
                            height: _this.height,
                            position: _this.position
                        }).render('#desktop');
                        _this.appAction();
                }
                
            })
            .draggable(this.draggableOptions)
            .appendTo(renderTarget);
        this.postRender(element);
    },
    postRender: function(element) {
    }
};

