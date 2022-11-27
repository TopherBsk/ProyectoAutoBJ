import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from '../shared/user.interface';
import { promise } from 'protractor';
import { AngularFireModule } from '@angular/fire/compat';
import { timingSafeEqual } from 'crypto';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { InteracionService } from './interacion.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$:Observable<User>;

  constructor(public afAuth: AngularFireAuth,private afs: AngularFirestore, private interaction:InteracionService) {
    this.user$=this.afAuth.authState.pipe(
      switchMap((user)=>{
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
  })
    )
  }

  getId() {
    return this.afs.createId();
  }

  getCollection<tipo>(path: string) {
    const collection = this.afs.collection<tipo>(path);
    return collection.valueChanges();
  }

  createDoc(data: any, path: string, id: string) {
    const collection = this.afs.collection(path);
    return collection.doc(id).set(data);
}
deleteDoc(path: string, id: string) {
  const collection = this.afs.collection(path);
  return collection.doc(id).delete();
}

  async loginGoogle(): Promise<User> {
    try{
      const{user}=await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    }
    catch(error){console.log('Error->', error)}
  }


  async resetPassword(email:string): Promise<void> { 
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){console.log('Error->', error)
  }
  }


  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    }
    catch (error) {
      console.log('Error->', error)
      this.interaction.presentToast('Correo o contraseña invalidos')
    }
  }
  
  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerifcationEmail();
      return user;
    }
    catch (error) { console.log('Error->', error)
    this.interaction.presentToast('Correo o contraseña invalidos') }
  }


  async sendVerifcationEmail(): Promise<void> { 
    try{
      return(await this.afAuth.currentUser).sendEmailVerification();
    }
    catch(error){
      console.log('Error->', error)}
  }
   isEmailVerified(user:User):boolean{
    return user.emailVerified=== true? true:false;
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log('Error->', error)
    }
  }
  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data:User = {
      uid:user.uid,
      email:user.email,
      emailVerified:user.emailVerified,
      displayName:user.displayName,
    };
    return userRef.set(data,{merge:true})
  }


}
