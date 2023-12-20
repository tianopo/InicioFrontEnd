// ############ Adapta o título de uma label para o Input em qualquer língua
export const labelFormatada = (texto: string) => {
  return texto
    .normalize("NFD") // converte para caracteres não acentuados
    .replace(/[\u0300-\u036f]/g, "") // substitui todos os caracteres que não foram retirados a acentuação nessa faixa do unicode
    .replace(/[^\w\s]/g, "") // feito em toda string letras números e espaços em branco
    .split(" ")
    .map((palavra, index) =>
      index === 0
        ? palavra.toLocaleLowerCase()
        : palavra.charAt(0).toUpperCase() + palavra.slice(1),
    )
    .join("")
    .trim();
};
