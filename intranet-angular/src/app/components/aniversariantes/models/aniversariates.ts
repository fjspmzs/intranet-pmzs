// Modelo para a Foto do Aniversariante
export interface FotoDoAni {
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

// Modelo para o Formato da Imagem
export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

// Modelo para o Aniversariante
export interface Aniversariante {
  id: number;
  attributes: {
      nome: string;
      data_aniversario: string; // Pode ser um objeto Date se preferir
      createdAt: string; // Pode ser um objeto Date se preferir
      updatedAt: string; // Pode ser um objeto Date se preferir
      publishedAt: string; // Pode ser um objeto Date se preferir
      pgrad: string;
      firma: string;
      fotodoani: {
          data: FotoDoAni;
      };
  };
}
