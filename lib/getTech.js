let getTechnologies = async () => {
  try {
    let res = await fetch(`${process.env.BASE_URL}/api/tech`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch the data: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    return console.log(error.message);
  }
};

export default getTechnologies;
