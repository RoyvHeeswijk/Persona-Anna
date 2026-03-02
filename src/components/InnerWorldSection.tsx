import SectionHeader from "./SectionHeader";
import BentoCard from "./BentoCard";

export default function InnerWorldSection() {
  return (
    <section id="binnenwereld-extra" className="hub-section">
      <SectionHeader
        number="03"
        title="De Binnenwereld"
        subtitle="Quirks, gewoontes en de kleine dingen die Anna's dag kleur geven."
      />

      <div className="hub-bento">
        <BentoCard icon="🕯️" iconBg="gold" title="Kleine Rituelen" delay={0}>
          <p>
            Ze praat zachtjes tegen haar kruidenplantjes. Ze verzamelt steentjes
            en blaadjes tijdens wandelingen als herinneringen. Ze friemelt aan
            haar ring (cadeau van haar moeder) als ze zenuwachtig is.
          </p>
        </BentoCard>

        <BentoCard icon="🎨" iconBg="sage" title="Hobby's" delay={0.1}>
          <p>
            Plantjes verzorgen op de vensterbank, wandelen langs het kanaal in
            Venlo, en Poolse kookvideo&apos;s kijken. Ze kijkt &lsquo;Heel
            Holland Bakt&rsquo; met ondertiteling om de taal te leren.
          </p>
        </BentoCard>

        <BentoCard icon="💛" iconBg="gold" title="Favorieten" delay={0.2}>
          <p>
            Houdt van de lente, de geur van aarde na regen, en rustige Poolse
            popmuziek. Haar lievelingseten is pierogi met aardappelen of zupa
            ogórkowa (augurkensoep).
          </p>
        </BentoCard>
      </div>
    </section>
  );
}
