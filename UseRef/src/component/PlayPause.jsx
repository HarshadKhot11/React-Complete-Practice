import { useRef } from "react";
 
export function VideoPlayer() {
  const videoRef = useRef(null);
 
  function handlePlay() { videoRef.current.play(); }
  function handlePause() { videoRef.current.pause(); }
 
  return (
	<div>
  	<video ref={videoRef} src="/movie.mp4" width="400" />
  	<button onClick={handlePlay}>Play</button>
  	<button onClick={handlePause}>Pause</button>
	</div>
  );
}
