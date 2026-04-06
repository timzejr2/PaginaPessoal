import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  frases: string[] = [
    'Olá, seja bem-vindo!',
    'Sou Valentim!',
    'Desenvolvedor Front-end',
    'Experiência com e-commerce',
    'VTEX, Loja Integrada e Angular',
    'Conhecimento em .NET e Azure',
    'Veja meus projetos'
  ];

  fraseAtual: string = "";
  indexAtual: number = 0;

  ngOnInit(): void {
    this.fraseAtual = this.frases[this.indexAtual];
    setInterval(() => {
      this.indexAtual = (this.indexAtual + 1) % this.frases.length;
      this.fraseAtual = this.frases[this.indexAtual];
    }, 5000);
  }
}
