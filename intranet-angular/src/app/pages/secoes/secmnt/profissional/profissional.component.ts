import { BrModalService } from '../../../../services/brmodal.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { ProfissionalService } from './services/profissional';
import { Profissional, Fotodoesp, Especialistas } from './model/profissional';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'br-profissional',
  standalone: true,
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ProfissionalComponent implements OnInit {
  profissionais: Profissional[] = [];
  especialistas: Especialistas[] = [];
  profissionalForm!: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  @ViewChild('modalRef') modalRef!: ElementRef;
  @ViewChild('customContent') contentTemplate!: TemplateRef<any>;
  title: string = '';
  zoomedImage: string = '';
  isEditMode = false;
  currentProfissionalId: number | null = null;
  isModalVisible = false;

  constructor(
    private profissionalService: ProfissionalService,
    private brModalService: BrModalService,
    private fb: FormBuilder
  ) {
    this.profissionalForm = this.fb.group({
      nome: [''],
      primeironome: [''],
      email: [''],
      telefonecelular: [''],
      vilaId: [''],
      data_nascimento: [''],
      nome_especialidadde: [''],
      fotodoesp: [null]
    });
  }

  ngOnInit(): void {
    this.loadProfissionais();
    this.carregarEspecialistas();
  }

  loadProfissionais(): void {
    this.profissionalService.getProfissionais().subscribe(data => {
      this.profissionais = Array.isArray(data) ? data : [];
      console.log(this.profissionais);
    });
  }

  carregarEspecialistas() {
    this.profissionalService.getEspecialistas().subscribe(data => {
      this.especialistas = Array.isArray(data) ? data : [];
      console.log(this.especialistas);
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.profissionalForm.value));
    //const formData =this.profissionalForm.value;

    if (this.selectedFile) {
     formData.append('files.fotodoesp', this.selectedFile);
    }

    if (this.isEditMode && this.currentProfissionalId) {
      this.profissionalService.updateProfissional(this.currentProfissionalId, formData).subscribe({
        next: response => {
          console.log('Profissional atualizado com sucesso!', response);
          this.closeModal();
        },
        error: error => {
          console.error('Erro ao atualizar profissional:', error);
        },
        complete: () => {
          console.log('Requisição de atualização concluída.');
          this.loadProfissionais();
        }
      });
    } else {
      this.profissionalService.addProfissional(formData).subscribe({
        next: response => {
          console.log('Profissional criado com sucesso!', response);
          this.closeModal();
          this.loadProfissionais();
        },
        error: error => {
          console.error('Erro ao criar o profissional:', error);
        },
        complete: () => {
          console.log('Requisição de criação concluída.');
        }
      });
    }
  }

  openModal(profissional?: any): void {
    this.isEditMode = !!profissional;
    if (this.isEditMode && profissional) {
      this.currentProfissionalId = profissional.id;
      this.profissionalForm.patchValue(profissional);
      this.imagePreview = profissional.fotodoesp?.url || null;
    } else {
      this.profissionalForm.reset();
      this.imagePreview = null;
    }
    this.modalRef.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalRef.nativeElement.style.display = 'none';
  }

  onSelectAction(event: any, id: number): void {
    const selectedAction = event.target.value;
    if (selectedAction === 'editar') {
      this.editProfissional(id);
    } else if (selectedAction === 'excluir') {
      this.deleteProfissional(id);
    }
  }

  editProfissional(id: number): void {
    this.profissionalService.getProfissionalById(id).subscribe(response => {
      const profissional = response.data[0];
      this.profissionalForm.patchValue({
        nome: profissional.nome || '',
        primeironome: profissional.primeironome || '',
        data_nascimento: profissional.data_nascimento || null,
        email: profissional.email || '',
        telefonecelular: profissional.telefonecelular || '',
        vilaId: profissional.vilaId || null,
        especialista: profissional.especialista ? profissional.especialista.id : null
      });
      this.imagePreview = profissional.fotodoesp?.url || null;
      this.openModal(profissional);
    });
  }

  deleteProfissional(id: number): void {
    this.profissionalService.deleteProfissional(id).subscribe(() => {
      this.loadProfissionais();
    });
  }

  zoomImage(imageUrl: string): void {
    this.zoomedImage = imageUrl;
    const modalElement = document.querySelector('#zoom-Modal') as HTMLElement | null;
    if (modalElement) {
      const modalBody = modalElement.querySelector('.br-modal-body') as HTMLElement | null;
      if (modalBody) {
        modalBody.innerHTML = `
          <img src="${this.zoomedImage}" alt="Zoomed Image" style="width: 75%; height: auto;">
        `;
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
      }
    }
  }
}
