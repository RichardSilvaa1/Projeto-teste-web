import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoCompornenteComponent } from './segundo-compornente.component';

describe('SegundoCompornenteComponent', () => {
  let component: SegundoCompornenteComponent;
  let fixture: ComponentFixture<SegundoCompornenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoCompornenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoCompornenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
