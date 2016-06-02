export class Task {
  constructor(
    id: number, 
    title: string, 
    finishDate:string, 
    content: string, 
    done: boolean,
    deleted: boolean
  ) { 
    this.id = id;
    this.title = title;
    this.finishDate = finishDate;
    this.content = content;
    this.done = done;
    this.deleted = deleted;
  }
  
  id: number;
  title: string;
  finishDate: string;
  content: string;
  done: boolean;
  deleted: boolean;
}
