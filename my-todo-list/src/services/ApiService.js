const base_url = "http://localhost/3000";
const headers = { "Content-type": "application/json" };

const Create = async (resource, data) => {
  return await fetch(`${base_url}/${resource}`, {
    method: "POST",
    body: data,
    headers
  });
};

const Read = async (resource) => {
  return await fetch(`${base_url}/${resource}`);
};

const ReadId = async (resource, id) => {
  return await fetch(`${base_url}/${resource}/${id}`);
};

const Update = async (resource, id) => {
    return await fetch(`${base_url}/${resource}/${id}`, {
        method: "POST",
        body: data,
        headers
      });
};

const Delete = async (resource, id) => {
  return await fetch(`${base_url}/${resource}/${id}`,{
    method:"DELETE'"
  });
};

export const ApiService = {
  Create,
  Read,
  ReadId,
  Update,
  Delete,
};
