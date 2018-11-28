import React from 'react';

export const ReviewItem = ({review}) => {
    const { text } = review;
    return (<div className="review-item">{text}</div>);
}