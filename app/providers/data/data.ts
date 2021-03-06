import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Data {

  private storage;
  private data;

  constructor(){
    this.storage = new Storage(SqlStorage, {name:'todo'});
  }

  getData() {
    return this.storage.get('todos');  
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }
  
  
  remove(data){
    let newData = JSON.stringify(data);
    this.storage.remove('todos.'+newData);
  }
  
  clearData(){
    this.storage.clear();
  }
}