import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  filePath?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /*
   * repository: StorageRepository
   */ {}

  execute({
    fileContent,
    filePath = 'outputs',
    fileName = 'table',
  }: Options): boolean {
    try {
      fs.mkdirSync(filePath, { recursive: true });

      fs.writeFileSync(`${filePath}/${fileName}.txt`, fileContent);
      console.log(
        `${fileName}.txt created in path: ${filePath}/${fileName}.txt`
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
