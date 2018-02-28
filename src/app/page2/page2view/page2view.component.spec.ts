import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2viewComponent } from './page2view.component';

describe('Page2viewComponent', () => {
  let component: Page2viewComponent;
  let fixture: ComponentFixture<Page2viewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2viewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
