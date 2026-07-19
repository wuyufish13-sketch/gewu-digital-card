import qrImageUrl from "./assets/wuyu-wechat-qr.png";

const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");
const modal = document.querySelector("[data-modal-backdrop]");
const openWechat = document.querySelector("[data-open-wechat]");
const closeWechat = document.querySelector("[data-close-wechat]");
const qrImage = document.querySelector("[data-qr-src]");
const phoneModal = document.querySelector("[data-phone-backdrop]");
const openPhone = document.querySelector("[data-open-phone]");
const closePhone = document.querySelector("[data-close-phone]");
const shareButton = document.querySelector("[data-share-card]");
const toast = document.querySelector("[data-toast]");

const shareUrl = "https://wuyufish13-sketch.github.io/gewu-digital-card/?v=card-20260719";
const shareData = {
  title: "吴瑜",
  text: "格物科技有限公司｜公司创始人",
  url: shareUrl,
};

let toastTimer;

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

function showToast(message) {
  if (!toast) {
    return;
  }

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.top = "-999px";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }
    }

    try {
      await copyText(shareUrl);
      showToast("分享链接已复制");
    } catch {
      showToast("复制失败，请手动复制链接");
    }
  });
}

function loadQrImage() {
  if (!qrImage.hasAttribute("src")) {
    qrImage.src = qrImageUrl;
  }
}

window.addEventListener("load", () => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadQrImage, { timeout: 1500 });
    return;
  }

  window.setTimeout(loadQrImage, 600);
});

openWechat.addEventListener("click", () => {
  loadQrImage();
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
