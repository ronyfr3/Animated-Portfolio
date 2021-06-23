export const animateOne = {
    initial: {
        opcaity: 0,
        x: -100,
        scale:0.8
    },
    in: {
        opacity: [0,0.0,0.9,1],
        x: 0,
        scale:1
    },
    out: {
        opacity: 0,
        x: -100,
        scale:1.2
    }
}
export const animateTwo = {
    initial: {
        opcaity: 0,
        x: "-100vw",
        scale:0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale:1
    },
    out: {
        opacity: 0,
        x: "-100vh",
        scale:1.2
    }
}
export const animateThree = {
      in: {
        opacity: 1,
        x:-300
    },
    out: {
        opacity: 0,
        x:300
    },
    end: {
        opacity:1,
        x: 0
    }
}
export const transition = {
    //spring and stiffness create bounce effect
    // type: "spring",
    // stiffness: 100,
    // duration: 0.4
    //tween and ease linear/easeIn/circInOut/anticipate create gentle slide animation 
    type: "tween",
    ease: "anticipate",
    duration:1
}