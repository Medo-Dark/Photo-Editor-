import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.css']
})
export class CustomImageComponent implements OnInit {
  @Input() imageAlt: string = '';
  @Input() imageWidth: number = 0;
  imageUrl: string = '';
  croppedImage: any;

  constructor(private route: ActivatedRoute)  { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageUrl = params['src'] ;
      console.log("--------------------------------------------------------",this.imageUrl)
    });
  }

  cropImage(): void {
    // Implement cropping logic using ngx-image-cropper library
    // Update this.croppedImage with the cropped image data
  }

  zoomIn(): void {
    // Implement zoom in logic
  }

  zoomOut(): void {
    // Implement zoom out logic
  }

  rotateLeft(): void {
    // Implement rotate left logic
  }

  rotateRight(): void {
    // Implement rotate right logic
  }

  onSaveClick(): void {
    // Implement the logic for saving the image here
    // You can use this.croppedImage or any other data you need for saving
  }
}
