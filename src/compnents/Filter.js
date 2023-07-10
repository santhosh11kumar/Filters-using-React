import React, { useEffect, useState } from "react";
import '../App.css';


function Filter(props) {
    let newfilterdata = props.filterdata;
    let handler = props.setFilter_
    function filterthedata(title) {
        handler(title)
    }


    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
            {
                newfilterdata.map((single_data) => (
                    <button onClick={() => filterthedata(single_data.title)} className="filter_btns text-lg px-3 py-2 rounded-md font-medium text-white bg-slate-900  hover:bg-opacity-20 transition-all duration-200 active:border-[4px]
                    ">
                        {single_data.title}
                    </button>
                ))
            }
        </div>
    )
};

export default Filter;