//Define logic of the quote class

export class Quote {
  showAuthor: boolean;
  showSubmitter: boolean;
  constructor(public id: number, public name: string, public author: string, public submitter: string) {
    this.showAuthor = false;
    this.showSubmitter = false;
  }
}
