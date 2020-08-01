import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  items = [
    { title: 'Placeholder 1', content: 'Lorem ipsum dolor' },
    { title: 'Placeholder 2', content: 'Lorem ipsum dolor' },
    { title: 'Placeholder 3', content: 'Lorem ipsum dolor' },
    { title: 'Placeholder 4', content: 'Lorem ipsum dolor' },
    { title: 'Placeholder 5', content: 'Lorem ipsum dolor' },
    { title: 'Placeholder 6', content: 'Lorem ipsum dolor' },
  ];

  modalOpen = false;

  constructor() {}

  toggleModalVisibility(): void {
    this.modalOpen = !this.modalOpen;
  }

  ngOnInit(): void {}
}
