function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

{/*As export default palavras-chave especificam o componente principal do arquivo*/}
export default function App() {
  return <Greeting name="world" />
}

{/*https://javascript.info/import-export*/}