"use client";

import { WashiTape, WashiSmall } from "./Decorations";

function StaticPolaroid({
  src,
  rotation = 0,
  className = "",
}: {
  src: string;
  rotation?: number;
  className?: string;
}) {
  return (
    <div
      className={`polaroid ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="polaroid-inner has-image">
        <img src={src} alt="" draggable={false} />
      </div>
    </div>
  );
}

function TitleDisplay({ title }: { title: string }) {
  return (
    <h2
      className="title-input"
      style={{
        whiteSpace: "normal",
        height: "auto",
        minHeight: "unset",
        margin: 0,
      }}
    >
      {title}
    </h2>
  );
}

function JournalDisplay({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`journal-block ${className}`}
      style={{
        overflow: "visible",
        height: "auto",
        minHeight: "unset",
        resize: "none",
        whiteSpace: "pre-wrap",
      }}
    >
      {text}
    </div>
  );
}

function Page1() {
  return (
    <div className="page-inner">
      <TitleDisplay title="Gevormd door de Aarde en de Keuken" />
      <div className="flex-1 relative mt-4">
        <div
          className="absolute"
          style={{ top: "3%", left: "0%", width: "48%" }}
        >
          <StaticPolaroid src="/book/7.png" rotation={-4} />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-6px",
              left: "20%",
              transform: "rotate(15deg)",
            }}
          />
        </div>
        <div
          className="absolute"
          style={{ top: "20%", right: "2%", width: "45%" }}
        >
          <StaticPolaroid src="/book/9.png" rotation={5} />
          <WashiSmall
            variant={1}
            style={{
              position: "absolute",
              top: "-5px",
              right: "20%",
              transform: "rotate(-8deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "2%", left: "5%", right: "5%" }}
        >
          <JournalDisplay text="In Polen leerde ik dat niets vanzelf gaat. Op het land was het ploeteren in de modder, aan de tafel was het precisiewerk met het deeg. Mijn handen vertellen het verhaal van mijn familie: we praten niet veel over gevoelens, we werken ze weg in de grond of in het eten." />
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="page-inner">
      <TitleDisplay title="Laatste Beloftes" />
      <div className="flex-1 relative mt-4">
        <div
          className="absolute"
          style={{ top: "5%", left: "10%", width: "80%" }}
        >
          <StaticPolaroid src="/book/6.png" rotation={2} />
          <WashiTape
            variant={1}
            style={{
              position: "absolute",
              top: "-10px",
              left: "25%",
              width: "50%",
              transform: "rotate(-2deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "5%", left: "5%", right: "5%" }}
        >
          <JournalDisplay text="Magda en ik. We dachten dat we de wereld aankonden, zolang we maar samen waren. Deze foto was een van de laatste momenten dat 'thuis' nog gewoon een plek was waar ik altijd zou blijven. Nu is het een herinnering die ik in mijn tas heb meegenomen." />
        </div>
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="page-inner">
      <TitleDisplay title="Scannen voor een Toekomst" />
      <div className="flex-1 relative mt-4">
        <div
          className="absolute"
          style={{ top: "0%", right: "5%", width: "45%" }}
        >
          <StaticPolaroid src="/book/11.png" rotation={4} />
          <WashiSmall
            variant={2}
            style={{
              position: "absolute",
              top: "-4px",
              left: "30%",
              transform: "rotate(10deg)",
            }}
          />
        </div>
        <div
          className="absolute"
          style={{ top: "15%", left: "2%", width: "50%" }}
        >
          <StaticPolaroid src="/book/13.png" rotation={-3} />
          <WashiSmall
            variant={3}
            style={{
              position: "absolute",
              top: "-5px",
              right: "20%",
              transform: "rotate(-10deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "0%", left: "5%", right: "5%" }}
        >
          <JournalDisplay text="De aankomst was ontnuchterend. Twee tassen en een vreemde stad. In het distributiecentrum telt je verleden niet; daar telt alleen je snelheid en je scanner. Het blauwe jasje voelt soms als een harnas. Het is zwaar, het is grijs, maar het is mijn ticket naar iets beters." />
        </div>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="page-inner">
      <TitleDisplay title="Tussen de Gordijnen" />
      <div className="flex-1 relative mt-4">
        <div
          className="absolute"
          style={{ top: "0%", left: "2%", width: "52%" }}
        >
          <StaticPolaroid src="/book/14.png" rotation={-2} />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-6px",
              right: "20%",
              transform: "rotate(5deg)",
            }}
          />
        </div>
        <div
          className="absolute"
          style={{ top: "15%", right: "2%", width: "48%" }}
        >
          <StaticPolaroid src="/book/15.png" rotation={3} />
          <WashiSmall
            variant={1}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "-5px",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "0%", left: "5%", right: "5%" }}
        >
          <JournalDisplay text="Mijn leven speelt zich nu af op een paar vierkante meter. Een gedeelde keuken waar je altijd moet wachten en een bed dat met een gordijn is afgeschermd. Het is sober, maar als ik 's avonds mijn ring afdoe en op dat nachtkastje leg, weet ik dat ik dit voor mezelf doe. Stap voor stap." />
        </div>
      </div>
    </div>
  );
}

export default function PageContent({ pageIndex }: { pageIndex: number }) {
  if (pageIndex === 0) return <Page1 />;
  if (pageIndex === 1) return <Page2 />;
  if (pageIndex === 2) return <Page3 />;
  if (pageIndex === 3) return <Page4 />;
  return null;
}
