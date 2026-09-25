type FeedCardIdentity =
  | { avatar: string; icon?: never }
  | { avatar?: never; icon: "announcement" };

type FeedCardProps = FeedCardIdentity & {
  title: string;
  time: string;
  recipient: string;
  text: string;
  category: string;
  categoryBackground: string;
  categoryColor: string;
  identityBackground: string;
  identityColor: string;
  reactionCount: number;
  commentCount: number;
  photoLabel?: string;
};

export function FeedCard({
  title,
  time,
  recipient,
  text,
  category,
  categoryBackground,
  categoryColor,
  identityBackground,
  identityColor,
  reactionCount,
  commentCount,
  photoLabel,
  avatar,
  icon,
}: FeedCardProps) {
  return (
    <article className="rounded-[20px] border border-[#ECE0D0] bg-[#FFFDF9] px-[22px] py-5 shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      <header className="mb-3.5 flex items-center gap-3">
        <div
          className="font-display flex size-11 shrink-0 items-center justify-center rounded-full text-[17px] font-semibold"
          style={{
            backgroundColor: identityBackground,
            color: identityColor,
          }}
        >
          {icon === "announcement" ? (
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
          ) : (
            avatar
          )}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-[16.5px] font-semibold text-[#3F362E]">
            {title}
          </h2>
          <div className="text-[12.5px] text-[#A89A8B]">
            {time} · publicado por vos
          </div>
        </div>
        <div
          className="flex items-center gap-[7px] rounded-full px-3 py-1.5"
          style={{ backgroundColor: categoryBackground }}
        >
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: categoryColor }}
          />
          <span
            className="text-xs font-extrabold tracking-[0.5px]"
            style={{ color: categoryColor }}
          >
            {category}
          </span>
        </div>
      </header>

      <div className="mb-2.5 text-[12.5px] text-[#A89A8B]">
        Para: {recipient}
      </div>
      <p className="m-0 text-[15.5px] leading-[1.55] text-[#4A4038]">
        {text}
      </p>

      {photoLabel ? (
        <div className="mt-3.5 flex h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-[#DBCDBA] bg-[#F4ECE1] text-[#B0A290]">
          <svg
            aria-hidden="true"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          <span className="text-[13.5px]">{photoLabel}</span>
        </div>
      ) : null}

      <footer className="mt-4 flex items-center gap-[18px] border-t border-[#F0E6D8] pt-3.5">
        <span className="flex items-center gap-[7px] text-sm font-bold text-[#E0654A]">
          <svg
            aria-hidden="true"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          {reactionCount}
        </span>
        <span className="flex items-center gap-[7px] text-sm font-bold text-[#94887B]">
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
          </svg>
          {commentCount}
        </span>
        <span className="flex-1" />
        <span className="text-sm font-extrabold text-[#C5503A]">Editar</span>
      </footer>
    </article>
  );
}
