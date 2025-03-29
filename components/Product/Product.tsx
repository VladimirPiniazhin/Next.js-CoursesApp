'use client';
import { ReactNode, useState, useRef, forwardRef, ForwardedRef } from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';   
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion, AnimatePresence } from 'framer-motion';

export const Product = forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): ReactNode => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto',
            marginBottom: 20
        },
        hidden: {
            opacity: 0,
            height: 0,
            marginBottom: 0
        }
    }

    const scrollToReview = () => {
        setIsReviewOpened(!isReviewOpened);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        });
        reviewRef.current?.focus();
    }

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image 
                        src={product.image} 
                        alt={product.title} 
                        width={70} 
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}<span className={styles.month}>/мес</span></div>
                <div className={styles.rating}><Rating numberOfStars={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>Цена</div>
                <div className={styles.creditTitle}>Кредит</div>
                <div className={styles.rateTitle}><a href='#ref' onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.features}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.disadvTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button appearance='primary'>Узнать подробнее</Button>
                    <Button 
                        className={styles.reviewButton} 
                        appearance='ghost' 
                        arrow={isReviewOpened ? 'down' : 'right'}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >
                        Читать отзывы
                    </Button>
                </div>
            </Card>
            <AnimatePresence>
                {isReviewOpened && (
                    <motion.div 
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <Card 
                            color='blue' 
                            className={styles.reviews} 
                            ref={reviewRef}
                            tabIndex={isReviewOpened ? 0 : -1}
                        >
                            {product.reviews.map(r => (
                                <div key={r._id}>
                                    <Review review={r} />
                                    <Divider />
                                </div>
                            ))}
                            <ReviewForm productId={product._id} isOpened={isReviewOpened} />
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});
