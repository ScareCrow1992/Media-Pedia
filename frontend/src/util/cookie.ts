import Cookies from 'js-cookie';

// 쿠키 파서
export function getCookie(namespace_name:string,  key_name: string): string | null {
  const saved = Cookies.get(namespace_name);
  if(saved){
    const parsed_cookie = JSON.parse(saved);
    return parsed_cookie[`${key_name}`];
  }
  else{
    return null;
  }
}
