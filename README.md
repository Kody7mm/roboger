# Portfolio

### _By Kody Gordon_
### _Roboger Translator_

## Technologies
* HTML
* CSS
* Javascript
* Bootstrap
* jQuery

## Description
This website was built to allow user to input a number and get a response in robot? nese? Lish? Whats the proper term for robot language? *Makes note*

## Setup/Installation Requirement
* [Portfolio](https://github.com/kody7mm/)
* [Project Page](https://github.com/kody7mm/roboger)
* **Clone the repository** to a local directory using the command-line tool `git` ([how to install git](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)).  
  `$ cd ~/[directory]/[path]/[of]/[choice]/`  
  `$ git clone https://github.com/kody7mm/roboger.git` 

* **Navigate into the project** using `cd` to move to the top level of the project directory.  
  `$ cd roboger/`  

* **Run current project** by using command `code .` inside terminal to launch Visual Studio Code.

## Known Bugs
* Design will be improved
* Improvements to floating could be implemented after more experience and practice is had.
* Figure out proper terminology for robot language

## Tests
* Describe: robogerTranslate(number) {
>* Test: "It should return an array with a 0 if the number 0 is inputted"
>* Output: (robogerTranslate(0).toEqual([0]);

>* Test: "It should recognize if a number in the sequence includes a 1 and replace it with 'Beep!'"
>* Expect(robogerTranslate(10).toEqual([0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]);

>* Test: "It should recognize if a number in the sequence includes a 2, taking precedence over numbers with a 1, and replace it with 'Boop!'"
>* Expect(robogerTranslate(12).toEqual([0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]);

>* Test: "It should recognize if a number in the sequence includes a 3, taking precedence over numbers with a 1 or 2, and replace it with 'Won't you be my neighbor?'"
>* Expect(robogerTranslate(13).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);


## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Contact Information
Kody Gordon (gordon.km89@gmail.com)