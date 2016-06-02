export class Task {
  constructor(
    id: number, 
    title: string, 
    finishDate:string, 
    content: string, 
    done: boolean  
  ) { 
    this.id = id;
    this.title = title;
    this.finishDate = finishDate;
    this.content = content;
    this.done = done;
  }
  
  id: number;
  title: string;
  finishDate: string;
  content: string;
  done: boolean
}
