import { whatsappService } from "../services/whatsappService";

interface ButtonProps {
    nameProduct: string | undefined;
    styles: string;
    textButton: string;
}

export const Button = ({ nameProduct, styles, textButton }: ButtonProps) => {
  return (
    <button className={styles} onClick={() => whatsappService(nameProduct)}>
      {textButton}
    </button>
  );
};
