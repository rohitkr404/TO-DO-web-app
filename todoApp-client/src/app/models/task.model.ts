export class Task {
  id: number = 0;
  name: string = '';
  description: string | null = null;
  completed: boolean = false;
  dueDate: Date = new Date();
  userId: number = 0;

  constructor(data?: any) {
    if (data) {
      this.id = data.id || 0;
      this.name = data.name || '';
      this.description = data.description || null;
      this.completed = data.completed || false;
      this.dueDate = data.dueDate ? new Date(data.dueDate) : new Date();
      this.userId = data.userId || 0;
    }
  }
}
