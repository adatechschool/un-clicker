class SkillGetter {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.beforeNextUpgrade = 50;
	this.image = image;

    let skillElement = document.createElement("div")
    skillElement.addEventListener("click", function () {
      this.beforeNextUpgrade--;
    }, false);
    skillElement.innerHTML = description + "<p style='text-align:left;'" + this.beforeNextUpgrade + "</p>";
    skillElement.id = name;
    skillElement.classList.add("boutonAction");
    actions.appendChild(skillElement);
  }

}
