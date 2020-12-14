import React from 'react';
import './style.css';
import Bars from '../Bars';

const Sort = ({
    numbers,
    maxNum,
    comparingIndices,
    comparedIndices,
    sortedIndices
}) => {
    return (
        <div className="Sort">
            {getBarList(
                numbers,
                maxNum,
                comparingIndices,
                comparedIndices,
                sortedIndices
            )}
        </div>
    );
};

const getBarList = (
    numbers,
    maxNum,
    comparingIndices,
    comparedIndices,
    sortedIndices
) => {
    return numbers.map((num, index) => {
    let width = 100;
    let height = (num / maxNum) * 100;
    let comparing = comparingIndices.includes(index);
    let compared = comparedIndices.includes(index);
    let sorted = sortedIndices.includes(index);

    return (
        <Bars
        value={num}
        sorted={sorted}
        key={`${index}_${num}`}
        width={width}
        height={height}
        comparing={comparing}
        compared={compared}
        sorted={sorted}
        />
    );
})};

export default Sort;