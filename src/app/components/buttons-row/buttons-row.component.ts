import { Router } from "@angular/router";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-buttons-row",
  templateUrl: "./buttons-row.component.html",
  styleUrls: ["./buttons-row.component.scss"],
})
export class ButtonsRowComponent {
  @Input() buttonNames: string[] = [];

  constructor(private router: Router) {}

  /**
   *
   * @param toUrl
   */
  sendTo(toUrl: string) {
    this.router.navigateByUrl(toUrl);
  }

  trackByIndex(index: number, item: string) {
    return index;
  }
}
