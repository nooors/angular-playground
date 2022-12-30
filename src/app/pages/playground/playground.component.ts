import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"],
})
export class PlaygroundComponent implements OnInit {
  constructor(private router: Router) {}

  /**
   * Populates the routes array
   */
  ngOnInit(): void {}
  goTo(url: string): void {
    this.router.navigateByUrl(`playground/${url}`);
    console.log("Button-css", `playground/${url}`);
  }
}
