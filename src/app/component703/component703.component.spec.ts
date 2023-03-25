import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component703Component } from './component703.component';

describe('Component703Component', () => {
  let component: Component703Component;
  let fixture: ComponentFixture<Component703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component703Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
