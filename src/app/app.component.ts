import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({ ... })
export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  constructor(private cd: ChangeDetectorRef) {}
  nngAfterViewInit() {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
  
    this.card = elements.create('card', { style });
    this.card.mount(this.cardInfo.nativeElement);
  
    this.card.addEventListener('change', this.cardHandler);
  }
  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card, {
      email: this.emailAddress
    }

if (error) {
  console.log('Something is wrong:', error);
} else {
  console.log('Success!', token);
  <span class="code-annotation">// ...send the token to the your backend to process the charge</span>
}