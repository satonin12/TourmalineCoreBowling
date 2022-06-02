import { IBowling } from "../types/types";

class Bowling implements IBowling {
  logToConsole = (msg : string) => console.log(msg || 'logToConsole');
}

export default Bowling;
