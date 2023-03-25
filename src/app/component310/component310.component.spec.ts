import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component310Component } from './component310.component';

describe('Component310Component', () => {
  let component: Component310Component;
  let fixture: ComponentFixture<Component310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component310Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
