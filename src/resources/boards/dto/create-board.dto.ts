interface Column {
  title: string;
  order: number;
}

export class CreateBoardDto {
  title: string;

  columns: Column[];
}
