import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component30Component } from './component30.component';

describe('Component30Component', () => {
  let component: Component30Component;
  let fixture: ComponentFixture<Component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
