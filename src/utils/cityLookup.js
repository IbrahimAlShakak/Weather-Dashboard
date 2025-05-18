import cityList from "../data/city.list.json"

export function getCityByName(name)
{
    return cityList.find((city) => city.name.toLowerCase() === name.toLowerCase());

}