import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component66Component } from './component66.component';

describe('Component66Component', () => {
  let component: Component66Component;
  let fixture: ComponentFixture<Component66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component66Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
