import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.save(createTaskDto);
  }

  getAll() {
    return this.tasksRepository.find();
  }

  getById(id: string) {
    return this.tasksRepository.findOne(id, {
      loadRelationIds: true,
    });
  }

  getByBoardId(id: string) {
    return this.tasksRepository.find({
      loadRelationIds: true,
      where: { boardId: { id } },
    });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.save(updateTaskDto);
  }

  remove(id: string) {
    return this.tasksRepository.delete(id);
  }
}
