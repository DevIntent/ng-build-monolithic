import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component758Component } from './component758.component';

describe('Component758Component', () => {
  let component: Component758Component;
  let fixture: ComponentFixture<Component758Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component758Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
