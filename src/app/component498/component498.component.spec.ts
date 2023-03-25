import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component498Component } from './component498.component';

describe('Component498Component', () => {
  let component: Component498Component;
  let fixture: ComponentFixture<Component498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component498Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
