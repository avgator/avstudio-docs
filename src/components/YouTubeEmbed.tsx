import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  height?: number; // Changed to number only
  customClass?: string; // Changed from className
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video player',
  height = 400,
  customClass = '',
}) => {
  return (
    <div 
      className={`video-container ${customClass}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%'
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
        }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default YouTubeEmbed;