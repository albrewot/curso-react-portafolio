export const doGet = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };
  const response = await fetch(`http://localhost:4000/api/user`, options)
    .then(v => v.json())
    .catch(err => {
      return {
        error: err
      };
    });
  console.log(response);
  return response;
};

export const doEdit = async data => {
  console.table(data);
  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      profession: data.profession,
      summary: data.summary,
      fbLink: data.fbLink,
      twLink: data.twLink,
      igLink: data.igLink,
      lkLink: data.lkLink,
      githubLink: data.githubLink
    })
  };
  const response = await fetch(`http://localhost:4000/api/edit`, options)
    .then(v => v.json())
    .catch(err => {
      return {
        error: err
      };
    });
  console.table(response);
  return response;
};

export const doCreate = async data => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      profession: data.profession,
      summary: data.summary,
      fbLink: data.fbLink,
      twLink: data.twLink,
      igLink: data.igLink,
      lkLink: data.lkLink,
      githubLink: data.githubLink
    })
  };
  const response = await fetch(`http://localhost:4000/api/create`, options)
    .then(v => v.json())
    .catch(err => {
      return {
        error: err
      };
    });
  console.log(response);
  return response;
};

export const doDelete = async () => {
  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json"
    }
  };
  const response = await fetch(`http://localhost:4000/api/delete`, options)
    .then(v => v.json())
    .catch(err => {
      return {
        error: err
      };
    });
  console.log(response);
  return response;
};
