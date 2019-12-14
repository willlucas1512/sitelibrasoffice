import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


export interface Modaltutorial {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librasoffice';

  constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'windows',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/windows.svg'));

    iconRegistry.addSvgIcon(
      'linux',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/linux.svg'));
}

  openDialog() {
    this.dialog.open(Modaltutorial);
  }
}
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
} */
@Component({
      selector: 'modaltutorial',
      templateUrl: 'modaltutorial.html'
    })
    export class Modaltutorial {
      /*
      closeDialog() {
        this.dialogRef.close();
      } */
    }
  
/*@Component({
      selector: 'input-error-state-matcher-example',
      templateUrl: './input-error-state-matcher-example.html'
    })
    export class InputErrorStateMatcherExample {
      emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    
      matcher = new MyErrorStateMatcher();
    }
  */



