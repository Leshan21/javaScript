/*gsap.to (".box",{
    y:100,
    x:100,
    repeat:-1,
    duration:2,
})*/
let tl = gsap.timeline();
tl.from(".box1",{
    y:100,
    stagger: 0.1,
    
})

tl.fromTo(".box2",{
    y:-200, 
},{
     y:0,
     duration:3,
     opacity:1,
     ease:"bounce",      
    })

gsap.effects.explode(".box3",{
    direction:"up",
    duration: 3,
})
