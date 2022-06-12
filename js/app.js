import { getWeatherData } from "./api.js"
import { createContent } from "./appcontent.js";
import { createHeader } from "./appheader.js";

const app = async () => {
    const weather = await getWeatherData('Санкт-Петербург');
    const header = createHeader(weather.name);
    const content = createContent(weather)
    document.body.append(header, content);
}

app()