/* eslint-disable */
'use client';

import { ForwardedRef, forwardRef, ReactNode, useState, useEffect, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg'
import cn from 'classnames'

export const Rating = forwardRef(({ isEditable = false, numberOfStars, setRating, error, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): ReactNode => {

    const [ratingArray, setRatingArray] = useState<ReactNode[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(numberOfStars);
    }, [numberOfStars]);

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r:ReactNode, i: number) =>{
            return (
                <span
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating, 
                        [styles.editable]: isEditable     
                    })}
                    onMouseEnter={()=> changeDisplay(i+1)} 
                    onMouseLeave={()=> changeDisplay(numberOfStars)} 
                    onClick={() => onClick(i+1)}
                >


                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i+1, e)}
                    />

                </span>
            );
        });
        setRatingArray(updateArray);
    };

    const changeDisplay=(i: number)=> {
        if(!isEditable){
            return;
        }
        constructRating(i);
    } 

    const onClick = (i: number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if(e.code !='Space' || !setRating){
            return;                
        }
        setRating(i);
    }

    return (
        <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error
        })} >
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
