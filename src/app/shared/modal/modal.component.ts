import {Component, Input, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {AnimeService} from '../../services/anime.service';
import {Anime} from '../models/anime.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() mode: string;
  @Input() id: number;
  anime: Anime;
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private animeService: AnimeService) {}

  openModal(template: TemplateRef<any>) {
    if (this.mode === 'edit') {
      this.animeService.getAnime(this.id)
        .subscribe((anime: Anime) => {
          this.anime = anime;
          this.modalRef = this.modalService.show(template);
        });
    } else {
    this.modalRef = this.modalService.show(template);
    }
  }
}
