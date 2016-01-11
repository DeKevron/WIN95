# Windows 95 Sim Using Javascript

Forked from Kaepora's WIN95 Project: https://github.com/kaepora/WIN95

Features include:

* Working Windows 95 Environment (start menu, task bar, maximize, minimize, open, close, all the things)
* Responsive for mobile devices
* Chain icons on the "desktop" or on the "file system" to windows or have them open other windows.
* Multiple Window types including (found in **assets/js/sys/**): 
  * Explorer (this is your typical file system where you can chain files/folders)
  * Dialog Box (show a warning or other system message)
  * Video (plays a video from YouTube or Vimeo)
  * Photo (displays a single photo)
  * Slideshow (displays a sequence of photos, use next/previous buttons or arrow keys)
  * Internet Online (window inspired by the old AOL console)
  * Search History (just a text list, worked with Internet Online Window)
  * Profile (inspired by the AOL profile Window)
  * GIFs (from back when they were pronounced with a "G" sound, just a window repeating goofy animation)
* Initial loading page simulating a remote desktop connection

## Getting started so you can do stuff:

**Node and Bower are required.** Make sure these files are included in your project folder root:

* gulpfile.js
* .gitignore
* .jshintignore
* .bowerrc
* bower.json
* config.json
* package.json

### Using the config.json

Enter your config settings (optional)

	dest :  your_destination_folder_for_your_compiled_files
	assets : your_assets_folder - leave blank tot put images,css,js,videos,fonts in the root. !! You will need to manually move the src assets to this folder.
	hostname :  enter_your_server_hostname
	env : dev (options are: dev, tst, prd)
	
### Install Dependencies

In your project folder run [sudo] **npm install** and [sudo] **bower install**.

### Gulp

Run **gulp dev** in your project folder to kickoff browsersync, jshint and sass watching.

Run **gulp build** to compile all assets and compress images




