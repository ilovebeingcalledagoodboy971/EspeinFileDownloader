const hoverBtn = document.createElement("button");
hoverBtn.textContent = "⬇ download";
hoverBtn.style.position = "absolute";
hoverBtn.style.zIndex = "999999";
hoverBtn.style.display = "none";
hoverBtn.style.padding = "4px 6px";
hoverBtn.style.fontSize = "12px";
hoverBtn.style.color = "#27B0F5"
hoverBtn.style.cursor = "pointer";
hoverBtn.style.borderRadius = "4px";
document.body.appendChild(hoverBtn);

let currentLink = null;

function showButton(link) {
  currentLink = link;
  const rect = link.getBoundingClientRect();
  hoverBtn.style.left = `${window.scrollX + rect.right + 5}px`;
  hoverBtn.style.top = `${window.scrollY + rect.top}px`;
  hoverBtn.style.display = "block";
}

document.addEventListener("mouseover", e => {
  const link = e.target.closest("a");
  if (!link) return;

  showButton(link);
});

hoverBtn.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  if (currentLink) {
    browser.runtime.sendMessage({
      type: "DOWNLOAD_LINK",
      url: currentLink.href
    });
  }
});
