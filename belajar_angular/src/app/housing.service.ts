import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";
  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); //http://localhost:3000/housing
    return await data.json() ??[];
   
  }
  SubmitApplication(firstName:String, lastName : String, email: String){
    const apiUrl = 'http://localhost:3000/register'; // Ganti dengan URL backend Anda
  const body = { firstname: firstName, lastname: lastName, email: email };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Registration successful:', data);
      alert('Application submitted successfully!');
    })
    .catch((error) => {
      console.error('Error during registration:', error);
      alert('Failed to submit application.');
    });
  }
}