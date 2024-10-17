import { Component, ElementRef } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { CommonModule } from '@angular/common';
import BRUpload from '@govbr-ds/core/dist/components/upload/upload';

@Component({
  selector: 'br-upload',
  templateUrl: './upload.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  instance: any;
  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService, private brHeader: ElementRef) { }
  ngAfterViewInit() {
    this.instance = new BRUpload('.br-upload', this.brHeader.nativeElement.querySelector('.br-upload'))
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'material-carga.csv';
          a.click();
        },
        error => console.error('Error uploading file:', error)
      );
    }
  }
}
