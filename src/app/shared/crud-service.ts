import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

export class CrudService <T>{
  constructor(protected http: HttpClient, private API_URL: any) {}

  list() {
    // return this.http.get<T[]>(this.API_URL).pipe(delay(2000))  //Exemplo com delay de 2segundos
    return this.http.get<T[]>(this.API_URL);
  }

  loadById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: any) {
    return this.http.patch(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  save(record: any) {
    if (record['id']) {
      return this.update(record);
    }

    return this.create(record);
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
