import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AnimeService} from '../../services/anime.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import {Anime} from '../models/anime.model';


@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.css']
})
export class ModalFormsComponent implements OnInit {
  @Input() modalRef: any;
  @Input() anime: Anime = null;
  title = `Title:`;
  season = `Season:`;
  year = `Year:`;
  cover = `Cover:`;
  link = `Link:`;
  public myForm: FormGroup;


   constructor(
     private http: HttpClient,
     private animeService: AnimeService,
     private fb: FormBuilder) {
  }
  ngOnInit() {
      this.myForm = this.buildAnimeForm();
     if (this.anime) {
       this.myForm.setValue(this.anime);
     }
  }

  onSubmit(): void {
     if (!this.myForm.value.id) {
       this.saveAnime();
     } else {
       this.editAnime();
     }
  }

  private buildAnimeForm(): FormGroup {
    return this.fb.group(new Anime());
  }

  private saveAnime(): void {
    this.animeService.getLastId()
      .switchMap((id) => {
        this.myForm.value.id = ++id;
        return this.animeService.saveAnime( this.myForm.value);
      })
      .subscribe(
        () => {
          this.modalRef.hide();
          this.animeService.animeSink.next(null);
        },
        (error) => console.log(error)
      );
  }

  private editAnime(): void {
    this.animeService.editAnime(this.myForm.value)
      .subscribe(
        () => {
          this.modalRef.hide();
          this.animeService.animeSink.next(null);
        },
        (error) => console.log(error)
      );
  }

}
