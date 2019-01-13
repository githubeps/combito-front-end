import { HttpHeaders } from "@angular/common/http";

export const httpOptions = {


  headers :  new HttpHeaders()

  .append("Access-Control-Allow-Credentials", "true")
  .append("Authorization", 'Bearer '+localStorage.getItem("token"))
  .append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
  .append("Content-Type","application/x-www-form-urlencoded")

    .append('X-Requested-Width','XMLHttpRequest')
    .append("Cache-Control", "no-cache")  
//.append("Access-Control-Request-Headers", "Content-type,X-Requested-With,Origin,accept")
 
  };