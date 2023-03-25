import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component625Component } from './component625.component';

describe('Component625Component', () => {
  let component: Component625Component;
  let fixture: ComponentFixture<Component625Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component625Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
