import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeinstercountiesPage } from './leinstercounties.page';

describe('LeinstercountiesPage', () => {
  let component: LeinstercountiesPage;
  let fixture: ComponentFixture<LeinstercountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeinstercountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
