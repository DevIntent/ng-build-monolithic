import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component819Component } from './component819.component';

describe('Component819Component', () => {
  let component: Component819Component;
  let fixture: ComponentFixture<Component819Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component819Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
