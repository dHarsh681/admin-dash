import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../../../../../interfaces/user.interface';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';
import { NgxSelectModule } from 'ngx-select-ex';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  imports: [
    ReactiveFormsModule,
    BsDatepickerModule,
    NgxSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [DatePipe],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  formData = signal<FormGroup | null>(null);
  updateItem = input<User>();

  datePickerConfig: Partial<BsDatepickerConfig> = Object.assign(
    {},
    {
      containerClass: 'theme-dark-blue',
      // showWeekNumbers: true,
      // minDate: new Date(2018, 0, 1),
      // maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'YYYY-MM-DD',
    }
  );

  addedData = output<User>();
  updatedData = output<User>();

  private formBuilder = inject(FormBuilder);
  private datePipe = inject(DatePipe);

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const item = this.updateItem();

    const form = this.formBuilder.group({
      name: [item?.name ?? null, Validators.required],
      email: [item?.email ?? null, [Validators.required, Validators.email]],
      phone: [item?.phone ?? null, Validators.required],
      gender: [item?.gender ?? null, Validators.required],
      dob: [item?.dob ?? null, Validators.required],
      address: item?.address ?? null,
    });

    this.formData.set(form);
  }

  onSubmit() {
    if (this.formData()?.invalid) {
      this.formData()?.markAllAsTouched();
      return;
    }

    console.log(this.formData()?.value);

    this.saveUser();
  }

  saveUser() {
    // format date
    const dob = this.dateFormat(this.formData()?.value?.dob, 'yyyy-MM-dd');

    const data = { ...this.formData()?.value, dob };
    console.log(data);

    if (this.updateItem()) {
      // update user
      this.updatedData.emit({ 
        ...this.updateItem(), 
        ...data 
      });
    } else {
      // add user
      this.addedData.emit({ ...data, id: 100 });
    }
  }

  dateFormat(date: Date, format: string) {
    return this.datePipe.transform(date, format);
  }
}
