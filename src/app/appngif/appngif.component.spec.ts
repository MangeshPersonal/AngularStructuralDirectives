import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppngifComponent } from './appngif.component';

describe('AppngifComponent', () => {
  let component: AppngifComponent;
  let fixture: ComponentFixture<AppngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
