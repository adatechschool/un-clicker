class SkillGetter {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.beforeNextUpgrade = 50;

    let skillElement = document.createElement("div")
    skillElement.addEventListener("click", function () {
      this.beforeNextUpgrade--;
    }, false);
    skillElement.innerText = name + " — " + description + this.beforeNextUpgrade;
    skillElement.id = name;
    skillElement.classList.add("boutonAction");
    actions.appendChild(skillElement);
  }

}
