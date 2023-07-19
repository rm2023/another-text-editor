const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt display
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button or take any other desired action
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button or take any other desired action
    butInstall.style.display = 'none';
    // Log the user's choice
    console.log('User choice:', result.outcome);
  }
});

window.addEventListener('appinstalled', (event) => {
  // The app has been successfully installed
  // Perform any post-installation actions
  console.log('App installed');
});