// feito para reconhecer arquivos .png na hora do import
declare module '*.png' {
  const content: any;
  export default content;
}