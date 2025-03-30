import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = forwardRef(({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): ReactNode => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })} ref={ref} {...props} />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

TextArea.displayName = 'TextArea';
