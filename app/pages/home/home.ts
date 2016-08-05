import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {Data} from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	
  private items = [];
 
    constructor(private nav: NavController, private dataService: Data) {
 
    this.dataService.getData().then((todos) => {
 
        if(todos){
            this.items = JSON.parse(todos); 
        }
 
    });
 
  }
  
  
  
  //handle adding new item
    constructor(private nav: NavController, private dataService: Data) {
 
    this.dataService.getData().then((todos) => {
 
        if(todos){
            this.items = JSON.parse(todos); 
        }
 
    });
 
  }