import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Hotel } from './hotel.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  searchHotels(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Query('filters') filters: string,
  ): Hotel[] {
    // Parse the filters query parameter.
    let parsedFilters;
    if (filters) {
      parsedFilters = JSON.parse(filters);
    } else {
      parsedFilters = '';
    }

    // Call the hotel service to get the hotels.
    const hotels = this.searchService.findHotels(offset, limit, parsedFilters);

    // Return the hotels.
    return hotels;
  }
}
