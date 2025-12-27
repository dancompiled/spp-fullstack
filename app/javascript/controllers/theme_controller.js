// app/javascript/controllers/theme_controller.ts
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  toggle(event) {
    const html = document.documentElement;
    const isLight = html.classList.contains("theme-light");

    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(isLight ? "theme-dark" : "theme-light");
  }
}
