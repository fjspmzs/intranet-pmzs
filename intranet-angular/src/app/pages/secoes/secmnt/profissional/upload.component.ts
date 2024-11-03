import { Component } from '@angular/core';
import { ProfissionalService } from './services/profissional';
import { Profissional, ProfissionalUpdateBody } from './services/profissional.interfaces';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  selectedFile: File = null;
  imagePreview: string = null;
  data: ProfissionalUpdateBody = {
    data: {
      id: 1, // ou qualquer valor apropriado
      documentId: '',
      profissionalId: 0,
      tiposvId: 0,
      nome: '',
      primeironome: '',
      email: '',
      detalhes: null,
      fotodoesp: {
        alternativeText: null,
        caption: null,
        createdAt: '',
        documentId: '',
        ext: '',
        formats: {
          small: {
            name: '',
            hash: '',
            ext: '',
            mime: '',
            path: null,
            width: 0,
            height: 0,
          },
          thumbnail: {
            name: '',
            hash: '',
            ext: '',
            mime: '',
            path: null,
            width: 0,
            height: 0,
          },
        },
        hash: '',
        height: 0,
        id: 0,
        locale: null,
        mime: '',
        name: '',
        previewUrl: null,
        provider: '',
        provider_metadata: null,
        publishedAt: '',
        size: 0,
        updatedAt: '',
        url: '',
        width: 0,
      },
      data_nascimento: '',
      vilaId: 0,
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      locale: null,
      telefonecelular: '',
    },
    files: {
      fotodoesp: undefined
    }
  };

  constructor(private profissionalService: ProfissionalService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    if (this.selectedFile) {
      this.data.files.fotodoesp = this.selectedFile;
    }

    this.profissionalService.updateProfissional(1, this.data)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
  }
}
