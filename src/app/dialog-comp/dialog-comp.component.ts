import { element } from 'protractor';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { RestServer } from '../model/rest-server';
import { RestClientSender } from '../model/rest-client-sender';
import { RestClientReciver } from '../model/rest-client-reciver';
import { TcpClient } from '../model/tcp-client';
import { TcpServer } from '../model/tcp-server';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dialog-comp',
  templateUrl: './dialog-comp.component.html',
  styleUrls: ['./dialog-comp.component.css'],

})
export class DialogCompComponent implements OnInit {

  users: { id: number, name: string}[] = [
    { "id": 0, "name": "RestServer" },
    { "id": 1, "name": "Rest Client Sender"},
    { "id": 2, "name": "Rest Client Reciever"},
    { "id": 3, "name": "TCP Client"},
    { "id": 4, "name": "TCP Server"}
];

details: { id: number, name: string}[]=[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(index):void {

    let selectedUser = this.details.find(element => element.id == index);

if (selectedUser.id === 0) {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      height: '600px',
      width: '800px',
      data: {selectedUser:selectedUser, name:selectedUser.name}
    });
  }

  else if (selectedUser.id === 1) {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '600px',
      width: '800px',
      data: {selectedUser:selectedUser}
    });
  }

  else if (selectedUser.id === 2) {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
      height: '600px',
      width: '800px',
      data: {selectedUser:selectedUser}
    });
  }

  else if (selectedUser.id === 3) {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog3, {
      height: '600px',
      width: '800px',
      data: {selectedUser:selectedUser}
    });
  }

  else {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog4, {
      height: '600px',
      width: '800px',
      data: {selectedUser:selectedUser}
    });
  }
}
visible = false;
drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      if (this.details.length) { // if (this.details.length>=2) gibi yazarsam sınırlandırma getirebilirim.
        this.visible=true;
      } else
      {
        this.visible=false;
      }
    }
  }

}
@Component({
  selector: 'rest-client-sender',
  templateUrl: 'rest-client-sender.html'})

export class DialogOverviewExampleDialog{

     clientSender: RestClientSender;

     constructor (public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
     @Inject (MAT_DIALOG_DATA) public data: any) {}


   }


@Component({
  selector: 'rest-client-reciver',
  templateUrl: 'my-dialog.html',
})

export class DialogOverviewExampleDialog1 {

clientReciver: RestClientReciver;
  // Bildiğimiz constructor.
  // Dialog datasını alıyor.
  constructor(public dialogRef: MatDialogRef <DialogOverviewExampleDialog1>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}

@Component({
  selector: 'rest-server',
  templateUrl: 'rest-server.html',
})
export class DialogOverviewExampleDialog2 {

restServer: RestServer;
  // Bildiğimiz constructor.
  // Dialog datasını alıyor.
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


}

@Component({
  selector: 'tcp-client',
  templateUrl: 'tcp-client.html',
})
export class DialogOverviewExampleDialog3 {

clientSender:TcpClient;
  // Bildiğimiz constructor.
  // Dialog datasını alıyor.
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog3>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


}

@Component({
  selector: 'tcp-server',
  templateUrl: 'tcp-server.html',
})
export class DialogOverviewExampleDialog4 {

clientSender:TcpServer;
  // Bildiğimiz constructor.
  // Dialog datasını alıyor.
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog4>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}



