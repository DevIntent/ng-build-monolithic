import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component641Component } from './component641.component';

describe('Component641Component', () => {
  let component: Component641Component;
  let fixture: ComponentFixture<Component641Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component641Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
