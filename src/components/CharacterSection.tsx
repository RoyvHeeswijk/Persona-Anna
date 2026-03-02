import SectionHeader from "./SectionHeader";
import BentoCard from "./BentoCard";

export default function CharacterSection() {
  return (
    <div className="hub-section--tinted">
      <section id="binnenwereld" className="hub-section">
        <SectionHeader
          number="02"
          title="De Binnenwereld"
          subtitle="Karakter, dromen en de kleine dingen die Anna's dag kleur geven."
        />

        <div className="hub-bento">
          <BentoCard icon="🌿" iconBg="sage" title="Details" delay={0}>
            <p>
              Ze praat zachtjes tegen haar kruidenplantjes op de vensterbank. Ze
              friemelt aan haar ring (cadeau van haar moeder) als ze zenuwachtig
              is. Tijdens wandelingen verzamelt ze steentjes en blaadjes als
              herinneringen.
            </p>
          </BentoCard>

          <BentoCard icon="📺" iconBg="gold" title="Hobby's" delay={0.1}>
            <p>
              Kijkt &lsquo;Heel Holland Bakt&rsquo; met ondertiteling om de taal
              te leren. Kookt &lsquo;zupa ogórkowa&rsquo; (augurkensoep) voor
              haar huisgenoten.
            </p>
          </BentoCard>

          <BentoCard icon="✨" iconBg="sage" title="Dromen" delay={0.2}>
            <p>
              Een eigen kleine flat met een balkon vol plantjes. Nederlands
              spreken zonder schaamte. Groeien van &ldquo;overleven&rdquo; naar
              &ldquo;echt leven&rdquo;.
            </p>
          </BentoCard>

          <BentoCard
            icon="📱"
            iconBg="gold"
            title="Gewoontes"
            span2
            delay={0.25}
          >
            <p>
              Bewaart elk bonnetje, lijstje en elke foto op haar telefoon als
              een digitaal dagboek voor controle en overzicht.
            </p>
          </BentoCard>
        </div>
      </section>
    </div>
  );
}
