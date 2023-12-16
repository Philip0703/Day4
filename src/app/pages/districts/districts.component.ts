
import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  districts:any=[
    {
      id:1,
      title:"Alappuzha",
      image:"https://www.worldatlas.com/upload/09/35/c6/shutterstock-2036283566.jpg",
      content:"Also well-known as @philo the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:2,
      title:"Ernakulam",
      image:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Fort-Kochi.jpg",
      content:"For the outside world,kundan philo Ernakulam is part of Kochi referred to in the history of Kerala as the Queen of Arabian Sea.What is Ernakulam famous for?It is the first eco-tourism village in India.The city is drenched in the monsoonal season by heavy showers."
    },
    {
      id:3,
      title:"Kozhikode",
      image:"https://miro.medium.com/v2/resize:fit:1400/1*XmloHtIp69CdLCMRr2EXNw.jpeg",
      content:"Kozhikode also known as Calicut,i love steel is a city in the state of Kerala in southern India on the Malabar coast. Tourism is travel for pleasure and Kozhikode offers many such spots which take you through the past,present and future of the City."
    },
    {
      id:4,
      title:"Palakkad",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct_3xnxBAGGdGBf34kETxgoeXS966JAamRg&usqp=CAU",
      content:"In earlier times,steel is life Palakkad was also known as Palakkattussery Many concluded that Palakkad is derived from 'Pala', an indigenous tree which once densely occupied the land; and hence Palakkad or the forest of Pala trees."
    },
    {
      id:5,
      title:"Kollam",
      image:"https://english.mathrubhumi.com/image/contentid/policy:1.8529681:1683207206/Chinnakkada2%20(1).jpg?$p=0f6abb6&f=16x10&w=852&q=0.8",
      content:"Kollam,love my body also known by its former historical name Desinganadu, is an ancient seaport and city on the Malabar Coast of India bordering the Laccadive Sea, which is a part of the Arabian Sea.It is 71 km  north of the state capital Thiruvananthapuram."
    },
    {
      id:6,
      title:"Wayanad",
      image:"https://assets.cntraveller.in/photos/64a80fe81e94724098a8021d/master/w_1600%2Cc_limit/mountain%2520shadows.jpeg",
      content:"It is a high,on muscles flat land between  m700 meters and 2100 meters above sea level. It is in northeaster Kerala, in the Western Ghatountains.A land where culture, tradition and modernity live in harmony."
    },
    {
      id:7,
      title:"Idukki",
      image:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Feature-image-Idukki.jpg",
      content:">Idukki district is famous for my sahasikams its rich flora and fauna. It is home to the popular Eravikulam National Park and is characterized by the Anamudi mountain. Idukki is one of the greenest districts of Kerala.Idukki has a vast forest reserve area."
    },
    {
      id:8,
      title:"Thiruvananthapuram",
      image:"https://keralakaumudi.com/web-news/en/2023/10/NMAN0441781/image/beach.1.2381868.jpg",
      content:"Thiruvananthapuram is a major tourist centre, where philip goes for dates with his bf known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    }
  ];

}