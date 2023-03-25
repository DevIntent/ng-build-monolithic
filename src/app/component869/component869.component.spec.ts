import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component869Component } from './component869.component';

describe('Component869Component', () => {
  let component: Component869Component;
  let fixture: ComponentFixture<Component869Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component869Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
