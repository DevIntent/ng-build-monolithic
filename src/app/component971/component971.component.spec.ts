import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component971Component } from './component971.component';

describe('Component971Component', () => {
  let component: Component971Component;
  let fixture: ComponentFixture<Component971Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component971Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
