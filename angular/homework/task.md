### AngularJS homework

Use the file [students.html](students.html) as a basis for this hometask.
It contains the list of the students from EPAM Front End Lab with randomly-generated hometask marks.

1. Show list of students and their scores for homework #1
  - *(advanced)* Show only student's surname, show full name as a tooltip on hover
2. Add header text with the name of corresponding homework
3. Add 'search' textbox which should filter out students
4. Add select with all homeworks
  - *(advanced)* Options which are after this lesson should be disabled
5. Selecting homework in select should update scores and header
6. *(advanced)* Display score results in a more appealing way
  - Show results as a simple chart bars (either vertical or horizontal)
  - Chart bars should have height/width based on score as well as appropriate color
  - *(tip)* The easiest way to range color from green(max score) to red(min score) is by using `hsl`
  - *(note)* All dom interactions should be done via `directive`
7. *(advanced)* Add button which should bring test scores instead of homeworks
  - Header text should be changed appropriately
  - Select with homeworks should get unselected
  - *(note)* Test and homeworks have different max values (85 and 10)

NB! Completing this homework without 'advanced' tasks can not earn more than 7 points