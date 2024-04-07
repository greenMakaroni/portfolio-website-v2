const firstSecond = (animationSheet) => {
    animationSheet.sequence.play({ iterationCount: 1, range: [13, 15.1] })
    .then(() => { animationSheet.sequence.play({ iterationCount: Infinity, range: [15.1, 20.5] }) })
}

const secondFirst = (animationSheet) => {
    animationSheet.sequence.play({ iterationCount: 1, range: [13, 14], direction: 'reverse' })
    .then(() => { animationSheet.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] }) })
}

const thirdSecond = (animationSheet) => {
    animationSheet.sequence.play({ iterationCount: 1, range: [20.5, 22], direction: 'reverse' })
    .then(() => { animationSheet.sequence.play({ iterationCount: Infinity, range: [15.1, 20.5] }) })
}

const secondThird = (animationSheet) => {
    animationSheet.sequence.play({ iterationCount: 1, range: [21, 23] })
    .then(() => {animationSheet.sequence.play({ iterationCount: Infinity, range: [23, 28] }) })
}

export const entry = (animationSheet) => {
    animationSheet.project.ready
    .then(() => animationSheet.sequence.play({ iterationCount: 1, range: [0.1, 6.5] }))
    .then(() => animationSheet.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] }))
}

export const animationController = (animationSheet, section) => {
    if(section.current == "first" && section.prev == "first") return entry(animationSheet)
    if(section.current == "first") { secondFirst(animationSheet) }
    if(section.current == "third") { secondThird(animationSheet) }
    if (section.current == "second") {
        if (section.prev == "first") {
          firstSecond(animationSheet)
        } else {
          thirdSecond(animationSheet)
        }
      }
}
 
export const resetAnimation = (animationSheet) => {
    animationSheet.sequence.position = 0
}