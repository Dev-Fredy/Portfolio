let getProjects = async () => {
  let res = await fetch(`${process.env.BASE_URL}/api/projects`, {
    next: { revalidate: 50 },
  });

  if (!res.ok) {
    console.log(res.status);
  }

  return res.json();
};

export default getProjects;
