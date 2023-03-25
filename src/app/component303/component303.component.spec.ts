import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component303Component } from './component303.component';

describe('Component303Component', () => {
  let component: Component303Component;
  let fixture: ComponentFixture<Component303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component303Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
