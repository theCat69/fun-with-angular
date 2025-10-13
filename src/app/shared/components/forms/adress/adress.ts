import { Component, model } from '@angular/core';
import { AppInput } from '../app-input/app-input';
import { FormsModule } from '@angular/forms';
import { provideControlContainer } from '../mixins/with-control-value-accessor';
import { AdressModel } from './adress-model';

@Component({
  selector: 'app-adress',
  imports: [FormsModule, AppInput],
  templateUrl: './adress.html',
  styleUrl: './adress.scss',
  viewProviders: [provideControlContainer()],
})
export class Adress {
  adress = model<AdressModel>({
    street: '',
    city: '',
  });
}
