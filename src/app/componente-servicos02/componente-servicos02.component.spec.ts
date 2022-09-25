import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteServicos02Component } from './componente-servicos02.component';

describe('ComponenteServicos02Component', () => {
  let component: ComponenteServicos02Component;
  let fixture: ComponentFixture<ComponenteServicos02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteServicos02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteServicos02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
