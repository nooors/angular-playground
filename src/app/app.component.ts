import { Component, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  /**
   * contains the routes names
   */
  routes: string[] = [];

  /**
   *
   * @param router
   */
  constructor(private router: Router) {}

  /**
   * Populates the routes array
   */
  ngOnInit(): void {
    console.log(this.router.config);
    this.router.config.filter((route) => {
      if (
        route.path !== "" &&
        route.path !== "**" &&
        route.path !== undefined
      ) {
        this.routes.push(route.path);
      }
    });
    console.log(this.routes);
  }

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
