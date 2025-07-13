import {
  Component,
  inject,
  input,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import {
  ColumnMode,
  DatatableComponent,
  NgxDatatableModule,
} from '@swimlane/ngx-datatable';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ContentHeaderComponent } from '../../../../components/content-header/content-header.component';
import { User } from '../../../../interfaces/user.interface';
import { USERS } from '../../../../mock-data/users.mock';

@Component({
  selector: 'app-users',
  imports: [
    ContentHeaderComponent,
    NgxDatatableModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    ModalModule,
    EditUserComponent,
  ],
  providers: [BsModalService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  // @ViewChild(DatatableComponent) table = DatatableComponent;
  table = viewChild<DatatableComponent>(DatatableComponent);
  title = 'USERS';
  temp = signal<User[]>([]);
  users = signal<User[]>([]);
  columnMode = ColumnMode;
  loadingIndicator = signal<boolean>(false);
  modalRef = signal<BsModalRef | null>(null);
  updateItem = signal<User | null>(null);

  // check card for component reusability
  isCard = input<boolean>(false);

  private modalService = inject(BsModalService);

  ngOnInit() {
    console.log('ngoninit users');
    this.getUsers();
  }

  setLoadingIndicator(value: boolean) {
    this.loadingIndicator.set(value);
  }

  async getUsers() {
    this.setLoadingIndicator(true);
    try {
      const users = USERS;
      this.temp.set(users);
      this.users.set(users);
    } catch (e) {
      console.error(e);
    } finally {
      this.setLoadingIndicator(false);
    }
  }

  onFilterChange(event: any) {
    console.log(event.target.value);
    const val = event.target.value.toLowerCase();

    const filterData = this.temp().filter((item) => {
      return (
        item?.name.toLowerCase().indexOf(val) !== -1 ||
        item.email.toLowerCase().indexOf(val) !== -1 ||
        item.phone.toLowerCase().indexOf(val) !== -1 ||
        item.address.toLowerCase().indexOf(val) !== -1 ||
        item.gender.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    this.users.set(filterData);

    this.table()!.offset = 0;
  }

  onPageChange(event: any) {
    console.log(event);
  }

  onSortChange(event: any) {
    console.log(event);
  }

  exportToExcel() {
    const fields = ['id', 'name', 'email', 'phone', 'address'];
    const values = this.users();

    const sheetName = 'users';

    const data = this.prepareDataInExcel(values, fields);

    // const headers = fields.reduce((acc, field) => {
    //   // acc[field] = field;
    //   acc[field] = field.charAt(0).toUpperCase() + field.slice(1);
    //   return acc;
    // }, {} as Record<string, string>);

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, {
      header: Object.keys(data[0]),
      // skipHeader: true,
    });

    const workBook: XLSX.WorkBook = {
      Sheets: { [sheetName]: worksheet },
      SheetNames: [sheetName],
    };

    const excelBuffer: any = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const file = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });

    saveAs(file, 'users.xlsx');
  }

  prepareDataInExcel(values: User[], fields: string[]) {
    const dataExport = values.map((value) => {
      const filteredRow: Record<string, any> = {};
      fields.forEach((field) => {
        if (field in value) {
          filteredRow[field] = value[field as keyof User];
        }
      });

      return filteredRow;
    });

    return dataExport; // Return the full array of filtered rows
  }

  deleteItem(user: User) {
    this.temp.update((users) => users.filter((usr) => usr.id !== user.id));
    this.users.update((users) => users.filter((usr) => usr.id !== user.id));
  }

  openUserFormModal(template: TemplateRef<void>, user?: User) {
    this.updateItem.set(user ?? null);
    this.modalRef.set(this.modalService.show(template, { class: 'modal-lg' }));
  }

  closeUserModal() {
    this.modalRef()?.hide();
  }

  addUser(user: User) {
    this.temp.update((users) => [user, ...users]);
    this.users.update((users) => [user, ...users]);
    this.closeUserModal();
  }

  updateUser(updatedUser: User) {
    this.temp.update((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    this.users.update((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    this.closeUserModal();
  }
}
