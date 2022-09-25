import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteServicos1Component } from './componente-servicos1.component';

describe('ComponenteServicos1Component', () => {
  let component: ComponenteServicos1Component;
  let fixture: ComponentFixture<ComponenteServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteServicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
