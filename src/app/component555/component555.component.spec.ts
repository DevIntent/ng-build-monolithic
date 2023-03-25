import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component555Component } from './component555.component';

describe('Component555Component', () => {
  let component: Component555Component;
  let fixture: ComponentFixture<Component555Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component555Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
