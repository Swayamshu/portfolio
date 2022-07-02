import React from 'react'
import { urlFor } from '../lib/client';
import VD from "../public/VectorDesign.svg"
import { useStateContext } from '../context/StateContext';

const Design = ({ designs }) => {
    const { designsSection, setDesignSelected, setSelectedDesign } = useStateContext();
    
    designs.sort((a, b) => { return a.order - b.order });
    
    return (
        <div ref={designsSection}>
            <div className="heading">
                <div className="center-content">
                    <div className="titles">DESIGNS</div>
                    <div className="sub-titles">check out my artworks.</div>
                </div>
                <div className="crop-heading">
                    <VD className="vector"/>
                </div>
            </div>

            <div className="design-info">       
                {designs.map((design, i) => (
                    <div
                        key={i}
                        className="design-image-container"
                    >
                        <img
                            src={urlFor(design.image)}
                            alt="image"
                            className="design-image"
                            onClick={() => {
                                setDesignSelected(true);
                                setSelectedDesign(design);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Design
