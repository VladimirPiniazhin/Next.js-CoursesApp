/* eslint-disable */
'use client';

import { ForwardedRef, forwardRef, ReactNode, useState, useEffect, KeyboardEvent, useRef } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg'
import cn from 'classnames'

export const Rating = forwardRef(({ isEditable = false, numberOfStars, setRating, error, tabIndex, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): ReactNode => {

    const [ratingArray, setRatingArray] = useState<ReactNode[]>(new Array(5).fill(<></>));

    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);


    useEffect(() => {
        constructRating(numberOfStars);
    }, [numberOfStars, tabIndex]);


    const computedFocus = (r: number, i: number): number => {
        if(!isEditable){
            return -1;
        }
        if(!r && i == 0){
            return tabIndex ?? 0;
        }
        if(r == i + 1){
            return tabIndex ?? 0;
        }
        return -1;
    }

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
                    tabIndex={computedFocus(numberOfStars, i)}
                    onKeyDown={handleKey}
                    ref={r => { if (ratingArrayRef.current) ratingArrayRef.current[i] = r; }}
                >


                    <StarIcon 
                        
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

    const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if(!isEditable || !setRating){
            return;
        }
        if(e.code =='ArrowRight' || e.code =='ArrowUp'){
            if(!numberOfStars){
                setRating(1);
            } else {
                e.preventDefault();
                setRating(numberOfStars < 5 ? numberOfStars + 1 : 5);
            }
            ratingArrayRef.current[numberOfStars]?.focus();
        }

        if(e.code =='ArrowLeft' || e.code =='ArrowDown'){
            if(!numberOfStars){ 
                setRating(1);
            } else {
                e.preventDefault();
                setRating(numberOfStars > 1 ? numberOfStars - 1 : 1);
            }
            ratingArrayRef.current[numberOfStars - 2]?.focus();
        }
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
