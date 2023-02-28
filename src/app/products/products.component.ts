import { Component } from '@angular/core';
import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  images: any[] = [];
  filteredImages: any[] | undefined;
  query: string = '';


selectedCategory = 'Zgjidh kategorine';
defaultHidden=false;
  constructor(private service: ImagesService) {}
  categories:string[]=["Te gjitha","Makarona","Salce","Oriz","Miell"]
  getImages() {
    this.service.getImages().subscribe((data: any[]) => {
      this.images = data;
      this.filteredImages = data;
    });
  }

  selectByCategory(category: string) {
    if (category === "Te gjitha") {
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
    this.getImages();
  }
}
