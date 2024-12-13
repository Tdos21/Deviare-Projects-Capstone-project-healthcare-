import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = 'http://localhost:9090/medicine';

  constructor(private http: HttpClient) { }

  // Add Medicine
  addMedicine(medicine: any): Observable<any> {
    const body = new FormData();
    body.append('prodName', medicine.prodName);
    body.append('category', medicine.category);
    body.append('brand', medicine.brand);
    body.append('unitPrice', medicine.unitPrice.toString());
    body.append('recommendAge', medicine.recommendAge.toString());
    body.append('isActive', medicine.isActive.toString());
    body.append('prodDescription', medicine.prodDescription);

    return this.http.post(`${this.apiUrl}/add`, body);
  }

  // Edit Medicine
  editMedicine(id: number, medicine: any): Observable<any> {
    const body = new FormData();
    body.append('prodName', medicine.prodName);
    body.append('category', medicine.category);
    body.append('brand', medicine.brand);
    body.append('unitPrice', medicine.unitPrice.toString());
    body.append('recommendAge', medicine.recommendAge.toString());
    body.append('isActive', medicine.isActive.toString());
    body.append('prodDescription', medicine.prodDescription);

    return this.http.put(`${this.apiUrl}/edit/${id}`, body);
  }

  // Delete Medicine
  deleteMedicine(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Get All Medicines
  getAllMedicines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
}
