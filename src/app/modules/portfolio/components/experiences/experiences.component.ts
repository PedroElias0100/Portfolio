import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Sub gerente',
        p: ' Frango no Pote | Nov 2022 - Presente'
      },
      text: '<p> Auxiliar administrativo e fiscal de loja </p>'
    },
    {
      summary: {
        strong: 'Estagiario',
        p: 'Caixa Economica | Jul 2020 - Jan 2022'
      },
      text: '<p> Auxiliar em aplicações do banco </p>'
    },
    {
      summary: {
        strong: 'Estagiario',
        p: 'TJDF| Jun 2017 - Dez 2019'
      },
      text: '<p> Auxiliar administrativo </p>'
    }
  ])
}
