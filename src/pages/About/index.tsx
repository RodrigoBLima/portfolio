import AboutImg from "../../assets/about-img.webp";

const aboutParagraphs = [
  "Olá, meu nome é Rodrigo Barbosa Lima, mas todos me chamam de Barbosa. Sou um Desenvolvedor Frontend apaixonado por criar interfaces modernas, acessíveis e otimizadas para a melhor experiência do usuário.",
  "Tenho experiência sólida com React.js, incluindo hooks customizados, gerenciamento de estado com Redux e Context API, otimização de performance (LCP, CLS, lazy loading, memorização), além de técnicas avançadas como Server-Side Rendering (SSR) e Static Site Generation (SSG).",
  "No backend, trabalho com NestJS e Django Rest Framework para construção de APIs escaláveis e performáticas. Também tenho experiência com integração de APIs RESTful e práticas de segurança.",
  "Automatizo processos utilizando GitHub Actions, GitLab CI/CD e Jenkins, além de implementar fluxos de deploy contínuos e seguros, garantindo entregas ágeis, escaláveis e de alta confiabilidade.",
  "Tenho expertise em testes automatizados com Jest, Cypress e TDD, garantindo qualidade e confiabilidade no código. Também monitoro aplicações com DataDog, Dynatrace e Lighthouse para otimização contínua.",
  "Estou sempre estudando e aprimorando meus conhecimentos em testes automatizados, Kubernetes, comunicação e liderança.",
];

export default function About() {
  return (
    <section className="bg-secondary text-black py-8 px-5 md:py-32" aria-labelledby="about-heading"
      id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div>
          <h2 id="about-heading"
            className="w-full text-4xl font-bold mb-5 border-b-[5px] border-sky-600 pb-2">
            Sobre Mim
          </h2>

          {aboutParagraphs.map((text, index) => (
            <p key={index} className="pb-5 text-justify">
              {text}
            </p>
          ))}
        </div>

        <figure>
          <img
            src={AboutImg}
            alt="Ilustração de programação"
            className="lgw-[80%] md:ml-auto"
          />
          <figcaption className="sr-only">
            Ilustração representando programação
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
