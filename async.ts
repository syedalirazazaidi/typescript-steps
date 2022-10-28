interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });

  console.log(data.birth_year);
  return data as LukeSkywalker;
};
console.log(fetchLukeSkywalker());
