import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTask } from '../task/task.model';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';
  private taskService = inject(TaskService);

  onCancelAddTask() {
    this.close.emit();
  }

  onTaskSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummery,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
