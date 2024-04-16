import { Injectable } from '@nestjs/common';
import { Hotel } from './hotel.dto';

@Injectable()
export class SearchService {

    public  hotels = [
        {location: 'Goa', room : 'Delux'},
        {location: 'mumbai', room : 'Delux room'},
        {location: 'New Delhi', room : 'Delux room'},
        {location: 'Agra', room : 'Delux room'},
    ];


    public getSearchResults(): any {
        return {
            searchResults: [{
                searchOptions: '1st option'
            }, { searchOptions: '2nd option' }]
        }
    }

    public findHotels (offset: number, limit: number, parsedFilters: string): Hotel[] {
    

        if(offset && limit) {
            return hotelResults.hotels.splice(offset, limit);
        }

        return this.hotels;
    }
}