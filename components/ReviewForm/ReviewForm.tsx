'use client';
import { ReactNode, useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller} from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';
import { API } from '@/app/api';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): ReactNode => {

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async(formData: IReviewForm) => {
        const res = await fetch(API.review.createDemo, {
            method: 'POST',
            body: JSON.stringify({...formData, productId}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(res.ok){
            setIsSuccess(true);
            reset();
        } else {
            setError('Что-то пошло не так, попробуйте отправить отзыв позже');
        }
        return res.json();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
                {...props}>
                    <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})} 
                        placeholder='Имя'
                        error={errors.name}
                        tabIndex={isOpened ? 0 : -1}
                    />
                    <Input {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
                        placeholder='Заголовок' 
                        className={styles.title}
                        error={errors.title}
                        tabIndex={isOpened ? 0 : -1}
                    />
                    <div className={styles.rating}>
                        <span>Оценка:</span>
                        <Controller
                            control={control}
                            name='rating'
                            rules={{required: {value: true, message: 'Оставьте оценку'}}}
                            render={({field}) => (
                                <Rating
                                    isEditable
                                    numberOfStars={field.value}
                                    ref={field.ref}
                                    setRating={field.onChange}
                                    error={errors.rating}
                                    tabIndex={isOpened ? 0 : -1}
                                />
                            )}
                        />
                    </div>    
                    <TextArea 
                        {...register('description', {required: {value: true, message: 'Заполните текст отзыва'}})} 
                        placeholder='Текст отзыва' 
                        className={styles.description}
                        error={errors.description}
                        tabIndex={isOpened ? 0 : -1}
                    />
                    <div className={styles.submit}>
                        <Button appearance='primary' tabIndex={isOpened ? 0 : -1}>Отправить</Button>
                        <span className={styles.info}>* Перед публикацией отзыв проходит предварительную модерацию и проверку</span>
                    </div>          
                </div>
                {isSuccess && <div className={cn(styles.panel, styles.success)}>
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div>
                        Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>
                    <button className={styles.close} onClick={() => setIsSuccess(false)}>
                        <CloseIcon  />
                    </button>
                </div>}
                {error && <div className={cn(styles.panel, styles.error)}>
                    <div className={styles.errorTitle}>Что-то пошло не так, попробуйте отправить отзыв позже</div>
                    <button className={styles.close} onClick={() => setError(undefined)}>
                        <CloseIcon  />
                    </button>
                </div>}
        </form>
    );
};

ReviewForm.displayName = 'ReviewForm';
