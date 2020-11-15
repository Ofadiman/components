export class Message {
  public content: string

  public constructor(public id: number) {
    this.content = `Your random number is #${id}.`
  }
}

export const initialMessages = new Array(10).fill(null).map((_, index) => new Message(index))
