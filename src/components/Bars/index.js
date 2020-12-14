import React from 'react';
import './style.css';

const Bars = ({
    state_A,
    state_B,
    state_C,
    state_D,
    sorted,
    value,
    style,
    width,
    height
}) => {
    let className = 'Bars   ';

    if (sorted) {
        className += 'Bar_sorted';
    }

    if (state_D) {
        className += 'Bar_state_D';
    } else if (state_C) {
        className += 'Bar_state_C';
    } else if (state_B) {
        className += 'Bar_state_B';
    } else if (state_A) {
        className += 'Bar_state_A';
    }


    let barStyle = { ...style, width: '${width}%', height: '${height}%'};

    if (state_A || state_B || state_C || state_D) {
        barStyle['marginLeft'] = '${0.3 * width}%';
        barStyle['marginRight'] = '${0.3 * width}%';
    }

    return (
        <div style={barStyle} className={className}>
            <span className="Bar__Text">{value}</span>
        </div>
    );
};

export default Bars;