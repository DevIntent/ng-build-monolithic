import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component880Component } from './component880.component';

describe('Component880Component', () => {
  let component: Component880Component;
  let fixture: ComponentFixture<Component880Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component880Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
