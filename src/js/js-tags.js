class TagsGroup {
  constructor() {
    this.tagsList = document.querySelector(".js-tags");
    this.activeTag = document.querySelector(".js-tags .active");

    this.tagsList.addEventListener("click", this.changeActiveTag.bind(this));
  }

  changeActiveTag(event) {
    const { target: currentTagEl } = event;

    if (currentTagEl.nodeName !== "BUTTON") {
      return;
    }

    if (this.activeTag === currentTagEl) {
      this.#copyToClipboard(currentTagEl.textContent);

      return;
    }

    this.activeTag.classList.remove("active");

    currentTagEl.classList.add("active");

    this.#copyToClipboard(currentTagEl.textContent);

    this.activeTag = currentTagEl;
  }

  #copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  }
}

new TagsGroup();