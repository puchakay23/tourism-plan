import { useState } from "react";

function Card({id,image,info,name,price,removeTour}){
    const [readmore,setReadmore] = useState(false);
    const description = readmore? info:`${info.substring(0,185)}...`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tourInfo">
                <div className="tour-details">
                    <h4 className="tourPrice">{price}</h4>
                    <p className="tourName">{name}</p>
                </div>

                <div className="description">
                    {description}
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore? `show less`:`read more`}
                    </span>
                </div>
            </div>

            <button className="btnRed" onClick={()=>removeTour(id)}>
                Not Interested
            </button>

        </div>
    );
}

export default Card;