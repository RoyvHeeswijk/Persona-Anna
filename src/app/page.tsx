import Book from "@/components/Book";

export default function Home() {
  return (
    <main className="min-h-screen wood-table flex items-center justify-center relative">
      {/* Table ambiance items */}
      <div className="table-items">
        <div className="string-lights" />
        <div className="table-pen" />
        <div className="table-pen-2" />
        <div className="table-tape-rolls">
          <div className="tape-roll" style={{ borderColor: '#E88CA5' }} />
          <div className="tape-roll" style={{ borderColor: '#5CB8B2' }} />
          <div className="tape-roll" style={{ borderColor: '#F0D780' }} />
          <div className="tape-roll" style={{ borderColor: '#A5D6A7' }} />
          <div className="tape-roll" style={{ borderColor: '#C9A0DC' }} />
        </div>
      </div>
      <Book />
    </main>
  );
}
