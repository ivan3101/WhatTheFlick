import {Comment} from './comment.model';

export class Article {
  constructor(
    public id: number,
    public title: string,
    public date: string,
    public autor: string,
    public story: string,
    public preview: string,
    public imageUrl: string,
    public category: string,
    public comments: Array<Comment>
  ) { }
}
