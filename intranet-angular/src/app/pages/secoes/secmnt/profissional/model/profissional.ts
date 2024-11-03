export interface Fotodoesp {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  documentId: string;
  ext: string;
  formats: {
    small: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
    };
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
    };
  };
  hash: string;
  height: number;
  id: number;
  locale: string | null;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  publishedAt: string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}

export interface Profissional {
  id: number;
  documentId: string;
  profissionalId: number;
  tiposvId: number;
  nome: string;
  primeironome: string;
  email: string;
  detalhes: string | null;
  fotodoesp: Fotodoesp;
  data_nascimento: string;
  vilaId: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  telefonecelular: string;
}

export interface ProfissionalUpdateBody {
  data: Profissional;
  files?: {
    fotodoesp?: File;
  };
}


export interface Especialistas{
  id: number;
  especialidade: string;

}
