import { Composer } from "@/app/_components/Composer";
import { FeedCard } from "@/app/_components/FeedCard";
import { Sidebar } from "@/app/_components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="h-screen min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[760px] px-10 pt-[34px] pb-20">
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
          </div>
        </div>
      </main>
    </div>
  );
}
