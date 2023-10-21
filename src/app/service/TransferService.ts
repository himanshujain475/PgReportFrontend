import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class TransferService {

 logOutButton = new BehaviorSubject(false);
 //currentApprovalStageMessage = this.logOutButton.asObservable();

 constructor() {

 }
 updateLogOutButton(message:boolean) {
 this.logOutButton.next(message);
 }
}