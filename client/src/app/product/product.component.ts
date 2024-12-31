import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper/core';
import { CartService } from '../services/cart.service';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number;
  product: any;
  quantity: number;
  showcaseImages: any[] = [];
  loading = false;

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this._route.paramMap
      .pipe(
        map((param: any) => {
          return param.params.id;
        })
      )
      .subscribe((productId) => {
        // returns string so convert it to number
        this.id = parseInt(productId);
        this._product.getSingleProduct(productId).subscribe((product) => {
          console.log(product);
          this.product = product;
          if (product.quantity === 0) this.quantity = 0;
          else this.quantity = 1;

          if (product.images) {
            this.showcaseImages = product.images.split(';');
          }
          this.loading = false;
        });
      });
  }

  addToCart(): void {
    this._cart.addProduct({
      id: this.id,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.image,
      title: this.product.title,
      maxQuantity: this.product.quantity,
    });
  }

  comments: { user: string; avatar: string; rating: number; content: string }[] =
    [
      {
        user: 'Mr.Market',
        avatar: '../../assets/avt2.png',
        rating: 5,
        content: 'Khóa học tạm',
      },
      {
        user: 'Big Mom',
        avatar: '../../assets/avt1.png',
        rating: 4,
        content: 'Khóa học chất lượng, sẽ không mua lại',
      },
    ];

  newComment = {
    user: '',
    avatar: '../../assets/avtmd1.png',
    rating: 0,
    content: '',
  };

  submitComment() {
    if (
      this.newComment.content.trim() === '' ||
      this.newComment.rating === 0 ||
      this.newComment.user.trim() === ''
    ) {
      alert('Please fill out your name, review, and provide a rating.');
      return;
    }

    // Thêm bình luận mới
    this.comments.push({
      ...this.newComment,
      avatar: `https://i.pravatar.cc/40?u=${this.newComment.user}`,
    });

    // Reset form
    this.newComment = {
      user: '',
      avatar: 'https://i.pravatar.cc/40',
      rating: 0,
      content: '',
    };
    alert('Your review has been submitted!');
  }
}
