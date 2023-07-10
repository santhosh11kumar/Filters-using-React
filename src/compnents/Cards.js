import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc"

import '../App.css';
import { toast } from "react-toastify";

const Cards = (props) => {
    let data = props.single_data
    let description_short = data.description.substr(0, 100) + "...."

    const [click, setClick] = useState(false)
    function clickhandler() {
        setClick(!click)

        if (!click) {
            toast.success("Like added")
        }
        else {
            toast.warning("Like removed ")
        }
    }

    return (
        <div className="card bg-opacity-80 w-[300px] bg-slate-900 rounded-md overflow-hidden">
            <div className='relative '>
                <img src={data.image.url}></img>
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickhandler}>
                        {click ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
                    </button>
                </div>

            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6 text-lg'>{data.title}</p>
                <p className='mt-2 text-white text-xl'>{description_short}</p>
            </div>
        </div>
    );

};

export default Cards;