import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    numberOfStars: number;
    isEditable?: boolean;
    setRating?: (numberOfStars: number) => void;
    error?: FieldError;
}
