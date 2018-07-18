import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos propery with item returned from ', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });
    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });
  /* just to check for service call */
  it('call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();
    expect(spy).toHaveBeenCalled();
  });

  /* check for success service call and return expected data */
  it('should add the new todo returned from the server', () => {
    const todo = { id: 1 };
    // const spy = spyOn(service, 'add').and.callFake(t => {
    //   return Observable.from([todo]);
    // });
    /* more cleaner way*/
    const spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  /* to check if got error in sevice call and return error message */
  it('should set the message property if server returns an errorwhen adding anew todo', () => {
    const error = 'error from the server';
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));
    component.add();

    expect(component.message).toBe(error);
  });


  /* check for delete */

  it('should call the server to delete a todo item if the user conferm', () => {
    /* arrange part */
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    /* act part */
    component.delete(1);

    /* assersion */
    /* to make sure that our delete method of the servise is called */
    expect(spy).toHaveBeenCalledWith(1);
  });

  /* In this we are going to make sure that if user press the cancel btn in
  conferm box thwn we are not going to the delete method to delete the item*/
  it('should NOT call the server to delete a todo item if the user cancels', () => {
    /* arrange part */
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    /* act part */
    component.delete(1);

    /* assersion */
    /* to make sure that our delete method of the servise is called */
    expect(spy).not.toHaveBeenCalled();
  });
});
