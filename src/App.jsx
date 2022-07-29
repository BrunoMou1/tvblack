import { Suspense } from "react";
import { Contato } from "./components/contato";
import { Download } from "./components/download";
import { Footer } from "./components/footer";
import { Funcionalities } from "./components/functionalities";
import { Header } from "./components/header/index";
import { Instrucoes } from "./components/instruçoes";
import { Perguntas } from "./components/perguntas";
import { Planos } from "./components/planos";
import { Tests } from "./components/tests";

export function App() {
  return (
    <>
      <Header />
      <Download />
      <Funcionalities />
      <Tests />
      <Planos />
      <Instrucoes />
      <Suspense fallback={<div>Loading...</div>}>
        <Perguntas />
      </Suspense>
      <Contato />
      <Footer />
    </>
  );
}
