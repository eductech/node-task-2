import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardsRepository.save(createBoardDto);
  }

  async getAll() {
    const boards = await this.boardsRepository.find();

    return boards.map((board) => ({
      ...board,
      columns: board.columns.sort((a, b) => a.order - b.order),
    }));
  }

  async getById(id: string) {
    const board = await this.boardsRepository.findOne(id);

    if (!board) return undefined;

    return {
      ...board,
      columns: board.columns.sort((a, b) => a.order - b.order),
    };
  }

  update(id: string, updateBoardDto: UpdateBoardDto) {
    return this.boardsRepository.save(updateBoardDto);
  }

  remove(id: string) {
    return this.boardsRepository.delete(id);
  }
}
