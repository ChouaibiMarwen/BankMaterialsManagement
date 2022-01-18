import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementComponentComponent } from './equipement-component.component';

describe('EquipementComponentComponent', () => {
  let component: EquipementComponentComponent;
  let fixture: ComponentFixture<EquipementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
