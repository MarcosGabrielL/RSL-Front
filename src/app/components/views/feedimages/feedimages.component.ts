import {  Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-feedimages',
  templateUrl: './feedimages.component.html',
  styleUrls: ['./feedimages.component.css']
})
export class FeedimagesComponent implements OnInit {

  closeResult = '';
 texto: string = "";
 descricao: string = "";

files: File[] = [];



  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
}

  ngOnInit(): void {
  }

	public PostText(){
	}

onSelect(event : any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event: any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

}
