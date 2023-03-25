import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component162Component } from './component162.component';

describe('Component162Component', () => {
  let component: Component162Component;
  let fixture: ComponentFixture<Component162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component162Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
