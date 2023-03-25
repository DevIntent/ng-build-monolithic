import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component219Component } from './component219.component';

describe('Component219Component', () => {
  let component: Component219Component;
  let fixture: ComponentFixture<Component219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component219Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
