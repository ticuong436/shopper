import React from 'react'
import { useEffect } from 'react'
import { object } from 'yup'

export default function Text() {
    useEffect(() => {

        // var array = document.querySelector("#array").children //
        var children = document.querySelector("#object").children // lấy phần tử con
        var objectChildren = []
        // var ObjectParent = []
        for (var e = 0; e < children.length; e++) {
            let object1 = {
                "order": e,
                "type": children[e].tagName,
                "text": children[e].textContent ? children[e].textContent : delete "text"
            }
            objectChildren.push(object1)
        }
        // for (var i = 0; i < array.length; i++) {
        //     ObjectParent.push({ ...objectChildren }) // chuyển array objectChildren thành object
        // }
        console.log(objectChildren);
        // console.log(ObjectParent);
    }, [])
    return (
        <>
            <div id="array">
                <div id="object">
                    <h1 id="oder1">hello</h1>
                    <p id="oder2">noi dung</p>
                    <img id="youtubeimg" src="http://i1.ytimg.com/vi/VK4ah66jBvE/0.jpg" />
                </div>
                <div id="object">
                    <h1 id="oder1">hello</h1>
                    <p id="oder2">noi dung</p>
                    <img id="youtubeimg" src="http://i1.ytimg.com/vi/VK4ah66jBvE/0.jpg" />
                </div>
            </div>
        </>
    )
}
