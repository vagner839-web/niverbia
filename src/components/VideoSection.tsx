import { YOUTUBE_VIDEOS } from "@/lib/constants";

interface VideoCardProps {
  title: string;
  description: string;
  videoId: string;
  icon: string;
}

function VideoCard({ title, description, videoId, icon }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-4 group">
      {/* Video embed or placeholder */}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-bia-blush/60 bg-gradient-to-br from-bia-blush to-bia-rose/20">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-bia-deep/40">
            <div className="w-14 h-14 rounded-full bg-bia-rose/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-bia-rose/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide">Em breve</span>
          </div>
        )}
      </div>

      {/* Card info */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h3 className="text-bia-deep font-bold text-lg">{title}</h3>
        </div>
        <p className="text-bia-deep/50 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const videos: VideoCardProps[] = [
    {
      title: "Convite",
      description: "Uma mensagem especial da Bia para você",
      videoId: YOUTUBE_VIDEOS.invitation,
      icon: "💌",
    },
    {
      title: "O Local",
      description: "Saiba onde será a festa e como chegar",
      videoId: YOUTUBE_VIDEOS.location,
      icon: "📍",
    },
    {
      title: "Lista de Presentes",
      description: "Tudo que a Bia adoraria receber",
      videoId: YOUTUBE_VIDEOS.giftList,
      icon: "🎁",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 mb-14">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-bia-rose/30" />
            <span className="text-2xl">🎬</span>
            <div className="flex-1 h-px bg-bia-rose/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-bia-deep text-center">
            Assista aos Vídeos
          </h2>
          <p className="text-bia-deep/50 text-center max-w-md">
            A Bia preparou mensagens especiais para você. Assista e saiba todos os detalhes da festa.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
