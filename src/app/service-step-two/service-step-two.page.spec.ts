import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceStepTwoPage } from './service-step-two.page';

describe('ServiceStepTwoPage', () => {
  let component: ServiceStepTwoPage;
  let fixture: ComponentFixture<ServiceStepTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
