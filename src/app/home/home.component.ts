import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;
  Name: any;
  Group: any;
  Status: any;
  Date: any;
  manageEdit: boolean = false;
  display: string = '';
  closeField!: HTMLElement | null;
  datatarget: string = '';
  disabledbtn: Boolean = false;
  disablebtnclr = 'btn-primary';
  nameExist!:boolean;
  checkinputvailidity!: string;
  usersData:any;
  userId:any;
  dupNameField = {
    'border-color' : 'gray'
  };
  dupName:boolean = false;

  constructor(private userDataService:ApiserviceService){ }


  
  ngOnInit() {

    this.Name = new FormControl('', [Validators?.required, this.spaceValidator()]),
    this.Group = new FormControl('', [Validators?.required]),
    this.Status = new FormControl('', [
      Validators?.required
    ]),
    this.Date = new FormControl('', [
      Validators?.required,
      this.DateValidator
    ]),
    this.homeForm = new FormGroup({
      Name: this.Name,
      Group: this.Group,
      Status: this.Status,
      Date: this.Date
    });
    this.getUsers();
  }


  getUsers(){
    this.userDataService.getUsers().subscribe((data) => {
      this.usersData = data;
  })
  }

  postUserData(user:any){
    this.userDataService.postUsers(user).subscribe(() =>{
      this.getUsers(); 
    });
    this.display = 'modal';
    this.closeField?.click();
  }


  editUser(id: number, newData:any){
    this.userDataService.editUserData(id, newData).subscribe((data) => {
      this.getUsers();
    });
    this.display = 'modal';
    this.closeField?.click();
  }

  delete(id: number){
    this.userDataService.deleteUser(id).subscribe(() => {
      this.getUsers();
    })
  }


  add() {
    this.manageEdit = false;
    this.homeForm.valueChanges.subscribe((res) => {
      this.nameExists(res.Name);

      if(this.manageEdit == false){
        this.dupName = this.nameExist;
      }

      if(this.homeForm.get('Name')?.dirty){
        if(this.dupName){
          this.dupNameField = {
            'border-color' : 'red'
          }
        }else{
          this.dupNameField = {
            'border-color' : 'green'
          }
        }
      }
    })
    this.display = '';
    this.closeField = document.getElementById('closeField');
    this.homeForm.reset();
  }

  nameExists(newName: string){
    this.nameExist = this.usersData.some((user:any) => {
      return  user.Name === newName
    });
  }
  
 
 

  check(n: string) {
    return (
      this.homeForm.get(n)?.hasError('required') &&
      (this.homeForm.get(n)?.touched && this.homeForm.get(n)?.value?.trim() == 0) //////////////////////////////////////////////
    );
  }


  inputv(n: string) {
    if (
      this.homeForm.value.invalid ||
      this.check(n) ||
      this.homeForm.get(n)?.hasError('futureDate')
    ) {
      this.checkinputvailidity = 'red';
    } else if (this.homeForm.get(n)?.touched || this.homeForm.get(n)?.valid) {
      this.checkinputvailidity = 'green';
    } else {
      this.checkinputvailidity = 'gray';
    }
    return this.checkinputvailidity;
  }


  edit(index: number) {
    this.manageEdit = true;
    this.homeForm.get('Name')?.setValue(this.usersData[index].Name);
    this.homeForm.get('Group')?.setValue(this.usersData[index].Group);
    this.homeForm.get('Status')?.setValue(this.usersData[index].Status);
    this.homeForm.get('Date')?.setValue(this.usersData[index].Date);
    this.homeForm.get('Name')?.valueChanges.subscribe((res) => {
      this.nameExists(res);
    

      if(this.usersData[index].Name !== res && this.nameExist){
        this.dupName = true;
        this.dupNameField = {'border-color' : 'red'}
      } else{
        this.dupName = false;
        this.dupNameField = {"border-color" : 'green'}
      }
    })
    this.homeForm.get('name')?.untouched;
    this.dupName = false;
    this.display = '';
    this.userId = this.usersData[index].id;
    this.closeField = document.getElementById('closeField');
  }




  spaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && value?.trim()?.length === 0) {
        return { noOnlySpaces: true };
      }
      return null;
    };
  }

  DateValidator(control: AbstractControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for today

    return selectedDate > today ? { futureDate: true } : null;
  }
}
