import { Injectable } from "@angular/core";
import { ILoginUser } from "./login.interface";
import { HttpClient } from "@angular/common/http";
import { baseUrl } from "../shared/constants";
import { Observable, tap } from "rxjs";
import { IRegisterUser } from "../register/register.interface";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    public loginUser(): Observable<IRegisterUser[]> {
        return this.http.get<IRegisterUser[]>(`${baseUrl}/users`)
    }

    public deleteUser(id: string) {
        return this.http.delete(`${baseUrl}/users/${id}`)
    }

    public updateUser(userData: any, id: string) {
        return this.http.put(`${baseUrl}/users/${id}`, userData)
    }
}