import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component218Component } from './component218.component';

describe('Component218Component', () => {
  let component: Component218Component;
  let fixture: ComponentFixture<Component218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component218Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
