//Define logic of the quote class

export class Quote {
  public showAuthor: boolean;
  public showSubmitter: boolean;
  public showCreatedDate: boolean;
  public showName: boolean;
  constructor(public id: number, public name: string, public author: string, public submitter: string, public createdDate: Date) {
    this.showAuthor = false;
    this.showSubmitter = false;
    this.showCreatedDate = false;
    this.showName = false;
  }
}
