export interface MediaFile {
  id: number;           // Identificador único do arquivo
  name: string;         // Nome do arquivo
  url: string;          // URL para acessar o arquivo
  mime: string;         // Tipo MIME do arquivo (ex: 'application/pdf')
  size: number;         // Tamanho do arquivo em bytes
  created_at: string;   // Data de criação
  updated_at: string;   // Data de atualização
}
