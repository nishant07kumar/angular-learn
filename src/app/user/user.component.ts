import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Output() selectedUser = new EventEmitter<string>();
  @Input({required:true}) isSelected:boolean = false;

  get imagePath() {
    return './assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
