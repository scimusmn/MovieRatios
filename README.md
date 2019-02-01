# Movie Ratios
Stop motion animation station for the[Math Moves! exhibit](http://www.mathmoves.org/)
at the [Science Museum of Minnesota](https://www.smm.org).

## Technologies
* [NodeJS](https://nodejs.org/en/)
* [Electron](https://electronjs.org/)

## Basic Operation

This experience allows visitors to create short stop motion animations using small toys and magnetic blocks. The on screen interface consists of two image areas: one shows that last picture that was taken, and the other shows the current view of the camera. Two button wedges on the table allow the visitors to interact with the program: one has buttons related to image capture, while the other has buttons relating to playback. When the visitor presses the 'capture' button, the current camera image is saved to the 'flipbook' of stored images, while if the 'delete' key is pressed, the last image in the flipbook is deleted. 

Pressing the 'play' button causes the program to replay the flipbook of images at a user-defined rate. To change the play rate, the visitor can press the 'slower' or 'faster' buttons. Each time one of these buttons is pressed, it changes the playback rate by a factor of 2 (ie, if the faster button is pressed, the video will play twice as fast). The current playback rate is indicated at the bottom of the screen by a filmstrip of image thumbnails, which displays how many images will be played in 1 second.

## Hardware Setup

The application runs on a Mac Mini running OSX. It accepts user input via a keyboard encoder and 6 Happ Buttons. Video is recorded using a Logitech c920 Webcam.

## Installation

#### Install Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew doctor
brew upgrade
brew tap caskroom/cask
brew cleanup
```

#### Install git, nodejs, and yarn

```
brew install git node yarn
```

#### Install the application

```
sudo mkdir /usr/local/src
sudo chmod 777 /usr/local/src
git clone --recurse-submodules https://github.com/scimusmn/mm-0112-movieRatios /usr/local/src/app
```

#### Setup autolaunch

  1. Open System Preference > "Users & Groups" > "Login Items"
  2. Click the '+' below the list of login items.
  3. Select '/usr/local/src/app/startup.command'

## Notes

#### Troubleshooting

* *__Camera image is not displaying onscreen__*: The most likely cause for this would be a faulty webcam. Check the USB connections, unplug and replug the camera, and restart the application. If that doesn't fix the problem, replace the camera. 
