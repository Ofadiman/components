export class Log {
  public message: string
  public title: string

  public constructor(public id: string) {
    this.message = `message - ${id}`
    this.title = `title - ${id}`
  }
}
