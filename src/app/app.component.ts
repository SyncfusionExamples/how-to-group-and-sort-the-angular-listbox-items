import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public data: { [key: string]: Object }[] = [
    { item: 'Cabbage', id: 'item1', category: 'Leafy Vegetables' },
    { item: 'Pumpkins', id: 'item2', category: 'Leafy Vegetables' },
    { item: 'Spinach', id: 'item3', category: 'Leafy Vegetables' },
    { item: 'Green bean', id: 'item4', category: 'Beans' },
    { item: 'Horse gram', id: 'item5', category: 'Beans' },
    { item: 'Chickpea', id: 'item6', category: 'Beans' }
  ];

  public fieldSettings = {
    text: 'item', value: 'id', groupBy: 'category'
  };

  public dataChild = [
    { item: 'Watercress', id: 'item1', category: 'Leafy Vegetables' },
    { item: 'Beet Greens', id: 'item2', category: 'Leafy Vegetables' },
    { item: 'Romaine Lettuce', id: 'item3', category: 'Leafy Vegetables' },
    { item: 'Black Beans', id: 'item4', category: 'Beans' },
    { item: 'Soybeans', id: 'item5', category: 'Beans' },
    { item: 'Lentils', id: 'item6', category: 'Beans' }
  ];

  public fieldSettingsChild = {
    text: 'item', value: 'id', groupBy: 'category'
  }

}
