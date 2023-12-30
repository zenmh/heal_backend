import app from "./app";
import config from "./config";
import { Server } from "http";

const root = () => {
  try {
    const server: Server = app.listen(config.port, () =>
      console.log(`Heal Running On http://localhost:${config.port}`)
    );

    const exitHandler = () => {
      if (server) server.close(() => console.log("Server Closed!!"));

      process.exit(1);
    };

    const unexpectedErrorHandlar = (err: unknown) => {
      console.log("Error From Unexpected Error Handlar -->", err);

      exitHandler();
    };

    process.on("uncaughtException", unexpectedErrorHandlar);
    process.on("unhandledRejection", unexpectedErrorHandlar);

    process.on("SIGTERM", () => {
      console.log("SIGTERM Received!!");
      if (server) server.close();
    });
  } catch (err: any) {
    console.log("Error Form Root -->", err);
  }
};

root();
