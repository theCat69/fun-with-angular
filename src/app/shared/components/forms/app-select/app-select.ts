import { Component, model, input } from '@angular/core';
import { provideControlContainer, provideControlValueAccessor, WithControlValueAccessor } from '../mixins/with-control-value-accessor';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule],
  providers: [provideControlValueAccessor(AppSelect)],
  viewProviders: [provideControlContainer()],
  templateUrl: './app-select.html',
  styleUrl: './app-select.scss'
})
export class AppSelect extends WithControlValueAccessor<string>() {
  value = model<string>();
  name = input.required<string>();

  options = input.required<string[]>();

  isOptionDisabled(option: string) {
    console.log("should disable");
    console.log(option);
  }
}
