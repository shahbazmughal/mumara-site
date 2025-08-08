import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import './floader.css';

export default function Timer(props) {

    const [seconds, setSeconds] = React.useState(5);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds(0);
            navigate(props.url);
          }
    }, [seconds]);

    return (
    <div className="counterblock">
        <div id="countdown">{seconds}</div>
        <div className="counter-loading"></div>
    </div>
    )

}