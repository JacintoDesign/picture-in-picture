const videoElement = document.getElementById('videoElement');
const button = document.getElementById('pipButton');

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Button Starts Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// Prompt To Select Media Stream On Load, Playing Streaming Video
navigator.mediaDevices.getDisplayMedia().then((mediaStream) => {
  videoElement.srcObject = mediaStream;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };
});
