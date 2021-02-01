# Portfolio

### _By Kody Gordon_
### _Roboger Translator_

## Technologies
* HTML
* CSS
* Javascript
* Bootstrap

## Description
This website was built to allow user to input a number and get a response in robot language.

## Setup/Installation Requirement
* [Portfolio](https://github.com/kody7mm/)
* [Project Page](https://github.com/kody7mm/roboger)

* Open the terminal on your local machine
* Clone this project with the following git command $ git clone <https://github.com/kody7mm/roboger>
* Navigate to the top level of the repository with the command $ cd mr-roboger
* Open index.html in the browser of your choice with the command $ open index.html.

## Known Bugs
* Design will be improved
* Improvements to floating could be implemented after more experience and practice is had.

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
