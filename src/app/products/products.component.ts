import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  lang = sessionStorage.getItem('lang');
  images: any[] = [];
  filteredImages: any[] | undefined;
  query: string = '';
  selectedCategory = '';
  categories: string[] = ["Te gjitha", "Makarona", "Salce", "Oriz", "Miell"];
  categories2: string[] = ["Tutti i prodotti", "Pasta", "Salsa", "Riso", "Farina"];
  translation: any;

  constructor(
    private service: ImagesService,
    private http: HttpClient
  ) {}

  getTranslation(lang: string) {
    return this.http.get(`assets/i18n/${lang}.json`);
  }

  getImagesAl() {
    this.service.getImages('images-al').subscribe((data: any[]) => {
      this.images = data;
      this.filteredImages = data;
    });
  }

  getImagesIt() {
    this.service.getImages('images-it').subscribe((data: any[]) => {
      this.images = data;
      this.filteredImages = data;
    });
  }

  selectByCategory(category: string) {
    if (category == "Te gjitha" || "Tutti i prodotti") {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(
        (image) => image.category.toLowerCase() === category.toLowerCase()
      );
    }
  }

  searchImages() {
    this.filteredImages = this.images.filter(image =>
      image.title.toLowerCase().includes(this.query.toLowerCase()) ||
      image.description.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  ngOnInit() {
    const lang = sessionStorage.getItem('lang') || 'al';
    this.getTranslation(lang).subscribe((data) => {
      this.translation = data;
      this.selectedCategory = this.translation.selectCategory;
    });
   if(lang == 'it'){
    this.getImagesIt();
   }
   else {
    this.getImagesAl();
  }
  }
}
