
WIN95.templates = {
	icon:
	'<div class="icon" data-icon="{{ID}}" data-status="normal">' + 
		'<img src="assets/images/icons-png/{{image}}.png" alt="" draggable="false" />' + 
		'<span>{{text}}</span>' + 
		'<textarea></textarea>' + 
	'</div>',

	explorer:
	'<div class="window explorer" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
			'<li data-open="false"><a href="#"><u>F</u>ile</a></li>' + 
			'<li data-open="false"><a href="#"><u>E</u>dit</a></li>' + 
			'<li data-open="false"><a href="#"><u>V</u>iew</a></li>' + 
			'<li data-open="false"><a href="#"><u>H</u>elp</a></li>' + 
		'</ul>' + 
		'<div class="explorerContents"></div>' + 
		'<div class="explorerStatusBar">' + 
			'<div class="explorerStatusBarLeft"><span></span></div>' + 
			'<div class="explorerStatusBarRight"><span></span></div>' + 
		'</div>' + 
	'</div>',

	vimeo:
	'<div class="window explorer video" data-window="{{ID}}" id="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<div class="explorerContents"><iframe src="https://player.vimeo.com/video/{{videoid}}?autoplay={{autoplay}}&badge=0&byline=0&loop=1&title=0&share=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>' + 
	'</div>',

	youtube:
	'<div class="window explorer video" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<div class="explorerContents"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/{{videoid}}?autoplay={{autoplay}}" frameborder="0" allowfullscreen></iframe></div>' + 
	'</div>',

	slideshow: 
	'<div class="window explorer slideshow" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
		'</ul>' + 
		'<div class="explorerContents">'+
			'<div class="slidecontainer">'+
			'{{#slides}}' +
				'<div class="slide">' +
					'<div class="image"><img src="assets/images/slideshows/{{image}}" /></div>' +
					'<div class="desc">{{{description}}}</div>' +
				'</div>' +
			'{{/slides}}' +
			'</div>' +
		'</div>' + 
		'<div class="explorerStatusBar">' + 
			'<div class="explorerStatusBarLeft"><span>&#9664; PREVIOUS</span></div>' + 
			'<div class="explorerStatusBarRight"><span>NEXT &#9654;</span></div>' + 
		'</div>' + 
	'</div>',

	internetonline: 
	'<div class="window explorer internetonline" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
		'</ul>' + 
		'<div class="explorerContents">'+
			'<div class="iol"><img src="assets/images/iol.png" /></div>'+
			'<div class="history"><img src="assets/images/history.png" /></div>'+
			'<div class="fb"><a href="https://www.facebook.com/" target="_blank" onClick="ga(\'send\', \'event\', \'InternetOnline\', \'Facebook\')"><img src="assets/images/fb.png" /></a></div>'+
			'<div class="tw"><a href="https://twitter.com/" target="_blank" onClick="ga(\'send\', \'event\', \'InternetOnline\', \'Twitter\')"><img src="assets/images/tw.png" /></a></div>'+
		'</div>' +
	'</div>',

	profile: 
	'<div class="window explorer profile" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
		'</ul>' + 
		'<div class="explorerContents">'+
			'<div class="profilewrap">'+
				'<div class="title"><span class="titleleft">Online Profile for: </span><span class="titleright">Lorem</span></div>'+
				'<div class="card">'+
					'<div class="photo"><img src="assets/images/profilephoto.png" /></div>'+
					'<div class="infomain">'+
						'<table>'+
							'<tr><th>Member Name:</th><td>Lorem Ipsum</td></tr>'+
							'<tr><th>Location:</th><td>Earth</td></tr>'+
							'<tr><th>Birthdate:</th><td>N/A</td></tr>'+
							'<tr><th>Marital Status:</th><td>It\'s Consectetur</td></tr>'+
						'</table>'+
					'</div>'+
					'<div class="infobottom">'+
						'<table>'+
							'<tr><th>Occupation:</th><td>Sed lacinia justo fermentum elementum tincidunt.</td></tr>'+
							'<tr><th>Hobbies:</th><td>Etiam non risus vel nisi posuere vulputate quis et velit</td></tr>'+
							'<tr><th>Aspirations:</th><td>Aliquam metus nulla, porttitor sit amet eros ac, lobortis pretium mauris.</td></tr>'+
						'</table>'+
					'</div>'+
				'</div>'+
				'<div class="foot">'+
					'<div class="iollogo"><img src="assets/images/iol.png" height="46" /></div>'+
					'<div class="addlogo"></div>'+
				'</div>'+
			'</div>'+
		'</div>' +
	'</div>',

	gifs: 
	'<div class="window explorer gifs" data-window="{{ID}}" class="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
		'</ul>' + 
		'<div class="explorerContents">'+
			// GIFS GO HERE
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
			'<div class="danceline">'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
				'<span><img src="assets/images/gifs/bitdance.gif" /></span>'+
			'</div>'+
		'</div>' +
	'</div>',

	history: 
	'<div class="window explorer history" data-window="{{ID}}" class="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
			'<li data-open="false"><a href="#"><u>S</u>earch History</a></li>' + 
		'</ul>' + 
		'<div class="explorerContents" id="scrollbox1">'+
			'<ul>' + 
				'<li>lorem ipsum dolor sit amet</li>' +
				'<li>consectetur adipiscing elit</li>' +
				'<li>suspendisse rutrum ligula</li>' +
				'<li>at lectus posuere</li>' +
				'<li>at condimentum ante fringilla</li>' +
				'<li>nulla ultricies</li>' +
				'<li>vehicula ante sed</li>' +
				'<li>aliquet metus</li>' +
				'<li>non diam eget dolor porttitor tincidunt</li>' +
				'<li>id eget du</li>' +
				'<li>mi vel dignissim rhoncus</li>' +
				'<li>Proof that Santa makes crop circles</li>' +
				'<li>neque ex blandit mi</li>' +
				'<li>sed fringilla enim metus ac ante</li>' +
				'<li>vehicula ligula urna</li>' +
			'</ul>' + 
		'</div>' +
	'</div>',

	photo: 
	'<div class="window explorer photo" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarMinimize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarMaximize" data-status="enabled"></div>' + 
				'<div class="windowTitleBarClose" data-status="enabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<ul class="windowMenuBar">' + 
		'</ul>' + 
		'<div class="explorerContents">'+
			'<div><img src="{{photo}}"/></div>'+
		'</div>' +
	'</div>',

	taskBarItem:
	'<div class="taskBarItem" data-taskBarItem="{{ID}}" data-status="normal">' + 
		'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
		'<span>{{title}}</span>' + 
	'</div>',

	dialogBox:
	'<div class="window dialogBox" data-window="{{ID}}" data-status="selected">' + 
		'<div class="windowTitleBar">' + 
			'<span>{{title}}</span>' + 
			'<div class="windowTitleBarButtons">' + 
				'<div class="windowTitleBarClose" data-status="disabled"></div>' + 
			'</div>' + 
		'</div>' + 
		'<div class="dialogBoxContents">' + 
			'<img src="assets/images/icons-png/{{image}}.png" alt="" />' + 
			'<span>{{text}}</span>' + 
		'</div>' + 
		'<div class="dialogBoxButtons"></div>' + 
	'</div>'
};