import React from "react";

const PriceView = (props) => {
    return (
        <>
            <div className="bg-secondary font-Saira font-bold flex px-3 py-2 my-1 mx-2 rounded md:px-7 md:w-5/6">
                <div className="flex-1 text-white">
                    {props.local}
                </div>
                <div className="flex-1 text-primary text-end ">
                    ${props.price}
                </div>
            </div>

        </>
    )
}

export default PriceView