import { func3 } from "./card.js"
import { func } from "./image.js"
import { func2 } from "./info.js"

let sectionOne = document.getElementById("sectionOne")

let Obj1 ={
    title: "Hinata Shoyo",
    desc: " I would be complex, I would be coolThey'd say I played the field before I found someone to commit toAnd that would be okay for me to doEvery conquest I had made would make me more of a boss to you",
    btn:"Contact Me",
    myImg: "img.jpg"
}

let sectionTwo = document.getElementById("sectionTwo")

let Obj2={
    title2: "Project Completed",
    img1: "img.jpg",
    desc1: "I would be complex, I would be coolThey'd say I played the field before I found someone to commit toAnd that would be okay for me to doEvery conquest I had made would make me more of a boss to you.",
    btn1: "LearnMore",
    img2: "img.jpg",
    desc2: "I would be complex, I would be coolThey'd say I played the field before I found someone to commit toAnd that would be okay for me to doEvery conquest I had made would make me more of a boss to you.",
    btn2: "Learn More",
    img3: "img.jpg",
    desc3: "I would be complex, I would be coolThey'd say I played the field before I found someone to commit toAnd that would be okay for me to doEvery conquest I had made would make me more of a boss to you",
    btn3: "Learn More"
}

let {title, desc, btn, myImg} = Obj1
sectionOne.append(func2(title,desc,btn))
sectionOne.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
sectionTwo.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3))
