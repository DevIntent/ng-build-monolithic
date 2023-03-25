import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component552Component } from './component552.component';

describe('Component552Component', () => {
  let component: Component552Component;
  let fixture: ComponentFixture<Component552Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component552Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
