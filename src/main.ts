import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const tasksService = app.select(TaskModule).get(TaskService, { strict: true });
// }
bootstrap();
