Specs:
  Behavior: see if input is greater than 0 and less 4000
  input: 5345
  output: "this number is not able to be converted, try a number between 1-3999"

  Behavior: converts 1 = I, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
  input: 1
  output: I

  Behavior: converts 1-3 inclusively into same amount of I's
  input: 3
  output: III



  Behavior: converts 6-8 by taking V and appending the remanining numbers converted into I
  input: 7
  output: VII

  Behavior: Converts 4 and 9 exclusively by taking the next largest possible numeral (5 and 10) and prepending I it with
  input: 4, 9
  output: IV, IX
