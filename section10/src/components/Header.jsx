/* eslint-disable react-refresh/only-export-components */
import "./Header.css";
import {memo} from 'react';

function Header() {
    return(
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

const memoizedHeader = memo(Header);

export default memoizedHeader;