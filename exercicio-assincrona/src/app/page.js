import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
         <form action="">
          <h2>Address</h2>
          <input type="text" id="cep" placeholder="CEP">
          <div id="cepError" class="hidden">O CEP informado é invalido.</div>
          <input type="text" id="street" placeholder="Rua">
          <input type="text" id="number" placeholder="Número">
          <input type="text" id="neighborhood" placeholder="Bairro">
          <input type="text" id="state" placeholder="Estado">
          <input type="text" id="city" placeholder="Cidade">
        </form>
      </main>
    </div>
  );
}
