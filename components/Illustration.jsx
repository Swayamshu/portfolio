import React from 'react';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Illustration = () => {
    const { setDesignSelected, selectedDesign, setSelectedDesign } = useStateContext();

    return (
        <div
            className="illustration"
            onClick={() => {
                setDesignSelected(false);
                setSelectedDesign(null);
            }}
        >
            <img
                className="preview-design"
                src={urlFor(selectedDesign.image)}
                alt={selectedDesign.name}
            />
        </div>
    )
}

export default Illustration
