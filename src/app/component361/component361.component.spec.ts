import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component361Component } from './component361.component';

describe('Component361Component', () => {
  let component: Component361Component;
  let fixture: ComponentFixture<Component361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component361Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
