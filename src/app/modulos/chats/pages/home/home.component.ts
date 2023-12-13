import { Component } from '@angular/core';
import { IUsuario } from 'src/app/core/interfaces/usuario.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Injectar el snackbar
  constructor(private snackBar: MatSnackBar) {
    
  }
  
  chats: IUsuario[] = [
    {
      name: 'Lenee Elsmor',
      image: 'http://dummyimage.com/174x100.png/cc0000/ffffff',
      status: false,
      lastMessage:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      seen: true,
      history: false,
    },
    {
      name: 'Elna Batham',
      image: 'http://dummyimage.com/237x100.png/dddddd/000000',
      status: false,
      lastMessage: 'Donec quis orci eget orci vehicula condimentum.',
      seen: false,
      history: true,
    },
    {
      name: 'Jefferey Handman',
      image: 'http://dummyimage.com/204x100.png/dddddd/000000',
      status: true,
      lastMessage:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      seen: true,
      history: true,
    },
    {
      name: 'Florentia Fardy',
      image: 'http://dummyimage.com/139x100.png/dddddd/000000',
      status: true,
      lastMessage:
        'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      seen: false,
      history: false,
    },
    {
      name: 'Aleece Heaney`',
      image: 'http://dummyimage.com/165x100.png/ff4444/ffffff',
      status: false,
      lastMessage: 'Nulla mollis molestie lorem. Quisque ut erat.',
      seen: true,
      history: true,
    },
    {
      name: 'Clea Tonepohl',
      image: 'http://dummyimage.com/127x100.png/5fa2dd/ffffff',
      status: true,
      lastMessage: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      seen: false,
      history: true,
    },
    {
      name: 'Burlie Lathe',
      image: 'http://dummyimage.com/179x100.png/cc0000/ffffff',
      status: false,
      lastMessage: 'Nunc purus. Phasellus in felis.',
      seen: false,
      history: true,
    },
    {
      name: 'Margalit Donaher',
      image: 'http://dummyimage.com/247x100.png/ff4444/ffffff',
      status: false,
      lastMessage:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      seen: false,
      history: true,
    },
    {
      name: 'Irvine Bresnen',
      image: 'http://dummyimage.com/229x100.png/cc0000/ffffff',
      status: true,
      lastMessage:
        'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      seen: true,
      history: false,
    },
    {
      name: 'Tobie Dobie',
      image: 'http://dummyimage.com/196x100.png/ff4444/ffffff',
      status: true,
      lastMessage: 'Morbi quis tortor id nulla ultrices aliquet.',
      seen: false,
      history: false,
    },
    {
      name: 'Leo Brumpton',
      image: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
      status: true,
      lastMessage:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
      seen: false,
      history: true,
    },
    {
      name: 'Wanda Malicki',
      image: 'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
      status: false,
      lastMessage:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
      seen: true,
      history: false,
    },
    {
      name: 'Shannan Philpotts',
      image: 'http://dummyimage.com/219x100.png/ff4444/ffffff',
      status: false,
      lastMessage:
        'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      seen: true,
      history: true,
    },
    {
      name: 'Celestyna Rudkin',
      image: 'http://dummyimage.com/227x100.png/ff4444/ffffff',
      status: false,
      lastMessage:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
      seen: false,
      history: false,
    },
    {
      name: 'Pearle Rushe',
      image: 'http://dummyimage.com/127x100.png/dddddd/000000',
      status: true,
      lastMessage:
        'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      seen: false,
      history: false,
    },
  ];

  handleSeen(event: IUsuario) {
    this.snackBar.open(`Mensaje leído de ${event.name}`, 'cerrar', {
      duration: 5*1000,
    });
  }

  handleSeenHistory(event: any) {
    this.snackBar.open(`Historia vista de ${event.name}.`, 'cerrar', {
      duration: 5*1000, 
    });
  }
}
