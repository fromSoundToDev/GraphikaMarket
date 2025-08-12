import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <DotLottieReact
        src="https://lottie.host/60a1116b-13d0-42d3-bbc7-1137ac292149/FHrUQeFXQM.lottie"
        loop
        autoplay
      />
    </div>
  );
}
