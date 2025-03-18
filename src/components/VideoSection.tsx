'use client';

const VideoSection = () => {
  return (
    <div className="relative w-full  flex items-center justify-center">
      <div className="absolute inset-0 z-0" />
      {/* Contenedor del video */}
      <div className="relative z-10 w-full max-w-7xl px-1 py-10  flex items-center justify-center  ">
        <div className="aspect-video w-full h-[80vh] ">
          <iframe
            className="w-full rounded-xl shadow-2xl h-full"
            src="https://www.youtube.com/embed/_tA5cinv0U8"
            title="Video de Sercopia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;