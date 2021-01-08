import { Room } from './room';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private BASE_URL = 'http://localhost:8082/api/v1/rooms';

  createRoom(body: Room): Observable<any> {
    return this.http.post<Room>(`${this.BASE_URL}`, body);
  }

  updateRoom(id: number, body: Room): Observable<any> {
    return this.http.put<Room>(`${this.BASE_URL}/${id}`, body);
  }

  deteleRoom(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`, { responseType: 'text' });
  }

  getRoomList(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.BASE_URL}`);
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.BASE_URL}/${id}`);
  }

  constructor(private http: HttpClient) { }
}
