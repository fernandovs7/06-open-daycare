import { Composer } from "@/app/_components/Composer";
import { FeedCard } from "@/app/_components/FeedCard";
import { Sidebar } from "@/app/_components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="h-screen w-full min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[760px] px-4 pt-6 pb-12 md:px-10 md:pt-[34px] md:pb-20">
          <header className="mb-6">
            <div className="mb-1 text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C]">
              GUARDERÍA · SALA SOLES
            </div>
            <h1 className="font-display m-0 text-[30px] font-semibold text-[#3F362E]">
              Buenas, Caro
            </h1>
            <p className="mt-[5px] mb-0 text-[14.5px] text-[#94887B]">
              12 niños · martes 17 jun
            </p>
          </header>

          <Composer />

          <div className="mb-3.5 flex items-center gap-3.5">
            <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D]">
              PUBLICADO HOY
            </span>
            <span className="h-px flex-1 bg-[#E7DAC8]" />
          </div>

          <div className="flex flex-col gap-4">
            <FeedCard
              title="Mateo"
              time="14:20"
              recipient="familia de Mateo"
              text="¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso."
              category="LOGRO"
              categoryBackground="#CFEBD8"
              categoryColor="#3E9B6C"
              identityBackground="#A9D9E8"
              identityColor="#1F7A93"
              reactionCount={3}
              commentCount={1}
              avatar="M"
            />
            <FeedCard
              title="Mateo"
              time="09:40"
              recipient="familia de Mateo"
              text="Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores."
              category="ACTIVIDAD"
              categoryBackground="#C7E7F1"
              categoryColor="#2E89A6"
              identityBackground="#A9D9E8"
              identityColor="#1F7A93"
              reactionCount={5}
              commentCount={2}
              photoLabel="Foto · pintando con témperas"
              avatar="M"
            />
            <FeedCard
              title="Anuncio general"
              time="07:50"
              recipient="toda la sala"
              text="El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua."
              category="ANUNCIO"
              categoryBackground="#CCD8F4"
              categoryColor="#4E72C8"
              identityBackground="#CCD8F4"
              identityColor="#4E72C8"
              reactionCount={8}
              commentCount={0}
              icon="announcement"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
