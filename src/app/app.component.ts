import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Name-Gen2';
  firstName = 'Olivia';
  lastName = 'Cobble';
  hogwartsHouse = 'wut';
  ninjaSounds = ["ka", "zu", "mi", "te", "ku", "lu", 
            "ji", "ri", "ki", "zus", "me", "ta", "rin", "to", "mo", "no", "ke", 
            "shi", "ari", "chi", "ha", "ru", "mei", "na", "fu", "zi"];
  ninjaName = 'mystery';
  buttonClick() {
    console.log("Ninjafy!");
  }

  

    ninjafy(name:string) {
        var ninjyName:string = "";
        
        if (name.length == 0)
        {
        	return ninjyName;
        }
        
        var index = 0;
        while (index < 3 && index < name.length) { // You can change this!
            var letter = name.charAt(index);
            letter = letter.toLowerCase();
            ninjyName += this.ninjaSounds[letter.charCodeAt(0) - 10];
        }
        
        ninjyName = ninjyName.charAt(0).toUpperCase() + ninjyName.substring(1, ninjyName.length);
        
        return ninjyName;
    }
}
