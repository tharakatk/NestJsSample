import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the second is 45');
  }

  @Interval(10000)
  handleInterval() {
    //var text = fs.readFileSync('\\\\FTD-NB-THARAKA\\temp\\test.txt', 'utf8');
    var text = fs.readFileSync('ftp:\\\\192.168.1.5\\test.txt', 'utf8');
    


    // var text = fs.readFile('staticFiles', 'utf8', function (err, data) {
    //   if(!err){
    //     res.writeHead(200, {'Content-Type': mimeTypes[extname]});
    //     res.end(data);
    //   }else {
    //     res.writeHead(404, {'Content-Type': 'text/html;charset=utf8'});
    //     res.write(`<strong>${staticFiles}</strong>File is not found.`);
    //   }
    //   res.end();
    // });
    console.log(text);
    this.logger.debug('Called every 10 seconds');
  } 
}
