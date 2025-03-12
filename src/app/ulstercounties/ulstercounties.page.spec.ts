import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UlstercountiesPage } from './ulstercounties.page';

describe('UlstercountiesPage', () => {
  let component: UlstercountiesPage;
  let fixture: ComponentFixture<UlstercountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UlstercountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
