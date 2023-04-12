import { Response } from "express";

export const ok = (httpResponse: Response, content: any) =>
  httpResponse.status(200).json({
    code: "OK",
    content,
  });

export const created = (httpResponse: Response, content: any) =>
  httpResponse.status(201).json({
    code: "CREATED",
    content,
  });

export const badRequest = (httpResponse: Response, description: string) =>
  httpResponse.status(400).json({
    code: "BAD_REQUEST_ERROR",
    description,
  });

export const notFoundRequest = (httpResponse: Response, description: string) =>
  httpResponse.status(404).json({
    code: "NOT_FOUND_ERROR",
    description,
  });

export const unauthorized = (httpResponse: Response, message: string) =>
  httpResponse.status(401).json({
    code: "UNAUTHORIZED",
    message,
  });

export const serverError = (
  httpResponse: Response,
  error: object,
  description = "Something wrong happened.",
) => {
  httpResponse.status(500).json({
    code: "SERVER_ERROR",
    description,
    error: error.toString(),
    message: error,
  });
};

export const requiredField = (
  httpResponse: Response,
  field: any,
  message = `O campo ${field} é inválido.`
) =>
  httpResponse.status(422).json({
    code: "REQUIRED_FIELD_MISSING",
    message,
    field,
  });