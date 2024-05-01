import { Injectable } from "@angular/core";
import { IRegisterUser } from "./register.interface";
import { HttpClient } from "@angular/common/http";
import { baseUrl } from "../shared/constants";
import { Observable, first, last } from "rxjs";

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) { }

    public registerUser(userData: IRegisterUser): Observable<IRegisterUser> {
        return this.http.post<IRegisterUser>(`${baseUrl}/users`, userData)
    }
}