import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component875Component } from './component875.component';

describe('Component875Component', () => {
  let component: Component875Component;
  let fixture: ComponentFixture<Component875Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component875Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
