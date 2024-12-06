import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';

import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  nome: string = 'Albiezer Fascio';
  user: User = {
    name: 'Albiezer Fascio',
    email: 'albiezer@example.com',
    sector: 'Tecnologia',
    role: 'Desenvolvedor',
    firebaseId: 'ddd',
    health: 'Saudavel',
    dentistry: 'Saudavel'
  };

  constructor(private dataBaseStore: AngularFirestore) { }
  getAllUsesrs(){
    return this.dataBaseStore.collection('users', user=> user.orderBy('name')).valueChanges({idField:'firebaseId'}) as Observable<any[]>;

  }
  addUser(user: User){
    return this.dataBaseStore.collection('users').add(user);
  }
  update( userId: string, user: User){
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }
  deleteUser(userId: string){
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}
