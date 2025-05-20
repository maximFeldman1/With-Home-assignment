import axios from 'axios';
import { ApiResponse, Event } from '../types/event';
import { promises } from 'dns';

const BASE_URL = 'https://staging-api.coing.co/api/v2/communities/838/groups';

export async function fetchEvents(page: number = 1, pageSize = 10):Promise<Event[]> {
  const params = {
    page,
    pageSize,
    'filterBy[closed]': 0,
    'filterBy[isPrivate]': 0,
  };
  const response = await axios.get<ApiResponse>(BASE_URL, { params });

  return response.data.data.records
}
