import {Store} from "cx/data";
import {Url, History, startHotAppLoop, enableCultureSensitiveFormatting} from "cx/ui";
import {Timing, Debug} from "cx/util";
enableCultureSensitiveFormatting();

//css
import "cx-theme-dark/dist/reset.css";
import "cx-theme-dark/dist/widgets.css";
import "cx-theme-dark/dist/svg.css";
import "cx-theme-dark/dist/charts.css";
import "./index.scss";

//store
const store = new Store();
Auth.registerStore(store);

//routing
//Url.setBaseFromScript("app*.js");
History.connect(store, "url");

//debug
//Timing.enable("app-loop");
//Debug.enable("app-data");

//app loop
import Routes from "./routes";
import {Auth} from "./api/Auth";

startHotAppLoop(module, document.getElementById("app"), store, Routes);
