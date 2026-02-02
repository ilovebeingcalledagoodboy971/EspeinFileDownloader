document.getElementById("btn").addEventListener("click", async () => {
  let [tab] = await browser.tabs.query({ active: true, currentWindow: true });

  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  });
});
