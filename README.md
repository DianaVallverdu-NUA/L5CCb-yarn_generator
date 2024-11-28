# Yarn Generator

Creative computing meets textile in this little project, where students are asked to generate a Yarn Wrap using loops, randomness and Perlin Noise. You can see the expected outcome [in this webpage](https://dianavallverdu-nua.github.io/L5CCb-yarn_generator/).

# Suggested Approach

1. Set up canvas to a width and height of your liking - recommended a horizontal square to better resemble a classic yarn wrap.
2. Create a draw function that:
  - sets the background to 220
  - draws a horizontal line, going from a point x = 0, y = y0 to a point x = width, y = y0, where y0 is a point of your choice

[illustration](https://miro.com/app/board/uXjVL-1wFw8=/?moveToWidget=3458764608682854718&cot=14)

3. Randomize the point y0 between 0 and height.
4. Adapt your draw function so that it creates a segment of horizontal lines, instead of just one line. In this case, you will have to:
- randomly select point y0
- choose the number of threads n
- choose the increment inc

[illustration](https://miro.com/app/board/uXjVL-1wFw8=/?moveToWidget=3458764608683480704&cot=14)

5. Adapt the code from step 4 so that instead of choosing the number of threads, you choose the **length in pixels** of the segment.

6. Adapt the code from step 5 so that the length in pixels is a random number between 0 and height - y0

7. Move the all your code except for the background set to a separate function named `drawHorizontalSegment`

8. Create a function named `drawVerticalSegment` and repeat steps 2 to 7.

9. Within your `draw` function, can you add a random choice so that it either draws a horizontal or vertical segment?

10. Within your `draw` function, can you add a random choice for the segment colour?

**Challenge:** Modify the code so that at every click, 5 segments with random direction and colour are drawn.

**Additional Challenge:** Modify the code so that segments do not fully overlap with each other - i.e., to prevent segments from being drawn on top or within another segment.

[illustration](https://miro.com/app/board/uXjVL-1wFw8=/?moveToWidget=3458764608685547801&cot=14)

**Extra Challenge:** Use Perlin Noise to make the lines more realistic, like the ones in the example!

[example](https://editor.p5js.org/shfitz/sketches/iKtiBGV0d)

**Ultimate Challenge:** Create a `Segment` class that manages segment creation and overlap tests.
