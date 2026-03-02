import SectionHeader from "./SectionHeader";
import BentoCard from "./BentoCard";

export default function ContextSection() {
  return (
    <section id="leefwereld" className="hub-section">
      <SectionHeader
        number="03"
        title="De Leefwereld"
        subtitle="Het dagelijks kader waarin Anna functioneert: wonen, werken en cultuur."
      />

      <div className="hub-bento">
        <BentoCard icon="🏠" iconBg="sage" title="Huisvesting" delay={0}>
          <p>
            Wekker om 05:30 voor de badkamer-rij. Woont met 5 anderen. Muren zo
            dun dat je een lepel hoort vallen. Privacy via een gordijn voor haar
            bed.
          </p>
          <p>De woonruimte is wettelijk gekoppeld aan haar werkcontract.</p>
        </BentoCard>

        <BentoCard icon="📦" iconBg="gold" title="De Werkvloer" delay={0.1}>
          <p>
            Fulltime in distributiecentrum Greenport Venlo. Werkt op
            veiligheidsschoenen. &lsquo;Pick-rates&rsquo; (targets) zijn continu
            zichtbaar op schermen; kleurveranderingen bij haar naam zorgen voor
            fysieke druk in haar buik.
          </p>
        </BentoCard>

        <BentoCard
          icon="❤️"
          iconBg="sage"
          title="Cultuur — Matka Polka"
          delay={0.2}
        >
          <p>
            Een diep, onzichtbaar verantwoordelijkheidsgevoel om haar familie in
            Polen financieel te ondersteunen (remittances). Zij komen op de
            eerste plaats.
          </p>
        </BentoCard>
      </div>
    </section>
  );
}
