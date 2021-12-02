const controller = new ScrollMagic.Controller()

function scene(section, offset, timeline){
    return new ScrollMagic.Scene({
        triggerElement: section,
        duration: '200%',
        triggerHook: 0,
        offset: offset
    })
    .setTween(timeline)
    .setPin(section)
    .addTo(controller)
}

//First section
const a_1 = new TimelineMax()

a_1
.from('.section_1_01', 4, {
    x: -100,
    y: -150,
    
})
.from('.section_1_02', 4, {
    x: -150,
    y: -250,
    delay: -4
})
.from('.section_1_03', 4, {
    x: -100,
    y: -80,
    delay: -4
})
.from('.section_1_04', 4, {
    x: -150,
    y: -100,
    delay: -4
})
.from('.section_1_05', 4, {
    x: -200,
    y: -80,
    delay: -4
})
.from('.section_1_06', 4, {
    x: -250,
    y: -100,
    delay: -4
})
.from('.section_1_07', 4, {
    x: -150,
    y: -50,
    delay: -4
})
.from('.section_1_08', 4, {
    x: -350,
    y: 50,
    delay: -4
})
.from('.section_1_09', 4, {
    x: -200,
    y: 100,
    delay: -4
})


const s_1 = scene('.first-section', 200, a_1)

//Second section
const a_2 = new TimelineMax();

a_2.to('.top .image-container', 4, {height: 0})

const s_2 = scene('.second-section', 100, a_2)


//Third section

const a_3 = new TimelineMax();

a_3
.to('.section_3_01', 4, {
    y: -250
})
.to('.section_3_02', 4, {
    y: -200,
    delay: -4
})
.to('.section_3_03', 4, {
    y: -100,
    delay: -4
})
.to('.section_3_04', 4, {
    y: 0,
    delay: -4
})
.to('.section_3_05', 4, {
    y: 150,
    delay: -4
}).to('.section_3_06', 4, {
    y: 250,
    delay: -4
})

const s_3 = scene('.third-section', 200, a_3)


//Final
const a_4 = new TimelineMax()

a_4
.from('.section_4_01', 4, {
    autoAlpha: 0
})
.from('.section_4_02', 4, {
    autoAlpha: 0
})
.from('.section_4_03', 4, {
    autoAlpha: 0
})
.from('.section_4_04', 4, {
    autoAlpha: 0
})

const s_4 = scene('.forth-section', 200, a_4)










