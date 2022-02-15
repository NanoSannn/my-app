import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  news = [
    {
      title : "White Album",
      subtitle: "40th Macross",
    },{
      title : "MACROSS DELTA",
      subtitle: "LIVE 2022 〜Walküre Reborn!〜 ",
    },{
      title : "M魂",
      subtitle: "SUPER DIMENSION FANCLUB",
    },{
      title : "White Album",
      subtitle: "40th Macross",
    },{
      title : "MACROSS DELTA",
      subtitle: "LIVE 2022 〜Walküre Reborn!〜 ",
    },{
      title : "M魂",
      subtitle: "SUPER DIMENSION FANCLUB",
    },{
      title : "White Album",
      subtitle: "40th Macross",
    },{
      title : "MACROSS DELTA",
      subtitle: "LIVE 2022 〜Walküre Reborn!〜 ",
    },{
      title : "M魂",
      subtitle: "SUPER DIMENSION FANCLUB",
    },{
      title : "M魂",
      subtitle: "SUPER DIMENSION FANCLUB",
    }
  ];
  imge = [
    {
      image:"https://i.pinimg.com/736x/67/a4/2d/67a42d98dd72d1f495eeecb7e383b0cf.jpg",
    }
  ]
  constructor() {}

}
