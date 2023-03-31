async function servico(page) {
  const retorno = await fetch(page, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((response) =>
    response.json().then((data) => ({
      data: data,
      status: response.status,
    }))
  );

  console.log(retorno.data);

  return retorno;
}
