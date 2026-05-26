const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");
const modal = document.querySelector("[data-modal-backdrop]");
const openWechat = document.querySelector("[data-open-wechat]");
const closeWechat = document.querySelector("[data-close-wechat]");
const phoneModal = document.querySelector("[data-phone-backdrop]");
const openPhone = document.querySelector("[data-open-phone]");
const closePhone = document.querySelector("[data-close-phone]");
function activatePanel(panelName) {
  tabs.forEach((tab) => {
    const active = tab.dataset.tab === panelName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  panels.forEach((panel) => {
    const active = panel.dataset.panel === panelName;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activatePanel(tab.dataset.tab));
});

openWechat.addEventListener("click", () => {
  modal.hidden = false;
  closeWechat.focus();
});

function closeWechatModal() {
  modal.hidden = true;
  openWechat.focus();
}

closeWechat.addEventListener("click", closeWechatModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeWechatModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeWechatModal();
  }
});

openPhone.addEventListener("click", () => {
  phoneModal.hidden = false;
  closePhone.focus();
});

function closePhoneModal() {
  phoneModal.hidden = true;
  openPhone.focus();
}

closePhone.addEventListener("click", closePhoneModal);
phoneModal.addEventListener("click", (event) => {
  if (event.target === phoneModal) {
    closePhoneModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !phoneModal.hidden) {
    closePhoneModal();
  }
});
