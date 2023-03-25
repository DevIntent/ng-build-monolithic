import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component890Component } from './component890.component';

describe('Component890Component', () => {
  let component: Component890Component;
  let fixture: ComponentFixture<Component890Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component890Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
