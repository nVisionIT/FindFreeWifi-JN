import {bootstrap, Component, NgFor, View} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
@Component({
    selector: 'my-app',
    providers: [HTTP_PROVIDERS]
    
})
@View({
        directives: [NgFor],
        templateUrl : 'app.html' 
    })
export class MyApp {
    locations: Object;

    constructor(http: Http) {
        http.get('http://www.findfreewifi.co.za/publicjson/getcities').subscribe(res => {
            this.locations = res.data;
        });
    }
    
}