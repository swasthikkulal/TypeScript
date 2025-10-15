class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endPoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endPoint}`);
    if (!response.ok) {
      throw new Error(`error,${response.status}`);
    } else {
      return response.json() as T;
    }
  }

  async post<T, U>(endPoint:string, Data:U):Promise<T>{
    const response = await fetch(`${this.baseUrl}${endPoint}`,{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Data)
    })
    if (!response.ok) {
        throw new Error(`error ${response.status}`)
    }else{
        return response.json() as T;
    }
  }
}
