import React from 'react';
import {RiArrowDropUpLine, RiArrowDropDownLine} from "react-icons/ri";

const SortingIcon: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "1.5rem",
                color: "var(--blue-light)",
            }}
        >
            <RiArrowDropUpLine style={{marginBottom: "-0.4rem"}}/>
            <RiArrowDropDownLine style={{marginTop: "-0.4rem"}}/>
        </div>
    );
}

export default SortingIcon;
