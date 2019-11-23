import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../../../../../../domain/entities';
import {floorToDate, getTodayTime, ONE_DAY} from '../../../../../../utils/time';
import {TodoService} from '../../../../../services/todo/todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.less']
})
export class SuggestComponent implements OnInit, OnDestroy {
  suggestedTodo: Todo[] = [];

  private todo$: Subscription;

  constructor(
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.todo$ = this.todoService.todo$.subscribe(todos => {
      const filtered = todos.filter(t => {
        if (t.planAt && floorToDate(t.planAt) <= getTodayTime()) {
          return false;
        }
        return t.dueAt && t.dueAt - getTodayTime() <= ONE_DAY * 2;

      });
      this.suggestedTodo = [].concat(filtered);
    });

    this.todoService.getAll();
  }

  ngOnDestroy() {
    this.todo$.unsubscribe();
  }

  setTodoToday(todo: Todo): void {
    this.todoService.setTodoToday(todo._id);
  }
}
