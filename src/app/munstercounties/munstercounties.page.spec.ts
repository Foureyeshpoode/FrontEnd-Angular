import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MunstercountiesPage } from './munstercounties.page';

describe('MunstercountiesPage', () => {
  let component: MunstercountiesPage;
  let fixture: ComponentFixture<MunstercountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MunstercountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
