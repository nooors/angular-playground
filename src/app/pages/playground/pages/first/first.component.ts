import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"],
})
export class FirstComponent {
  /**
   * array to name the buttons
   */
  public colors: string[] = ["blue", "green", "orange"];

  /**
   * CSS variable binding
   */
  @HostBinding("style.--color") color: string = "";

  /**
   * assigns the color to the css variable
   */
  selectColor(colorSelected: string) {
    this.color = colorSelected;
  }

  trackByIndex(index: number, item: string) {
    return index;
  }
}
