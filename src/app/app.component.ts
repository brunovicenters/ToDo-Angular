import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'ToDo-Angular';

  todos: string[] = [];

  newTodo: string = "";

  public addTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    }
  }

  public editTodo(index: number) {
    let task = prompt("Edit task:");
    if (task) {
      this.todos[index] = task;
    } else {
      alert("Task can't be empty!");
    }
  }

  public deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
