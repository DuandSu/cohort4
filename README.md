21-Aug-2020: This repository contains the majority of the Competency Project work completed as part of the EvolveU 6-Month Full Stack Developer program. There is also a program or two from my Udemy courses:

\01-getting-started\src\index.html:
- Main HTML (index.html) to access the JavaScript projects. Use live-server.

\01-getting-started\src\scripts:
- First JavaScript (.js) competencies including Jest TDD test scripts (.test.js) called from JS (main.js).
- Basic Syntax exercise (syntax)
- Size (functions).
- Simple Calculator (calculator). 2-number add, subtract, multiply and divide.
- Simple Tax Calculator (taxcalculator). Calculate basic income tax based on income tier.
- Working with Arrays (arraysdictionaries) to add, show, total or clear the array.
- Working with Dicionaries (arraysdictionaries). Lookup province description for 2-digit province code. Eg. AB, BC.

\01-getting-started\src\python:
- First Python (.py) competencies inclusing Pytest test scripts (_test.py).
- Basic Syntax exercise (syntax)
- Simple Tax Calculator (call_cantax, cantax). Calculate basic income tax based on income tier.
- Sum calculator (call_sum_with_param) using command line parameters as input/arguments.
- Read file (read_file) and print character and line count, as well as number of "else" statements.
- List files in directory (list_dir).
- Read CSV file and print summary report (process_2018_census) to terminal/file.
- Read XLS sheets as tables and print invoice report (call_print_invoice).
- Tool library for XLS competency (xls_app_tools).

\02-dom\src\index.html:
- Main HTML (index.html) to access the JavaScript projects. Use live-server.

\02-dom\src\scripts:
- First JavaScript DOM Exercises (.js) competencies including Jest TDD test scripts (.test.js) called from JS (main.js).
- Simple Ordered List (OL) (theBasicDOMMain), adding LI elements to list end or start, as well as delete using target event.
- Simple Cards (workingWithCardsMain), adding before or after current card, as well as deleting cards.
- Library for all exercises (c110DOM).

\03-objects\src\index.html:
- Main HTML (index.html) to access the JavaScript projects. Use live-server.

\03-objects\src\scripts:
- First JavaScript Classes, Object and State Exercises (.js) competencies including Jest TDD test scripts (.test.js) called from JS (main.js).
- Bank Account and Controller (130cindex, 130d, account).
- Fetch Exercise (fetch) and first use of EvolveU-provided simple Python RESTapi(web.py).
- Communities and Cities (130dindex, 130d, community, city) interacting with simple Python RESTapi.
- Separation of Concerns for C&C competency (Competency 130D Separation.pptx).

\03-objects\src\scripts\tdd:
- Converted instructor console.log demonstration into Jest test scripts found in folder, which was my own learning initiative. Found it solidified my understanding of multiple functions declaration possibilites, dictionaries and objects. As well as provided great Jest testing experience.

\react-01\src:
- First ReactJS competency (App) that tracks a counter in React state to update browser.

\react-01b\src:
- ReactJS competency (App) that adds a conditional Odd/Even render.

\react-01b\src\components:
- ReactJS compenents (.js)
- ReactJS component for Counter (MyCompenent) that renders the counter.
- ReactJS component for Even (EvenCompenent) that renders if counter is even.
- ReactJS component for Odd (OddCompenent) that renders if counter is odd.

\react-02\src:
- ReactJS competency (App) that is launching pad for majority of remaing React competencies.
- First step was for selecting SVG icons and using transform to change. Also show indicators of SVG selected and clicked.
- Later added React Tutorial Clock (\components\Clock) as 7th icon.

\react-02\src\components:
- ReactJS compenents (.js) with test scripts (.test.js)
- SVG 1 (Enterprise Space Ship) simply takes browser to default React "Starter" application (starter).
- SVG 2 (Star Treak Section 31) starts the React Tutorial Tic Tac Toe application (Tic Tac Toe, tttTools). Implemented basic AI suggesting moves for each player. Winning squares are highlighted in green.
- SVG 3 (Black/Blue Klingon Symbol) starts a simple demonstration (Play) of useEffect to change document title.
- SVG 4 (Orange/Yellow Klingon Symbol) is the JS Community and Cities migrated to ReactJS (ComsCities, SetCommunity, AddCity). Good learning around React state and how to minimize what is in state for future projects. Satisfied with this first major React project. Separations of concerns and re-use of code made project reasonably quick to migrate. Migrated JS in "\react-02\src\scripts".
- SVG 5 (My Kitty Klingon) implements a Linked List (LinkedList, CurrentLLNodeComp, NewLLNodeComp, ButtonsLLComp). Uses recursion to perform total of amounts. Classes (lList) in "\react-02\src\scripts".
- SVG 6 (Vulcan Live Long and Prosper) implements a FIFO queue list and a LIFO stack to demonstrate the difference (QueCom, CurrentQueNode, NewQueNodeComp, ButtonsQueComp). Both referenced as queues, although technically LIFO is not a queue. Extending the Linked List class and reuse of Linked List components and code made this very easy to implement. Classes (Queue) in "\react-02\src\scripts".
- Icon 7 (Clock Compenent) implements ThemeContext (SetColor, ThemeContext) to change the font text color for the applications 4, 5, 6 and 7.

\munrobinsongardens\src\:
- This very basic ReactJS (App) that prints an invoice from data received from my Python RESTapi, which gets the data from an Excel spreadsheet. The goal for this was to test my personally programmed Python RESTapi from ReactJS app. For ReactJS only concerned about functionality and NOT presentation.

\munrobinsongardens\src\components:
- React JS component (DispInvComp) to display the chosen invoice.

\munrobinsongardens\src\python:
- My Python RESTapi (flask_template), which gets the data from an Excel spreadsheet.

\robofriends\:
- Robofriends application from Udemy Full Stack Developer course.

\postgreSQL\:
- My postgreSQL database competency (CFL). This is the beginning database for an application to track a Canadian Football Leauge pool I have with friends, we call it the Canadian Flubber League.

The following is the original README.md file when this git repository was first create as part of the EvolveU 6-Month Full Stack Developer program. Kept text for historical reference:

This file must be viewed from [github](https://github.com/larryevolveu/reference). Do not view from an editor.

This is the "Getting Started" repository for the EvovleU Full Stack Development program. It is a baseline to demonstrate:

- development environment
- development tools
- best practices

## Required Tools

The following tools are required to run the sample project:

- git - If you do not have git installed, install with default parameters. See [git](https://git-scm.com). To check, enter:
```sh
git --version
```
- Node - If you do not have Node installed, install the LTS version (left). See [node](https://nodejs.org/en/). To check, enter: 
```sh
node -v
```
- VSCode - If you do not have VSCode installed see [VSCode](https://code.visualstudio.com/).
- live-server - is a little development server with live reload capability. 
```sh
npm install -g live-server
```

## Clone this Repository

For the following instructions use your command line. In Windows, it could be dos or PowerShell. For mac and Linux use terminal.

1. Clone this repository. In your command line move to the directory that you would like to use as your base code directory. For the course it must be 'code'. This command will add a directory called 'reference' below the directory you are in.
```sh
git clone https://github.com/larryevolveu/reference.git
```

This repository has a number of projects within it. Each folder is a project. See the README.md in each folder for further instructions. 

