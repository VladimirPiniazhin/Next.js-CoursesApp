import { Htag } from "@/components/Htag/Htag";

export default function NotFound() {
    return (
      <div className="error-container">
        <Htag tag="h1">Продукт не найден</Htag>
        <p>Такого продукта не существует в нашей базе данных</p>
      </div>
    );
  }