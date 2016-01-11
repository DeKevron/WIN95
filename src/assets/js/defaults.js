$(function() {
    'use strict';

    // IE8/Old ucky browser detection and text swap if it's allowed by the browser
    if(document.addEventListener){
        //$('#loading-content p').text('For the best experience, please update your browser to the latest version...');
        $('#loading-content p').text('Now connecting to remote desktop...');
    }

    /*
     * Desktop icons
     */

    WIN95.desktopIcons = {};
    // My Computer Icon
    WIN95.desktopIcons.myComputer = new WIN95.icon();
    WIN95.desktopIcons.myComputer.set({
        ID: 'myComputer',
        image: 'explorer_100',
        text: 'My Computer',
        rename: true,
        appAction: function() {
            WIN95.myComputerIcons.A.render('div[data-window=myComputer] .explorerContents');
            WIN95.myComputerIcons.C.render('div[data-window=myComputer] .explorerContents');
            WIN95.myComputerIcons.D.render('div[data-window=myComputer] .explorerContents');
        }
    }).render('#desktopIcons');

    // My Profile Icon
    WIN95.desktopIcons.myProfile = new WIN95.icon();
    WIN95.desktopIcons.myProfile.set({
        ID: 'myProfile',
        image: 'profile',
        text: 'My Profile',
        type: 'profile',
        rename: true,
        position: [75, 0]
    }).render('#desktopIcons');

    // My Music Icon
    WIN95.desktopIcons.myMusic = new WIN95.icon();
    WIN95.desktopIcons.myMusic.set({
        ID: 'myMusic',
        image: 'mmsys_117',
        text: 'My Music',
        type: 'photo',
        photo: 'assets/images/music.jpg'
    }).render('#desktopIcons');

    // Gifs Icon
    WIN95.desktopIcons.gifs = new WIN95.icon();
    WIN95.desktopIcons.gifs.set({
        ID: 'gifs',
        image: 'gifs',
        text: 'GIF Dance Party',
        type: 'gifs',
        position: [30, 40]
    }).render('#desktopIcons');

    // Internet Online Icon
    WIN95.desktopIcons.internetOnline = new WIN95.icon();
    WIN95.desktopIcons.internetOnline.set({
        ID: 'internetOnline',
        image: 'iol-globe',
        text: 'Internet Online',
        type: 'internetonline',
        position: [75, 320]
    }).render('#desktopIcons');

    // History Icon
    // WIN95.desktopIcons.history = new WIN95.icon();
    // WIN95.desktopIcons.history.set({
    //     ID: 'history',
    //     image: 'access_227',
    //     text: 'History',
    //     type: 'history',
    //     position: [40, 20]
    // }).render('#desktopIcons');

    // Recycle Bin Icon
    WIN95.desktopIcons.recycleBin = new WIN95.icon();
    WIN95.desktopIcons.recycleBin.set({
        ID: 'recycleBin',
        image: 'shell32_33',
        text: 'Trash Box',
        rename: false,
        height: 325,
        appAction: function() {
            //WIN95.trashIcons.slomoToilet.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.failedProjects.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.stuffAndThings.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.conspiracyTheories.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.poopsToGive.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.dating.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.loweredExpectations.render('div[data-window=recycleBin] .explorerContents');
            WIN95.trashIcons.shoppingList.render('div[data-window=recycleBin] .explorerContents');
        }
    }).render('#desktopIcons');

    WIN95.trashIcons = {};
    WIN95.trashIcons.failedProjects = new WIN95.icon();
    WIN95.trashIcons.failedProjects.set({
        ID: 'failedProjects',
        image: 'wordpad_128',
        text: 'Failed Projects.txt',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    WIN95.trashIcons.stuffAndThings = new WIN95.icon();
    WIN95.trashIcons.stuffAndThings.set({
        ID: 'stuffAndThings',
        image: 'iexplore_32529',
        text: 'Stuff and Things (1).exl',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    WIN95.trashIcons.conspiracyTheories = new WIN95.icon();
    WIN95.trashIcons.conspiracyTheories.set({
        ID: 'conspiracyTheories',
        image: 'inetcpl_1308',
        text: 'Conspiracy Theories from G-ma.eml',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    WIN95.trashIcons.poopsToGive = new WIN95.icon();
    WIN95.trashIcons.poopsToGive.set({
        ID: 'poopsToGive',
        image: 'shell32_5',
        text: 'Poops to Give (Empty)',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    WIN95.trashIcons.dating = new WIN95.icon();
    WIN95.trashIcons.dating.set({
        ID: 'dating',
        image: 'iol-globe',
        text: 'Dating Profile',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    WIN95.trashIcons.loweredExpectations = new WIN95.icon();
    WIN95.trashIcons.loweredExpectations.set({
        ID: 'loweredExpectations',
        image: 'wordpad_128',
        text: 'Lowered Expectations.txt',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    WIN95.trashIcons.shoppingList = new WIN95.icon();
    WIN95.trashIcons.shoppingList.set({
        ID: 'shoppingList',
        image: 'wordpad_128',
        text: 'sHoPpInG lIsT.txt',
        appAction: function() {
            trashError.render();
        },
        type: 'nothing'
    });

    var trashError = new WIN95.dialogBox();
    trashError.set({
        ID: WIN95.getUniqueID(),
        image: 'confcp_118',
        title: 'Trashed Document Restore',
        sound: 'ding',
        text: 'WARNING: Cannot restore trashed items. Try not clicking on them and try again.',
        buttons: {
            'OK': function(button) {
                $('.dialogBox[data-window='+trashError.ID+']').remove();
            }
        }
    });

    // WIN95.trashIcons = {};
    // WIN95.trashIcons.slomoToilet = new WIN95.icon();
    // WIN95.trashIcons.slomoToilet.set({
    //     ID: 'slomoToilet',
    //     image: 'mmsys_119',
    //     text: 'SloMoToilet.avi',
    //     type: 'video',
    //     videoType: 'youtube',
    //     videoid: 'UMqVn05QK2A'
    // });

    /*
     * Drive A icons
     */

    WIN95.myComputerIcons = {};
    // Drive A
    WIN95.myComputerIcons.A = new WIN95.icon();
    WIN95.myComputerIcons.A.set({
        ID: 'driveA',
        image: 'shell32_7',
        text: 'Removable Disk (A:)',
        type: 'explorer',
        appAction: function() {
            (new Audio('assets/audio/floppyread.wav')).play();
            window.setTimeout(function() {
                // Launch error message after 3 sec
                errorReading.render();
            },3500);

        }
    });

    // Drive A > Disk Read Error
    var errorReading = new WIN95.dialogBox();
    errorReading.set({
        ID: WIN95.getUniqueID(),
        image: 'isign32_4001',
        title: 'Error Reading A:',
        sound: 'ding',
        text: 'Unable to read. Please check disk and retry.',
        buttons: {
            'Ok': function(button) {
                $('.explorer[data-window='+WIN95.myComputerIcons.A.ID+']').remove();
                $('.dialogBox[data-window='+errorReading.ID+']').remove();
            },
        }
    });



    /*
     * Drive C icons
     */

    // Drive C
    WIN95.myComputerIcons.C = new WIN95.icon();
    WIN95.myComputerIcons.C.set({
        ID: 'driveC',
        image: 'shell32_9',
        text: '(C:)',
        type: 'explorer',
        appAction: function() {
            WIN95.driveCIcons.slideshowExample.render('div[data-window=driveC] .explorerContents');
        }
    });

    // Drive C > 2013 Evidence Folder
    WIN95.driveCIcons  = {};
    WIN95.driveCIcons.slideshowExample = new WIN95.icon();
    WIN95.driveCIcons.slideshowExample.set({
        ID: 'slideshowExample',
        image: 'shell32_4',
        slides: [

        {
            image: 'show1-image1.jpg',
            description: 'Ut ut viverra nunc, id scelerisque purus. Aliquam nec mi nibh.'
        },

        {
            image: 'show1-image2.jpg',
            description: 'Donec non velit ut velit finibus luctus vel quis erat. Donec ac lacinia sapien, nec efficitur turpis.'
        },

        {
            image: 'show1-image3.jpg',
            description: 'Vestibulum semper mauris at aliquet fringilla. Integer molestie lorem tincidunt sollicitudin posuere.'
        },

        {
            image: 'show1-image4.jpg',
            description: 'Donec ut diam id ligula feugiat luctus. Praesent nisi odio, vehicula et felis in, maximus mattis libero.'
        }


        ],
        title: 'Example Slideshow',
        text: 'Example Slideshow',
        type: 'slideshow'
    });

    /*
     * Drive D icons
     */

    // Drive D
    WIN95.myComputerIcons.D = new WIN95.icon();
    WIN95.myComputerIcons.D.set({
        ID: 'driveD',
        image: 'shell32_12',
        text: 'Evidence Backup (D:)',
        type: 'explorer',
        appAction: function() {
            WIN95.driveDIcons.iRanVid.render('div[data-window=driveD] .explorerContents');
            WIN95.driveDIcons.windowsVid.render('div[data-window=driveD] .explorerContents');
            WIN95.driveDIcons.friends95Vid.render('div[data-window=driveD] .explorerContents');
            //WIN95.driveDIcons.friends95.render('div[data-window=driveD] .explorerContents');
        }
    });

    WIN95.driveDIcons  = {};
    // Drive D > Santa Evidence Video

    WIN95.driveDIcons.iRanVid = new WIN95.icon();
    WIN95.driveDIcons.iRanVid.set({
        ID: 'streamVid',
        image: 'mmsys_119',
        title: 'Running...',
        text: 'FofS - I Ran.mpeg',
        type: 'video',
        videoType: 'youtube',
        videoid: '0_Pq0xYr3L4',
        autoplay: '0'
    });

    WIN95.driveDIcons.windowsVid = new WIN95.icon();
    WIN95.driveDIcons.windowsVid.set({
        ID: 'santaVid',
        image: 'mmsys_119',
        title: 'Windows 95 Promo',
        text: 'Windows 95 Promo.avi',
        type: 'video',
        videoType: 'vimeo',
        videoid: '22721658',
        autoplay: '1'
    });
    

    // Drive D > TV Show Trailer
    WIN95.driveDIcons.friends95Vid = new WIN95.icon();
    WIN95.driveDIcons.friends95Vid.set({
        ID: 'tvShow',
        image: 'mmsys_119',
        title: 'Chandler and Rachel Teach Windows 95',
        text: 'Friends Win95.avi',
        type: 'video',
        videoType: 'youtube',
        videoid: 'kGYcNcFhctc',
        autoplay: '1'
    });

    // Drive D > Friends Windows '95 Video
    // WIN95.driveDIcons.friends95 = new WIN95.icon();
    // WIN95.driveDIcons.friends95.set({
    //     ID: 'friends95',
    //     image: 'mmsys_119',
    //     text: 'Win95_Guide.avi',
    //     type: 'video',
    //     videoType: 'youtube',
    //     videoid: 'kGYcNcFhctc',
    //     autoplay: '1'
    // });

    /*
     * Explorer icons
     */

    var win95LaunchDate = new Date(1995, 8, 24);
    var currDate = new Date();
    var daysSinceLastUpdate = Math.round((currDate - win95LaunchDate)/(1000*60*60*24));

    $('#startMenu ul#startMenuRight li ul li').click(function() {
        $('[data-icon=myComputer]').dblclick();
        $('[data-icon=driveC]').dblclick();
        $('[data-icon='+$(this).attr('id')+']').dblclick();
    });

    $('#startMenu ul#startMenuRight li').click(function() {
        // console.log($(this).attr('id'));
       $('[data-icon='+$(this).attr('id')+']').dblclick();
    });

    var runError = new WIN95.dialogBox();
    runError.set({
        ID: WIN95.getUniqueID(),
        image: 'confcp_118',
        title: 'Run...',
        sound: 'chord',
        text: 'ERROR: An error occured while trying to run: LEGS.dll not found',
        buttons: {
            'OK': function(button) {
                $('.dialogBox[data-window='+runError.ID+']').remove();
            }
        }
    });

    $('#startMenu ul#startMenuRight li[data-start-menu=run]').click(function() {
        runError.render('#desktop');
    });

    // Dialup Sound
    (new Audio('assets/audio/dialup2.mp3')).play();

    window.setTimeout = window.setTimeout;

    var loadscreen = setTimeout(function() {
        // Open myComputer via doubleclick
        //$('[data-icon=myComputer]').dblclick();
        // The Microsoft Sound
        (new Audio('assets/audio/win95.mp3')).play();
        $('#connecting-screen').fadeOut('fast');
        clearInterval(loadscreen);

        
            // Open Window 1
            var win1 = setInterval(function() {
                // Open Internet online via doubleclick
                $('[data-icon=internetOnline]').dblclick();
                clearInterval(win1);

                // Open Window 2
                var win2 = setInterval(function() {
                    // Open video window directly (bypassing file hierarchy)
                    var myproject = new WIN95.video();
                    myproject.set(
                        // Add position data to the existing window object data
                       $.extend(WIN95.driveDIcons.windowsVid.data, {'autoplay':'0', 'position':[75, 25]}) 
                    ).render('#desktop');

                    clearInterval(win2);
                
                }, 250); // Window 2
            }, 250); // Window 1
    }, 4000); // Conneciton Delay


    

    
    window.setTimeout(function() {
        var dialog = new WIN95.dialogBox();
        dialog.set({
            ID: WIN95.getUniqueID(),
            image: 'awfxex32_INFO',
            title: 'System Update',
            sound: 'ding',
            text: 'It has been '+daysSinceLastUpdate+' days since your last update. Would you like to update now?',
            buttons: {
                'Yes': function(button) {
                    $('.dialogBox[data-window='+dialog.ID+']').remove();
                    (new Audio('assets/audio/chimes.wav')).play();
                },
                'Later': function(button) {
                    
                    var doIt = new WIN95.dialogBox();
                    doIt.set({
                        ID: WIN95.getUniqueID(),
                        image: '_custom-justdoit',
                        title: 'System Update',
                        sound: 'doit',
                        text: 'Yesterday, you said tomorrow. So just do it!',
                        buttons: {
                            'DO IT!': function(button) {
                                $('.dialogBox[data-window='+doIt.ID+']').remove();
                                (new Audio('assets/audio/yesyoucan.wav')).play();
                            },
                            'Later': function(button) {
                                (new Audio('assets/audio/nowhatareyouwaitingfor.wav')).play();
                            }
                        }
                    }).render();
                    $('.dialogBox[data-window='+dialog.ID+']').remove();

                }
            }
        }).render();
    }, 10000);

    



});