import {Component, Input} from '@angular/core';
import { NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AnimeService} from '../../services/anime.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';


@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.css']
})
export class ModalFormsComponent {
  @Input() modalRef: any;
  title = `Title:`;
  season = `Season:`;
  year = `Year:`;
  cover = `Cover:`;
  link = `Link:`;


   constructor(private http: HttpClient, private animeService: AnimeService){
  }

  onSubmit(form: NgForm): void {
      this.animeService.getId()
        .switchMap((id) => {
       form.value.id = ++id;
       return this.animeService.saveAnime( form.value);
     })
      .subscribe(
        () => {
          this.modalRef.hide();
          this.animeService.animeSink.next(null);
        },
        (error) => console.log(error)
      );

  }

}
