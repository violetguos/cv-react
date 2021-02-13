import React from "react";

const InfoResult = (props) => {
    const items = props;
    console.log(items)
    return (
        <ul>
            {items.map((item)=>{
                return             <li>{item}</li>;

            })
            }


            
        </ul>
    )
}
export default InfoResult;