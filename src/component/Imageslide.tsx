import { useState } from "react";
import ImageData from "./imageData"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

export default function ImageSlider(){
    const [current,setCurrent] = useState(0)
    const lengthImage = ImageData.length
    
    const previosSlide=()=>{
        if(current === 0){
            setCurrent(lengthImage-1)
        }else{
            setCurrent(current-1)
        }    }
    const nextSlide=()=>{
        if(current === lengthImage-1){
            setCurrent(0)
        }else{
            setCurrent(current+1)
        }
    }
    return(
        <section >
           <AiOutlineArrowLeft className="leftArrow" onClick={previosSlide}/>
           <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
           <div className="slider">
           {ImageData.map((data,index)=>{
                return(
                    <div className={index === current ? 'slide-active':'slide'} key={index}>
                        {index === current &&
                        (
                            <div>
                                <img src={data.image} alt={data.title} />
                                <p>{data.title}</p>
                            </div>
                        )}
                    </div>
                )
            })}
           </div>
            
        </section>
    )
}