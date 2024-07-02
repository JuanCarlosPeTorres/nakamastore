export const whatsappService = (message: string | undefined) => {
  const text = `Hola, me gustaria saber si puedes ayudarme con mi compra de ${message}`;

  const whatsappUrl = `https://wa.me/992898298?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappUrl, "_blank");
};
