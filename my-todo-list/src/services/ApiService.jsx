const base_url = "http://localhost/3000";

export class ApiService {
  url;
  headers = { "Content-type": "application/json" };

  constructor(resource) {
    this.url = `${this.url}/${resource}`;
  }

  Create = async (data) => {
    return await fetch(this.url, {
      method: 'POST',
      body: data,
      headers: this.headers,
    });
  };

  Read = async () => {
    return await fetch(this.url);
  };

  ReadId = async (id) => {
    return await fetch(`${this.url}/${id}`);
  };

  Update = async (data, id) => {
    return await fetch(`${this.url}/${id}`, {
      method: 'POST',
      body: data,
      headers: this.headers,
    });
  };

  Delete = async (id) => {
    return await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  };
}
