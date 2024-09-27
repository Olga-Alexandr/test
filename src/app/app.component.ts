import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './style.scss'],
})
export class AppComponent {
  title = 'test';
  public test: string = 'abcde';
  // public name: string = 'john';
  // public surn: string = 'smith';
  public src = '{{src}}';
  public alt = '{{alt}}}';
  public arr: number[] = [1, 2, 3, 4, 5];
  public user = {
		name: 'john',
		surn: 'smit',
    img: 'pic.png',
		alt: 'picture',
	};

  public showName() {
		return 'john';
	}

	public showSurn() {
		return 'smit';
	}

  public isAdmin: boolean = true;
}

