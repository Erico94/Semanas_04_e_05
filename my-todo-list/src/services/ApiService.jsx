const base_url = "http://localhost:3000";

export  class ApiService {
  url;
  headers = { "Content-type": "application/json" };

  constructor(resource) {
    this.url = `${base_url}/${resource}`;
  }

  Create = async (data) => {
    const response = await fetch(this.url, {
      method: 'POST',
      body: data,
      headers: this.headers,
    });
    return response.json();
  };

  Read = async () => {
    const response =  await fetch(this.url);
    return response.json();
  };

  ReadId = async (id) => {
    const response =  await fetch(`${this.url}/${id}`);
    return response.json();
  };

  Update = async (data, id) => {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'POST',
      body: data,
      headers: this.headers,
    });
    return response.json();
  };

  Delete = async (id) => {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  };
}
