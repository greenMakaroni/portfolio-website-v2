const firstSecond = (animationSheet) => {
  animationSheet.sequence
    .play({ iterationCount: 1, range: [13, 15.1] })
    .then(() => {
      animationSheet.sequence.play({
        iterationCount: Infinity,
        range: [15.1, 20.5],
      });
    });
};

const secondFirst = (animationSheet) => {
  animationSheet.sequence
    .play({ iterationCount: 1, range: [13, 14], direction: "reverse" })
    .then(() => {
      animationSheet.sequence.play({
        iterationCount: Infinity,
        range: [6.5, 12.5],
      });
    });
};

const entry = (animationSheet) => {
  animationSheet.project.ready
    .then(() =>
      animationSheet.sequence.play({ iterationCount: 1, range: [0.1, 6.5] })
    )
    .then(() => {
      animationSheet.sequence.play({
        iterationCount: Infinity,
        range: [6.5, 12.5],
      });
    });
};

export const animationController = (
  animationSheet,
  { current, prev },
  isLoaded
) => {
  if (current == "first") {
    if (prev == "first" && isLoaded) {
      entry(animationSheet);
    } else secondFirst(animationSheet);
  }

  if (current == "second") {
    firstSecond(animationSheet);
  }
};
