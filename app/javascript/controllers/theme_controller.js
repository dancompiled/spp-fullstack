// app/javascript/controllers/theme_controller.ts
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["lightIcon", "darkIcon"];

  toggle(event) {
    const html = document.documentElement;
    const isLight = html.classList.contains("theme-light");
    const newTheme = isLight ? "dark" : "light";

    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(`theme-${newTheme}`);

    // Set icons based on new theme state (not toggle, to avoid race conditions)
    if (this.hasLightIconTarget && this.hasDarkIconTarget) {
      this.lightIconTarget.classList.toggle("hidden", newTheme !== "light");
      this.darkIconTarget.classList.toggle("hidden", newTheme !== "dark");
    }
  }
}
