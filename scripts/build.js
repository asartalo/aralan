import ncputil from "ncp";
import { join } from "path";
const ncp = ncputil.ncp;

const dirname = process.cwd();

ncp.limit = 8;

ncp(
  join(dirname, "src", "public"),
  join(dirname, "dist"),
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
  }
);