export const GET = async (perfil) => {
    try {
    const response = await fetch(`https://api.github.com/users/${perfil}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
  };
  