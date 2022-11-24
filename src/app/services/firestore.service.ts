import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore,
            ) { }

    async logout(): Promise<void> {}
    async resetPassword(): Promise<void> {}
    async senVerificationEmail(): Promise<void> {}

    async login(): Promise<any> {}
    async register(): Promise<any> {}
    async loginGoogle(): Promise<any> {}
    async resetPasswoord(): Promise<any> {}
}
