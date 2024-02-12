import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  API_ACCESSKEY: str(),
});

export default env;
