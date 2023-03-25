import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component135Component } from './component135.component';

describe('Component135Component', () => {
  let component: Component135Component;
  let fixture: ComponentFixture<Component135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component135Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
