import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component118Component } from './component118.component';

describe('Component118Component', () => {
  let component: Component118Component;
  let fixture: ComponentFixture<Component118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component118Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
