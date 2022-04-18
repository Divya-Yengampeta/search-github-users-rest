import { BASE_URL } from "./User";

class ApiWrapper 
{
  async GetUsers() {
    const response = await fetch(BASE_URL);
    const users = await response.json();
    return users;
  }

  async GetUserByUserName(userName: string) {
    let resdata = await fetch(`${BASE_URL}/${userName.toLowerCase()}`);
    const user = await resdata.json();
    return user;
  }
}

export default ApiWrapper;
