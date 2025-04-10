export const GET = () => {
    return fetch(`https://api.github.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        return { success: false, message: `Erro na requisição: ${error}` };
      });
  };
  