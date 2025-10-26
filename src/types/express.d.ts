declare module "cors";

import "express";

declare module "express-sever-static-core"{
  interface Request {
    auth?: {
      sub?: string;
      email?: string;
      [key: string]: any;
    };
  }
}
