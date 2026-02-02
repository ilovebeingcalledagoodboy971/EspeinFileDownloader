browser.runtime.onMessage.addListener((msg) => {
  if (msg.type === "DOWNLOAD_LINK" && msg.url) {
    browser.downloads.download({
      url: msg.url,
      saveAs: true
    }).catch(err => console.error("Erreur téléchargement :", err));
  }
});
