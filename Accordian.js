import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css';

function Accordion({ items }) {
    const [display, setDisplay] = useState(null);

    const handleClick = (item) => {
        setDisplay(display === item ? null : item); 
    };

    return (
        <div className='accordian'>
            {items.map((item, index) => (
                <div key={index} className='accordion-item'>
                    <button onClick={() => handleClick(item)} className='accordion-title'>
                        {item.title}
                    </button>
                    <span>
                        {display === item ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                    {display === item && (
                        <div className='accordion-content'>
                            <p >{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
