import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.css']
})
export class ModalFormsComponent  {
  title: string = `Title:`;
  season: string = `Season:`;
  year: string = `Year:`;
  cover: string = `Cover:`;
  link: string = `Link:`;
}
