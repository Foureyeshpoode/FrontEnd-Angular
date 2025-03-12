import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnaughtcountiesPage } from './connaughtcounties.page';

describe('ConnaughtcountiesPage', () => {
  let component: ConnaughtcountiesPage;
  let fixture: ComponentFixture<ConnaughtcountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnaughtcountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
