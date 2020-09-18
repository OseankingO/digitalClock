import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock-component',
  templateUrl: './digital-clock-component.component.html',
  styleUrls: ['./digital-clock-component.component.css']
})
export class DigitalClockComponentComponent implements OnInit {

  private date = new Date();

  private hour: number;
  private minute: number;
  private second: number;
  private ampm: number;
  public hourStr: string;
  public minuteStr: string;
  public secondStr: string;
  public ampmStr: string; 

  private updating: boolean;

  private counter;
  
  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.updating = false;
    this.initTime(date);
    this.counter = setInterval(() => {
      this.updateTime();
    }, 1000)
  }

  private initTime(date: Date) {
    this.hour = date.getHours();

    this.ampm = this.hour >= 12 ? 1 : -1;
    console.log(this.ampm);
    this.ampmStr = this.ampm == 1 ? "PM" : "AM";

    this.hour = this.hour % 12;
    if(this.ampm == 1 && this.hour == 0) {
      this.hour = 12;
    }
    this.hourStr = this.hour < 10 ? "0" + this.hour.toString() : this.hour.toString();

    this.minute = date.getMinutes();
    this.minuteStr = this.minute < 10 ? "0" + this.minute.toString() : this.minute.toString();

    this.second = date.getSeconds();
    this.secondStr = this.second < 10 ? "0" + this.second.toString() : this.second.toString();
  }

  private updateTime() {
    this.second += 1;
    if(this.second >= 60) {
      this.minute += 1;
      this.second = 0;
      if(this.minute >= 60) {
        this.hour += 1;
        this.minute = 0;
        if(this.ampm == -1 && this.hour == 12) {
          this.ampm *= -1;
        } else if(this.ampm == 1 && this.hour > 12) {
          this.hour = 1;
        } else if(this.ampm == 1 && this.hour > 11) {
          this.ampm *= -1;
          this.hour = 0;
        }
      }
    }
    
    
    this.secondStr = this.second < 10 ? "0" + this.second.toString() : this.second.toString();
    this.minuteStr = this.minute < 10 ? "0" + this.minute.toString() : this.minute.toString();
    this.hourStr = this.hour < 10 ? "0" + this.hour.toString() : this.hour.toString();
    this.ampmStr = this.ampm == 1 ? "PM" : "AM";

  }

  startCounting() {
    this.counter = setInterval(() => {
      this.updateTime();
    }, 1000)
  }

  stopCounting() {
    clearInterval(this.counter);
  }

  saveHour(event) {
    this.hour = Number(event.target.value);
    if(isNaN(this.hour)) {
      alert("Please Enter Number!");
    } else if(this.ampm == -1 && (this.hour > 11 || this.hour < 0)) {
      alert("Please Enter Number Between 0 - 11 for AM");
    } else if(this.ampm == 1 && (this.hour > 12 || this.hour < 1)) {
      alert("Please Enter Number Between 1 - 12 for PM");
    } else {
      this.startCounting();
    }
  }

  saveMinute(event) {
    this.minute = Number(event.target.value);
    if(isNaN(this.minute)) {
      alert("Please Enter Number!");
    }else if(this.minute > 59 || this.minute < 0) {
      alert("Please Enter Number Between 0 - 59");
    } else {
      this.startCounting();
    }
  }

  saveSecond(event) {
    this.second = Number(event.target.value);
    if(isNaN(this.second)) {
      alert("Please Enter Number!");
    }else if(this.second > 59 || this.second < 0) {
      alert("Please Enter Number Between 0 - 59");
    } else {
      this.startCounting();
    }
  }

  saveAmpm(event) {
    let val = event.target.value;
    if(val.toLowerCase() == "pm") {
      if(this.hour < 1 || this.hour > 12) {
        alert("Only have 1PM to 12PM");
      } else {
        this.ampm = 1;
        this.startCounting();
      }
    } else if(val.toLowerCase() == "am") {
      if(this.hour < 0 || this.hour > 11) {
        alert("Only have 0AM to 11AM");
      } else {
        this.ampm = -1;
        this.startCounting();
      }
    } else {
      alert("Please Enter AM or PM!");
    }
  }
}
