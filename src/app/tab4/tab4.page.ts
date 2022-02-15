import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  promotion = [
    {
      title : "White Album",
      subtitle: "40th Macross",
      image:"https://i.pinimg.com/736x/60/cb/ea/60cbea27b23a451f14596a4f35f806f6.jpg",
      detail:"Hi"
    },
    {
      title : "Maria Violina Rosalin",
      subtitle: "LIVE 2022 〜Walküre Reborn!〜 ",
      image:"https://i.pinimg.com/736x/80/93/08/8093080cc87170b7003b2225c5326c28.jpg",
      detail:"ถถถถถถถถถถถถ"
    },
    {
      title : "Chica Pandillera (Mikey x T/N)",
      subtitle: "vfdfg",
      image:"https://i.pinimg.com/736x/4e/01/3f/4e013fb605aa6e3a35f60ec5724ebb43.jpg",
      detail:"Chica Pandillera (Mikey x T/N)"
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
