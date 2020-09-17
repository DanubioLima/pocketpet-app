import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceStepFourPage } from './service-step-four.page';

describe('ServiceStepFourPage', () => {
  let component: ServiceStepFourPage;
  let fixture: ComponentFixture<ServiceStepFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
