import React from 'react';
import "./toast.css";

export default function Toast(props) {

    return (
        <div className={`toast `+ props.type} onClick={props.onClick}>
            <div className="toastcheck">
                <div className="css-animslide"></div>
                <svg aria-hidden="true" height="14" width="14" viewBox="0 0 12 16" className="error-svg">
                    <path fill="#FFF" fillRule="evenodd" d="M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z"></path>
                </svg>
                <svg aria-hidden="true" height="14" width="14" viewBox="0 0 12 16" className="success-svg">
                    <path fill="#FFF" fillRule="evenodd" d="M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"></path>
                </svg>
            </div>
            <div className="taoast-content">{props.content}</div>
            <div role="button" className="toast__dismiss">
                <svg aria-hidden="true" height="16" width="14" viewBox="0 0 14 16">
                    <path fillRule="evenodd" d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"></path>
                </svg>
            </div>
        </div>
    )
}
