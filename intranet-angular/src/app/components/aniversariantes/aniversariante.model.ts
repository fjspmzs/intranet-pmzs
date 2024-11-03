// Modelo para a Foto do Aniversariante
export interface FotoDoAniversariante {
  id: number;
  attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
          thumbnail: ImageFormat;
          medium: ImageFormat;
          large: ImageFormat;
          small: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any; // Ajuste conforme necessário
      createdAt: string; // Pode ser um objeto Date se preferir
  };
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
      nomedeguerra: string;
      data_aniversario: string; // Pode ser um objeto Date se preferir
      createdAt: string; // Pode ser um objeto Date se preferir
      updatedAt: string; // Pode ser um objeto Date se preferir
      publishedAt: string; // Pode ser um objeto Date se preferir
      pgrad: string;
      firma: string;
      fotodoani: {
[x: string]: any;
          data: FotoDoAniversariante;
      };
  };
}
