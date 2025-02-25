import HeroImg from "../../assets/hero-img.png";

export default function Hero() {
  return (
    <section className="bg-sky-100 text-black pt-20 py-8 px-5 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="pt-5 pb-5 md:pb-0">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Olá, <br /> Eu sou <span className="text-accent">Rodrigo</span>.<br />
            Desenvolvedor Frontend
          </h1>

          <p className="py-5">
            Tenho experiências em JavaScript, TypeScript, React.js, Next.js, Node.js, Redux, Jest, Cypress, Docker, AWS, and GitHub Actions.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={HeroImg}
            alt="Ilustração de um desenvolvedor programando"
            className="w-[80%] max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
