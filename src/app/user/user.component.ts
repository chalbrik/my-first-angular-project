import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]); //tutaj w klasach  możemy definiować properties, które potem są dostępne w szablonach html - jeżeli atrybut jest zadeklarowany jako sygnał to musimy go wywołac w szablonie tak jak metodę czyli dodając nawiacy ()
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //poniżej deklarujemy getter - metoda, która jest utworzona wewnątrz klasy - UserComponent - to jest klasa. Działa ona jak property, jej zadanie jest utworzenie, wyprodukowanie nowej wartości
  // z tego względu, że to jest getter będziemy używać go w szablonie tak jak zwykłego atrybutu - czyli poprzez napisanie nazwy tej metody - imagePath

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
