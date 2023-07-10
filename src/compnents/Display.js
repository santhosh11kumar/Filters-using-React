import Cards from "./Cards"
import React from "react";
import '../App.css';

function Display(props) {

    let cardsdata = props.cardsdata;
    let datatobeshown = props.cateogry

    function getcourse() {
        if (datatobeshown === "All") {

            let allcourse = [];

            // console.log(cardsdata)
            Object.values(cardsdata).forEach(array => {
                // console.log(array)
                array.forEach(arr => {
                    // console.log(arr)
                    allcourse.push(arr);
                })
            })
            return allcourse;
        }
        else {
            return cardsdata[datatobeshown]
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">

            {
                getcourse().map((course) => (
                    <Cards key={course.id} single_data={course}></Cards>
                ))
            }

        </div>
    );
}

export default Display; 