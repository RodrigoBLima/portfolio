export default function Contact() {
  return (
    <section
      className="bg-secondary text-black py-8 px-5 md:py-32"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <h2
          id="contact-heading"
          className="text-4xl font-bold mb-5 border-b-[5px] border-sky-600 pb-2"
        >
          Contato
        </h2>
      </div>

      <div className="container mx-auto">
        <p className="font-normal">
          No momento, estou aberto para uma vaga de Front End Developer em tempo
          integral. Se quiser discutir sobre isso, sinta-se à vontade para me
          enviar um e-mail ou me ligar.
        </p>

        <address className="not-italic mt-4">
          <p className="py-2">
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:vanderdigo837@outlook.com"
              className="underline focus:outline-none focus:ring-2 focus:ring-sky-600"
            >
              vanderdigo837@outlook.com
            </a>
          </p>
          <p>
            <strong>Celular:</strong>{" "}
            <a
              href="tel:+5511966452608"
              className="underline focus:outline-none focus:ring-2 focus:ring-sky-600"
            >
              +55 11 9 6645 2608
            </a>
          </p>
        </address>
      </div>
    </section>
  );
}
