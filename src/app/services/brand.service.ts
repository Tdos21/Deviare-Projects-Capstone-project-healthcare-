import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandComponent } from '../forms/brand/brand.component';


@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = 'http://localhost:9090/brand';

  constructor(private http: HttpClient) {}

  addBrand(brand: Brand): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, brand);
  }

   // Update brand
   updateBrand(id: number, brand: Brand): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, brand);
  }

  // Fetch brand by ID
  getBrandById(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/brand/${id}`);
  }

  // Delete a brand
  deleteBrand(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/all`);  // GET request to fetch all brands
  }

}

export class Brand {
  id: number;
  brandName: string;
  dateCreated: string;

  constructor(id: number, brandName: string, dateCreated: string) {
    this.id = id;
    this.brandName = brandName;
    this.dateCreated = dateCreated;
  }
}


