import { TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        MatGridListModule,
        NgMultiSelectDropDownModule
      ],
      declarations: [
        AppComponent,
        ProfileSetupComponent,
        LoginComponent,
        RegisterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
