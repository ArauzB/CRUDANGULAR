import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritonoComponent } from './distritono.component';

describe('DistritonoComponent', () => {
  let component: DistritonoComponent;
  let fixture: ComponentFixture<DistritonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistritonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistritonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
