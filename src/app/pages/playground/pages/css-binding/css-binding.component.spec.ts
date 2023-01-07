import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CssBindingComponent } from "./css-binding.component";

describe("CssBindingComponent", () => {
  let component: CssBindingComponent;
  let fixture: ComponentFixture<CssBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CssBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
