import { HttpHeaders } from '@angular/common/http';

export class Constants{
    public static readonly BASE_URL = "http://localhost:8080/pgReport";
  public static readonly LOGIN_URL = "/auth";
  public static readonly USER_PRESENT_URL="/userPresent";
  public static readonly AUTH_TOKEN="";
 public static  HEADERS= new HttpHeaders();
 public static  isLogin = true;
}