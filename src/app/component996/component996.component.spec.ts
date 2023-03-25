import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component996Component } from './component996.component';

describe('Component996Component', () => {
  let component: Component996Component;
  let fixture: ComponentFixture<Component996Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component996Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
