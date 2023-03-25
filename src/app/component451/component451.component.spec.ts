import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component451Component } from './component451.component';

describe('Component451Component', () => {
  let component: Component451Component;
  let fixture: ComponentFixture<Component451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component451Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
