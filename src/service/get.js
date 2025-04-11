export const GET = (perfil) => {
    return fetch(`https://api.github.com/users/${perfil}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        return { success: false, message: `Erro na requisição: ${error}` };
      });
  };
  