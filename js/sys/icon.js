WIN95.icon = function() {
	this.ID     = null
	this.image  = 'ftmcl_4500'
	this.text   = 'New'
	this.rename = true
}

WIN95.icon.prototype = {
	constructor: WIN95.icon,
	set: function(data) {
		this.ID     = data.ID
		this.text   = data.text
		this.image  = data.image
		this.rename = data.rename
		return this
	},
	draggableOptions: {
		containment: 'window',
		start: function() {
			$(this).attr('data-status', 'dragging')
		},
		stop: function() {
			$(this).attr('data-status', 'selected')
		}
	},
	render: function(renderTarget) {
		var _this = this
		var element = $(Mustache.render(
			WIN95.templates.icon, {
				ID:    this.ID,
				image: this.image,
				text:  this.text
			}
		))
		.mousedown(function(e) {
			if (
				$(e.target).is('span') &&
				$(this).attr('data-status') === 'selected'
			) {
				if (!_this.rename) { return }
				window.setTimeout(function(t) {
					if ($(t).attr('data-status') !== 'selected') {
						return
					}
					$(document).one('mousedown', function(e) {
						if ($(e.target).is(t)) { return }
						_this.text = $(t).find('textarea').val()
						$(t).find('textarea').hide()
						$(t).find('span')
							.text(_this.text)
							.show()
					})
					$(t).find('span').hide()
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
								$(document).mousedown()
							}
						})
						.select()
				}, 1000, this)
			}
			$('.icon').attr('data-status', 'normal')
			$(this).attr('data-status', 'selected')
		})
		.dblclick(function() {
			$('.icon').attr('data-status', 'normal')
			var explorer = new WIN95.explorer
			explorer.set({
				ID: 'explorer',
				image: _this.image,
				title: _this.text
			}).render('#desktop')
		})
		.draggable(this.draggableOptions)
		.appendTo(renderTarget)
		this.postRender(element)
	},
	postRender: function(element) {
	}
}