import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component484Component } from './component484.component';

describe('Component484Component', () => {
  let component: Component484Component;
  let fixture: ComponentFixture<Component484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component484Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
